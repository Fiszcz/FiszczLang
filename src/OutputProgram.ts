import {Comparisons, FunctionSignature, Variable} from './types';
import {
    call,
    comparison,
    convertToDouble,
    convertToi32,
    createGlobalVariable,
    createStringConstant,
    createVariableDefinition,
    definitionOfFunction,
    endOfIfInstruction,
    endWhileLoop,
    ifInstruction,
    load,
    loadArrayElement,
    openWhile,
    print,
    printString,
    read,
    ret,
    store,
} from './outputLLVMInstructions';
import {ReturnTypeVisitValue} from './FiszczLangVisitor';

const fs = require('fs');

const headerOfFile = `
declare i32 @scanf(i8*, ...)
declare i32 @printf(i8*, ...)

@.strdouble = private unnamed_addr constant [4 x i8] c"%lf\\00", align 1
@.strint = private unnamed_addr constant [3 x i8] c"%d\\00", align 1
@.str.0 = private unnamed_addr constant [3 x i8] c"%s\\00", align 1

`;

const mainFunction = `
define i32 @main() nounwind {\n\n
`;

const endOfFile = `\nret i32 0\n}`;

process.env.NODE_ENV = 'production';

export class OutputProgram {
    instructions: string[] = [];
    globalVariables = new Map<string, Variable>();
    iteratorOfUnnamedVariables = 0;

    stringConstants: string[] = [];
    iteratorOfStrings = 0;

    functionSignatures = new Map<string, FunctionSignature>();
    functions: string[] = [];
    areWeInsideFunction: boolean = false;
    iteratorOfUnnamedVariablesInsideFunction = 0;
    temporaryPlaceForInstructions: string[] = [];
    functionVariables = new Map<string, Variable>();

    addCommentAboutCurrentInstruction(instruction: string) {
        this.instructions.push('\n\t; ' + instruction);
    }

    writeToFile() {
        let outputProgram = headerOfFile;

        this.functions.forEach((definedFunction) => (outputProgram += definedFunction + '\n'));
        outputProgram += '\n';

        this.stringConstants.forEach(
            (stringConstant, index) =>
                (outputProgram += createStringConstant(index + 1, getLengthOfString(stringConstant), stringConstant) + '\n'),
        );
        outputProgram += '\n';

        this.globalVariables.forEach((variable) => {
            outputProgram += createGlobalVariable(variable) + '\n';
        });

        outputProgram += mainFunction;
        this.instructions.forEach((instruction) => (outputProgram += instruction + '\n'));
        outputProgram += endOfFile;

        fs.writeFileSync('output.ll', outputProgram);
    }

    addVariable(name, dataAboutVariable: Variable) {
        if (this.areWeInsideFunction) {
            this.functionVariables.set(name, {...dataAboutVariable, name: '%' + name});
        } else {
            this.globalVariables.set(name, {...dataAboutVariable, name: '@' + name});
        }
    }

    getVariable(variableName: string, notError: boolean = false) {
        const localVariable = this.functionVariables.get(variableName);
        const globalVariable = this.globalVariables.get(variableName);
        if (!notError && !localVariable && !globalVariable) {
            process.stderr.write(
                'You are trying to use a variable that does not exist ' +
                    ':Line - ' +
                    global.additionalData.line +
                    ' :Column - ' +
                    global.additionalData.column +
                    '\n',
            );
            process.exit(1);
        }
        if (this.areWeInsideFunction) {
            return localVariable || globalVariable;
        } else {
            return globalVariable;
        }
    }

    getNextRegId(): number {
        if (this.areWeInsideFunction) {
            return ++this.iteratorOfUnnamedVariablesInsideFunction;
        } else {
            return ++this.iteratorOfUnnamedVariables;
        }
    }

    addLineOfIR(line: string) {
        this.instructions.push(line);
    }

    addStringConstant(text: string): number {
        ++this.iteratorOfStrings;
        this.stringConstants.push(text);

        return this.iteratorOfStrings;
    }

    startFunction({
        nameOfOperation,
        returnType,
        parameters,
    }: {
        nameOfOperation: string;
        returnType: string;
        parameters: {type: string; nameOfParameter: string}[];
    }) {
        this.iteratorOfUnnamedVariablesInsideFunction = parameters.length;
        this.areWeInsideFunction = true;

        this.temporaryPlaceForInstructions = this.instructions;
        this.instructions = [];

        this.addLineOfIR(
            definitionOfFunction(
                returnType,
                nameOfOperation,
                parameters.map((parameter) => parameter.type),
            ),
        );

        this.functionVariables = new Map<string, Variable>();
        this.addLineOfIR(createVariableDefinition('returnValue', returnType, returnType === 'i32' ? '0' : '0.0', getAlign(returnType)));
        parameters.forEach((parameter, index) => {
            this.addLineOfIR(createVariableDefinition(parameter.nameOfParameter, parameter.type, '%' + index, getAlign(parameter.type)));
            this.addVariable(parameter.nameOfParameter, {type: parameter.type, value: '', name: parameter.nameOfParameter});
        });
    }

    addFunctionSignature({
        nameOfOperation,
        returnType,
        parameters,
    }: {
        nameOfOperation: string;
        returnType: string;
        parameters: {type: string; nameOfParameter: string}[];
    }) {
        this.functionSignatures.set(nameOfOperation, {
            name: nameOfOperation,
            returnType,
            parameters: parameters.map((parameter) => parameter.type),
        });
    }

    endFunction(returnType: string) {
        this.addLineOfIR('br label %returnBlock');
        this.addLineOfIR('returnBlock:');
        const regId = this.loadOperation({type: returnType, name: '%returnValue'});
        this.addLineOfIR(`ret ${returnType === 'i32' ? 'i32' : 'double'} %${regId}`);
        this.addLineOfIR('}');
        this.areWeInsideFunction = false;
        this.functions.push(this.instructions.join('\n'));
        this.instructions = this.temporaryPlaceForInstructions;
    }

    // TODO: sprawdzac czy typ zwracany zgadza sie z typem zwracanym funkcji
    returnValue(returnValue: ReturnTypeVisitValue) {
        if (returnValue.typeOfValue === 'variable') {
            const variable = this.getVariable(returnValue.value);
            this.addLineOfIR(store('%returnValue', variable.type, '%' + this.loadOperation(variable), getAlign(variable.type)));
        } else {
            this.addLineOfIR(store('%returnValue', returnValue.typeOfValue, returnValue.value, getAlign(returnValue.typeOfValue)));
        }
        this.addLineOfIR('br label %returnBlock');
        this.getNextRegId();
    }

    // TODO: sprawdzac poprawnosc typow argumentow do funkcji
    callFunction(operationName: string, argumentsToFunction: ReturnTypeVisitValue[]): ReturnTypeVisitValue {
        const returnTypeOfFunction = this.functionSignatures.get(operationName).returnType;

        const mappedArguments = argumentsToFunction.map((arg) => {
            if (arg.typeOfValue === 'variable') {
                const variable = this.getVariable(arg.value);
                const regId = this.loadOperation(variable);
                return {
                    typeOfValue: variable.type,
                    value: '%' + regId,
                };
            }
            return arg;
        });

        const returnRegId = this.getNextRegId();

        this.addLineOfIR(call(returnRegId, returnTypeOfFunction, operationName, mappedArguments));

        return {value: '%' + returnRegId, typeOfValue: returnTypeOfFunction};
    }

    createNumericVariable(name: string, type: 'i32' | 'double', value: {type: 'i32' | 'double'; value: string}) {
        let valueToVariable: string | number = value.value;
        if (type === 'i32' && value?.type === 'double') {
            valueToVariable = this.getNextRegId();
            convertToi32(valueToVariable, value.value);
        } else if (type === 'double' && value.type === 'i32') {
            valueToVariable = this.getNextRegId();
            convertToDouble(valueToVariable, value.value);
        }
        if (this.areWeInsideFunction) {
            this.addLineOfIR(createVariableDefinition(name, type, valueToVariable, getAlign(type)));
        } else {
            this.addLineOfIR(store('@' + name, type, valueToVariable, getAlign(type)));
        }
        this.addVariable(name, {type, value, name});
    }

    createDynamicVariable(name: string, value: {type: 'i32' | 'double'; value: string}) {
        const variable = this.getVariable(name, true);
        let newName = variable?.name ? variable.name.slice(1) + 'a' : name;

        if (this.areWeInsideFunction) {
            this.addLineOfIR(createVariableDefinition(newName, value.type, value.value, getAlign(value.type)));
        } else {
            this.addLineOfIR(store('@' + newName, value.type, value.value, getAlign(value.type)));
        }

        if (this.areWeInsideFunction) {
            this.functionVariables.set(name, {type: value.type, value, name: '%' + newName, dynamic: true});
        } else {
            this.globalVariables.set(name, {type: value.type, value, name: '@' + newName, dynamic: true});
        }
    }

    createStringVariable(name: string, type: 'i8*', value: string) {
        const stringConstantId = this.addStringConstant(value);
        const lengthOfText = getLengthOfString(value);

        const definition = `getelementptr inbounds ([${lengthOfText + 1} x i8], [${
            lengthOfText + 1
        } x i8]* @.str.${stringConstantId}, i64 0, i64 0)`;
        if (this.areWeInsideFunction) {
            this.addLineOfIR(createVariableDefinition(name, 'i8*', definition, 8));
        }
        this.addVariable(name, {type, value: {stringConstantId, lengthOfText, definition: 'i8* ' + definition + ', align 8'}, name});
    }

    createNumericArray(name: string, type: string, value: string[]) {
        const definition = `[${value
            .map((valueOfElement) => {
                return 'i32 ' + valueOfElement;
            })
            .join(',')}]`;

        if (this.areWeInsideFunction) {
            this.addLineOfIR(createVariableDefinition(name, type, definition, 4));
        }
        this.addVariable(name, {type, value, name, basicType: 'i32'});
    }

    createStringArray(name: string, type: string, value: string[]) {
        const createdStrings = value.map((someString) => {
            const lengthOfText = getLengthOfString(someString);
            const stringConstantId = this.addStringConstant(someString);
            return {
                lengthOfText,
                stringConstantId,
            };
        });
        const definition = `[${createdStrings
            .map(
                (createdString) =>
                    `i8* getelementptr inbounds ([${createdString.lengthOfText + 1} x i8], [${
                        createdString.lengthOfText + 1
                    } x i8]* @.str.${createdString.stringConstantId}, i64 0, i64 0)`,
            )
            .join(',')}]`;
        if (this.areWeInsideFunction) {
            this.addLineOfIR(`%${name} = alloca ${type}, align ${16}`);
            this.addLineOfIR(store(name, type, definition, 4));
        }
        this.addVariable(name, {type, value: {...createdStrings, definition}, name, basicType: 'i8*'});
    }

    assignment(variableName: string, newValue: ReturnTypeVisitValue) {
        const variable = this.getVariable(variableName);
        if (variable.dynamic) {
            if (newValue.typeOfValue === 'variable') {
                const variable = this.getVariable(newValue.value);
                this.createDynamicVariable(variableName, {type: variable.type as any, value: '%' + this.loadOperation(variable)});
            }
            this.createDynamicVariable(variableName, {type: newValue.typeOfValue as any, value: newValue.value});
        } else {
            this.addLineOfIR(store(variable.name, variable.type, newValue.value, getAlign(variable.type)));
        }
    }

    assignmentToArrayElement(variableName, elementNumber, newValue) {
        const variable = this.getVariable(variableName);

        const regIdOfGetElement = this.getNextRegId();
        this.addLineOfIR(loadArrayElement(regIdOfGetElement, variable.type, variable.name, elementNumber.value));

        this.addLineOfIR(store('%' + regIdOfGetElement, variable.basicType, newValue.value, getAlign(variable.basicType)));
    }

    loadOperation(variable) {
        const regId = this.getNextRegId();
        this.addLineOfIR(load(regId, variable.type, variable.name, getAlign(variable.type)));

        return regId;
    }

    loadArrayElementOperation(variable, element) {
        const regIdOfGetElement = this.getNextRegId();
        this.addLineOfIR(loadArrayElement(regIdOfGetElement, variable.type, variable.name, element));

        return this.loadOperation({name: '%' + regIdOfGetElement, type: variable.basicType});
    }

    printValue(valueToPrint) {
        switch (valueToPrint.typeOfValue) {
            case 'variable': {
                const variableName = valueToPrint.value;
                const variable = this.getVariable(variableName);
                if (variable.type === 'i8*') {
                    const regIdWithValueToPrint = this.loadOperation(variable);
                    this.addLineOfIR(
                        print(
                            this.getNextRegId(),
                            getInputOutputStringType(variable.type, variable.value),
                            variable.type,
                            '%' + regIdWithValueToPrint,
                        ),
                    );
                } else {
                    const regIdWithValueToPrint = this.loadOperation(variable);
                    this.addLineOfIR(
                        print(this.getNextRegId(), getInputOutputStringType(variable.type), variable.type, '%' + regIdWithValueToPrint),
                    );
                }
                break;
            }
            case 'i32': {
                this.addLineOfIR(
                    print(
                        this.getNextRegId(),
                        getInputOutputStringType(valueToPrint.typeOfValue),
                        valueToPrint.typeOfValue,
                        valueToPrint.value,
                    ),
                );
                break;
            }
            case 'double': {
                this.addLineOfIR(
                    print(
                        this.getNextRegId(),
                        getInputOutputStringType(valueToPrint.typeOfValue),
                        valueToPrint.typeOfValue,
                        valueToPrint.value,
                    ),
                );
                break;
            }
            case 'i8*': {
                const stringConstantId = this.addStringConstant(valueToPrint.value);
                this.addLineOfIR(printString(this.getNextRegId(), getLengthOfString(valueToPrint.value), stringConstantId));
                break;
            }
            case 'arrayVariable': {
                const variable = this.getVariable(valueToPrint.value);
                const elementRegId = this.loadArrayElementOperation(variable, valueToPrint.element.value);
                this.addLineOfIR(
                    print(this.getNextRegId(), getInputOutputStringType(variable.basicType), variable.basicType, '%' + elementRegId),
                );
                break;
            }
        }
    }

    readValue(variableName) {
        const variable = this.getVariable(variableName);
        this.addLineOfIR(read(this.getNextRegId(), getInputOutputStringType(variable.type), variable.type, variable.name));
    }

    startWhile(conditionElements: {leftSideOfOperator; rightSideOfOperator; comparisonType}) {
        const labelOfCondition = this.getNextRegId();

        this.addLineOfIR(openWhile(labelOfCondition));

        const {leftSideOfOperator, rightSideOfOperator, comparisonType} = conditionElements;
        const comparisonResult = this.makeComparison(leftSideOfOperator, rightSideOfOperator, comparisonType);

        const lineOfIRToEditAfterEndOfIf = this.instructions.length;
        this.addLineOfIR('WAITING FOR IF');

        const labelOfWhileBody = this.getNextRegId();

        return {lineOfIRToEditAfterEndOfIf, labelOfCondition, labelOfWhileBody, comparisonResult};
    }

    endWhile({lineOfIRToEditAfterEndOfIf, labelOfCondition, labelOfWhileBody, comparisonResult}) {
        const labelAfterWhile = this.getNextRegId();

        this.addLineOfIR(endWhileLoop(labelOfCondition, labelAfterWhile));

        this.instructions[lineOfIRToEditAfterEndOfIf] = ifInstruction(comparisonResult, labelOfWhileBody, labelAfterWhile);
    }

    startIf() {
        const labelOfIf = this.getNextRegId();

        const lineOfIRToEditAfterEndOfIf = this.instructions.length;
        this.addLineOfIR('WAITING FOR IF');

        return {lineOfIRToEditAfterEndOfIf, labelOfIf};
    }

    endIf({comparisonResult, lineOfIRToEditAfterEndOfIf, labelOfIf}) {
        const labelAfterIf = this.getNextRegId();

        this.instructions[lineOfIRToEditAfterEndOfIf] = ifInstruction(comparisonResult, labelOfIf, labelAfterIf);

        this.addLineOfIR(endOfIfInstruction(labelAfterIf));
    }

    makeComparison(firstElement, secondElement, typeOfComparison: Comparisons) {
        if (firstElement.typeOfValue === 'variable') {
            firstElement = this.getVariableForArithmeticExpression(firstElement.value);
            firstElement = {typeOfValue: firstElement.type, value: firstElement.value};
        }
        if (secondElement.typeOfValue === 'variable') {
            secondElement = this.getVariableForArithmeticExpression(secondElement.value);
            secondElement = {typeOfValue: secondElement.type, value: secondElement.value};
        }
        if (firstElement.typeOfValue === 'arrayVariable') {
            const variableRepresentation = this.getVariable(firstElement.value);
            firstElement = {
                typeOfValue: variableRepresentation.basicType,
                value: '%' + this.loadArrayElementOperation(variableRepresentation, firstElement.element.value),
            };
        }
        if (secondElement.typeOfValue === 'arrayVariable') {
            const variableRepresentation = this.getVariable(secondElement.value);
            secondElement = {
                typeOfValue: variableRepresentation.basicType,
                value: '%' + this.loadArrayElementOperation(variableRepresentation, secondElement.element.value),
            };
        }

        const comparisonRegId = this.getNextRegId();
        if (firstElement.typeOfValue === 'i32' && secondElement.typeOfValue === 'i32') {
            this.addLineOfIR(
                comparison(
                    comparisonRegId,
                    getTypeOfComparisonForType(typeOfComparison, 'i32'),
                    'i32',
                    firstElement.value,
                    secondElement.value,
                ),
            );
        } else if (firstElement.typeOfValue === 'i32' && secondElement.typeOfValue === 'double') {
            const convertedToDouble = this.getNextRegId();
            this.addLineOfIR(convertToDouble(convertedToDouble, firstElement.value));
            this.addLineOfIR(
                comparison(
                    comparisonRegId,
                    getTypeOfComparisonForType(typeOfComparison, 'double'),
                    'double',
                    convertedToDouble,
                    secondElement.value,
                ),
            );
        } else if (firstElement.typeOfValue === 'double' && secondElement.typeOfValue === 'i32') {
            const convertedToDouble = this.getNextRegId();
            this.addLineOfIR(convertToDouble(convertedToDouble, secondElement.value));
            this.addLineOfIR(
                comparison(
                    comparisonRegId,
                    getTypeOfComparisonForType(typeOfComparison, 'double'),
                    'double',
                    firstElement.value,
                    convertedToDouble,
                ),
            );
        } else {
            this.addLineOfIR(
                comparison(
                    comparisonRegId,
                    getTypeOfComparisonForType(typeOfComparison, 'double'),
                    'double',
                    firstElement.value,
                    secondElement.value,
                ),
            );
        }

        return '%' + comparisonRegId;
    }

    getVariableForArithmeticExpression(variableName) {
        const variable = this.getVariable(variableName);
        return {...variable, value: '%' + this.loadOperation(variable)};
    }

    arithmeticOperation(firstElement, secondElement, operation) {
        if (firstElement.type === 'i32' && secondElement.type === 'i32') {
            const returnRegId = this.getNextRegId();
            this.addLineOfIR(global[operation](returnRegId, firstElement.value, secondElement.value));
            return {type: 'i32', value: '%' + returnRegId};
        } else if (firstElement.type === 'i32' && secondElement.type === 'double') {
            const convertedToDouble = this.getNextRegId();
            this.addLineOfIR(convertToDouble(convertedToDouble, firstElement.value));
            const returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, '%' + convertedToDouble, secondElement.value));
            return {type: 'double', value: '%' + returnRegId};
        } else if (firstElement.type === 'double' && secondElement.type === 'i32') {
            const convertedToDouble = this.getNextRegId();
            this.addLineOfIR(convertToDouble(convertedToDouble, secondElement.value));
            const returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, firstElement.value, '%' + convertedToDouble));
            return {type: 'double', value: '%' + returnRegId};
        } else {
            const returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, firstElement.value, secondElement.value));
            return {type: 'double', value: '%' + returnRegId};
        }
    }
}

const getLengthOfString = (text) => {
    return text.length - 2 * (text.match(/\\0/g) || []).length;
};

const getInputOutputStringType = (type, options = {lengthOfText: 2, stringConstantId: 0}) => {
    switch (type) {
        case 'i32':
            return '[3 x i8], [3 x i8]* @.strint';
        case 'double':
            return '[4 x i8], [4 x i8]* @.strdouble';
        case 'i8*':
            return `[${options.lengthOfText + 1} x i8], [${options.lengthOfText + 1} x i8]* @.str.${options.stringConstantId}`;
    }
};

const getAlign = (type) => {
    switch (type) {
        case 'i32':
            return 4;
        case 'double':
            return 8;
        case 'i8*':
            return 8;
    }
};

const getTypeOfComparisonForType = (comparison: Comparisons, typeOfElements) => {
    switch (comparison) {
        case Comparisons.EQUAL: {
            if (typeOfElements === 'double') {
                return 'oeq';
            } else {
                return 'eq';
            }
        }
        case Comparisons.LESS_THAN: {
            return (typeOfElements === 'double' ? 'o' : 's') + 'lt';
        }
        case Comparisons.GREATER_THAN: {
            return (typeOfElements === 'double' ? 'o' : 's') + 'gt';
        }
        case Comparisons.GREATER_OR_EQUAL: {
            return (typeOfElements === 'double' ? 'o' : 's') + 'ge';
        }
        case Comparisons.LESS_OR_EQUAL: {
            return (typeOfElements === 'double' ? 'o' : 's') + 'le';
        }
    }
};

exports.OutputProgram = OutputProgram;
