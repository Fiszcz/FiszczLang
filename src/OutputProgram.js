var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
Object.defineProperty(exports, '__esModule', {value: true});
exports.OutputProgram = void 0;
var types_1 = require('./types');
var outputLLVMInstructions_1 = require('./outputLLVMInstructions');
var fs = require('fs');
var headerOfFile =
    '\ndeclare i32 @scanf(i8*, ...)\ndeclare i32 @printf(i8*, ...)\n\n@.strdouble = private unnamed_addr constant [4 x i8] c"%lf\\00", align 1\n@.strint = private unnamed_addr constant [3 x i8] c"%d\\00", align 1\n@.str.0 = private unnamed_addr constant [3 x i8] c"%s\\00", align 1\n\n';
var mainFunction = '\ndefine i32 @main() nounwind {\n\n\n';
var endOfFile = '\nret i32 0\n}';
process.env.NODE_ENV = 'production';
var OutputProgram = /** @class */ (function () {
    function OutputProgram() {
        this.instructions = [];
        this.variables = new Map();
        this.iteratorOfUnnamedVariables = 0;
        this.stringConstants = [];
        this.iteratorOfStrings = 0;
        this.functionSignatures = new Map();
        this.functions = [];
        this.areWeInsideFunction = false;
        this.iteratorOfUnnamedVariablesInsideFunction = 0;
        this.temporaryPlaceForInstructions = [];
    }
    OutputProgram.prototype.addCommentAboutCurrentInstruction = function (instruction) {
        this.instructions.push('\n\t; ' + instruction);
    };
    OutputProgram.prototype.writeToFile = function () {
        var outputProgram = headerOfFile;
        this.functions.forEach(function (definedFunction) {
            return (outputProgram += definedFunction + '\n');
        });
        this.stringConstants.forEach(function (stringConstant, index) {
            return (outputProgram +=
                outputLLVMInstructions_1.createStringConstant(index + 1, getLengthOfString(stringConstant), stringConstant) + '\n');
        });
        outputProgram += mainFunction;
        this.instructions.forEach(function (instruction) {
            return (outputProgram += instruction + '\n');
        });
        outputProgram += endOfFile;
        fs.writeFileSync('output.ll', outputProgram);
    };
    OutputProgram.prototype.addVariable = function (name, dataAboutVariable) {
        if (this.areWeInsideFunction) {
            this.functionVariables.set(name, dataAboutVariable);
        } else {
            this.variables.set(name, dataAboutVariable);
        }
    };
    OutputProgram.prototype.getVariable = function (variableName) {
        var variable = this.areWeInsideFunction ? this.functionVariables.get(variableName) : this.variables.get(variableName);
        if (variable) {
            return variable;
        } else {
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
    };
    OutputProgram.prototype.getNextRegId = function () {
        if (this.areWeInsideFunction) {
            return ++this.iteratorOfUnnamedVariablesInsideFunction;
        } else {
            return ++this.iteratorOfUnnamedVariables;
        }
    };
    OutputProgram.prototype.addLineOfIR = function (line) {
        this.instructions.push(line);
    };
    OutputProgram.prototype.addStringConstant = function (text) {
        ++this.iteratorOfStrings;
        this.stringConstants.push(text);
        return this.iteratorOfStrings;
    };
    OutputProgram.prototype.startFunction = function (_a) {
        var _this = this;
        var nameOfOperation = _a.nameOfOperation,
            returnType = _a.returnType,
            parameters = _a.parameters;
        this.iteratorOfUnnamedVariablesInsideFunction = parameters.length;
        this.areWeInsideFunction = true;
        this.temporaryPlaceForInstructions = this.instructions;
        this.instructions = [];
        this.addLineOfIR(
            outputLLVMInstructions_1.definitionOfFunction(
                returnType,
                nameOfOperation,
                parameters.map(function (parameter) {
                    return parameter.type;
                }),
            ),
        );
        this.functionVariables = new Map();
        parameters.forEach(function (parameter, index) {
            _this.addLineOfIR(
                outputLLVMInstructions_1.createVariableDefinition(
                    parameter.nameOfParameter,
                    parameter.type,
                    '%' + index,
                    getAlign(parameter.type),
                ),
            );
            _this.addVariable(parameter.nameOfParameter, {type: parameter.type, value: '', name: parameter.nameOfParameter});
        });
        this.functionSignatures.set(nameOfOperation, {
            name: nameOfOperation,
            returnType: returnType,
            parameters: parameters.map(function (parameter) {
                return parameter.type;
            }),
        });
    };
    OutputProgram.prototype.endFunction = function () {
        this.addLineOfIR('}');
        this.areWeInsideFunction = false;
        this.functions.push(this.instructions.join('\n'));
        this.instructions = this.temporaryPlaceForInstructions;
    };
    // TODO: sprawdzac czy typ zwracany zgadza sie z typem zwracanym funkcji
    OutputProgram.prototype.returnValue = function (returnValue) {
        if (returnValue.typeOfValue === 'variable') {
            var variable = this.getVariable(returnValue.value);
            this.addLineOfIR(outputLLVMInstructions_1.ret(variable.type, '%' + this.loadOperation(variable)));
        } else {
            this.addLineOfIR(outputLLVMInstructions_1.ret(returnValue.typeOfValue, returnValue.value));
        }
    };
    // TODO: sprawdzac poprawnosc typow argumentow do funkcji
    OutputProgram.prototype.callFunction = function (operationName, argumentsToFunction) {
        var returnRegId = this.getNextRegId();
        var returnTypeOfFunction = this.functionSignatures.get(operationName).returnType;
        this.addLineOfIR(outputLLVMInstructions_1.call(returnRegId, returnTypeOfFunction, operationName, argumentsToFunction));
        return {value: '%' + returnRegId, typeOfValue: returnTypeOfFunction};
    };
    OutputProgram.prototype.createNumericVariable = function (name, type, value) {
        var valueToVariable = value.value;
        if (type === 'i32' && (value === null || value === void 0 ? void 0 : value.type) === 'double') {
            valueToVariable = this.getNextRegId();
            outputLLVMInstructions_1.convertToi32(valueToVariable, value.value);
        } else if (type === 'double' && value.type === 'i32') {
            valueToVariable = this.getNextRegId();
            outputLLVMInstructions_1.convertToDouble(valueToVariable, value.value);
        }
        this.addLineOfIR(outputLLVMInstructions_1.createVariableDefinition(name, type, valueToVariable, getAlign(type)));
        this.addVariable(name, {type: type, value: value, name: name});
    };
    OutputProgram.prototype.createStringVariable = function (name, type, value) {
        var stringConstantId = this.addStringConstant(value);
        var lengthOfText = getLengthOfString(value);
        this.addLineOfIR(
            outputLLVMInstructions_1.createVariableDefinition(
                name,
                'i8*',
                'getelementptr inbounds ([' +
                    (lengthOfText + 1) +
                    ' x i8], [' +
                    (lengthOfText + 1) +
                    ' x i8]* @.str.' +
                    stringConstantId +
                    ', i64 0, i64 0)',
                8,
            ),
        );
        this.addVariable(name, {type: type, value: {stringConstantId: stringConstantId, lengthOfText: lengthOfText}, name: name});
    };
    OutputProgram.prototype.createNumericArray = function (name, type, value) {
        this.addLineOfIR(
            outputLLVMInstructions_1.createVariableDefinition(
                name,
                type,
                '[' +
                    value
                        .map(function (valueOfElement) {
                            return 'i32 ' + valueOfElement;
                        })
                        .join(',') +
                    ']',
                4,
            ),
        );
        this.addVariable(name, {type: type, value: value, name: name, basicType: 'i32'});
    };
    OutputProgram.prototype.createStringArray = function (name, type, value) {
        var _this = this;
        var createdStrings = value.map(function (someString) {
            var lengthOfText = getLengthOfString(someString);
            var stringConstantId = _this.addStringConstant(someString);
            return {
                lengthOfText: lengthOfText,
                stringConstantId: stringConstantId,
            };
        });
        var valueToStoreInstruction =
            '[' +
            createdStrings
                .map(function (createdString) {
                    return (
                        'i8* getelementptr inbounds ([' +
                        (createdString.lengthOfText + 1) +
                        ' x i8], [' +
                        (createdString.lengthOfText + 1) +
                        ' x i8]* @.str.' +
                        createdString.stringConstantId +
                        ', i64 0, i64 0)'
                    );
                })
                .join(',') +
            ']';
        this.addLineOfIR('%' + name + ' = alloca ' + type + ', align ' + 16);
        this.addLineOfIR(outputLLVMInstructions_1.store(name, type, valueToStoreInstruction, 4));
        this.addVariable(name, {type: type, value: createdStrings, name: name, basicType: 'i8*'});
    };
    OutputProgram.prototype.assignment = function (variableName, newValue) {
        var variable = this.getVariable(variableName);
        this.addLineOfIR(outputLLVMInstructions_1.store(variableName, variable.type, newValue.value, getAlign(variable.type)));
    };
    OutputProgram.prototype.assignmentToArrayElement = function (variableName, elementNumber, newValue) {
        var variable = this.getVariable(variableName);
        var regIdOfGetElement = this.getNextRegId();
        this.addLineOfIR(outputLLVMInstructions_1.loadArrayElement(regIdOfGetElement, variable.type, variable.name, elementNumber.value));
        this.addLineOfIR(
            outputLLVMInstructions_1.store(regIdOfGetElement, variable.basicType, newValue.value, getAlign(variable.basicType)),
        );
    };
    OutputProgram.prototype.loadOperation = function (variable) {
        var regId = this.getNextRegId();
        this.addLineOfIR(outputLLVMInstructions_1.load(regId, variable.type, variable.name, getAlign(variable.type)));
        return regId;
    };
    OutputProgram.prototype.loadArrayElementOperation = function (variable, element) {
        var regIdOfGetElement = this.getNextRegId();
        this.addLineOfIR(outputLLVMInstructions_1.loadArrayElement(regIdOfGetElement, variable.type, variable.name, element));
        return this.loadOperation({name: regIdOfGetElement, type: variable.basicType});
    };
    OutputProgram.prototype.printValue = function (valueToPrint) {
        switch (valueToPrint.typeOfValue) {
            case 'variable': {
                var variableName = valueToPrint.value;
                var variable = this.getVariable(variableName);
                if (variable.type === 'i8*') {
                    var regIdWithValueToPrint = this.loadOperation(variable);
                    this.addLineOfIR(
                        outputLLVMInstructions_1.print(
                            this.getNextRegId(),
                            getInputOutputStringType(variable.type, variable.value),
                            variable.type,
                            '%' + regIdWithValueToPrint,
                        ),
                    );
                } else {
                    var regIdWithValueToPrint = this.loadOperation(variable);
                    this.addLineOfIR(
                        outputLLVMInstructions_1.print(
                            this.getNextRegId(),
                            getInputOutputStringType(variable.type),
                            variable.type,
                            '%' + regIdWithValueToPrint,
                        ),
                    );
                }
                break;
            }
            case 'i32': {
                this.addLineOfIR(
                    outputLLVMInstructions_1.print(
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
                    outputLLVMInstructions_1.print(
                        this.getNextRegId(),
                        getInputOutputStringType(valueToPrint.typeOfValue),
                        valueToPrint.typeOfValue,
                        valueToPrint.value,
                    ),
                );
                break;
            }
            case 'i8*': {
                var stringConstantId = this.addStringConstant(valueToPrint.value);
                this.addLineOfIR(
                    outputLLVMInstructions_1.printString(this.getNextRegId(), getLengthOfString(valueToPrint.value), stringConstantId),
                );
                break;
            }
            case 'arrayVariable': {
                var variable = this.getVariable(valueToPrint.value);
                var elementRegId = this.loadArrayElementOperation(variable, valueToPrint.element.value);
                this.addLineOfIR(
                    outputLLVMInstructions_1.print(
                        this.getNextRegId(),
                        getInputOutputStringType(variable.basicType),
                        variable.basicType,
                        '%' + elementRegId,
                    ),
                );
                break;
            }
        }
    };
    OutputProgram.prototype.readValue = function (variableName) {
        var variable = this.getVariable(variableName);
        this.addLineOfIR(
            outputLLVMInstructions_1.read(this.getNextRegId(), getInputOutputStringType(variable.type), variable.type, variableName),
        );
    };
    OutputProgram.prototype.startWhile = function (conditionElements) {
        var labelOfCondition = this.getNextRegId();
        this.addLineOfIR(outputLLVMInstructions_1.openWhile(labelOfCondition));
        var leftSideOfOperator = conditionElements.leftSideOfOperator,
            rightSideOfOperator = conditionElements.rightSideOfOperator,
            comparisonType = conditionElements.comparisonType;
        var comparisonResult = this.makeComparison(leftSideOfOperator, rightSideOfOperator, comparisonType);
        var lineOfIRToEditAfterEndOfIf = this.instructions.length;
        this.addLineOfIR('WAITING FOR IF');
        var labelOfWhileBody = this.getNextRegId();
        return {
            lineOfIRToEditAfterEndOfIf: lineOfIRToEditAfterEndOfIf,
            labelOfCondition: labelOfCondition,
            labelOfWhileBody: labelOfWhileBody,
            comparisonResult: comparisonResult,
        };
    };
    OutputProgram.prototype.endWhile = function (_a) {
        var lineOfIRToEditAfterEndOfIf = _a.lineOfIRToEditAfterEndOfIf,
            labelOfCondition = _a.labelOfCondition,
            labelOfWhileBody = _a.labelOfWhileBody,
            comparisonResult = _a.comparisonResult;
        var labelAfterWhile = this.getNextRegId();
        this.addLineOfIR(outputLLVMInstructions_1.endWhileLoop(labelOfCondition, labelAfterWhile));
        this.instructions[lineOfIRToEditAfterEndOfIf] = outputLLVMInstructions_1.ifInstruction(
            comparisonResult,
            labelOfWhileBody,
            labelAfterWhile,
        );
    };
    OutputProgram.prototype.startIf = function () {
        var labelOfIf = this.getNextRegId();
        var lineOfIRToEditAfterEndOfIf = this.instructions.length;
        this.addLineOfIR('WAITING FOR IF');
        return {lineOfIRToEditAfterEndOfIf: lineOfIRToEditAfterEndOfIf, labelOfIf: labelOfIf};
    };
    OutputProgram.prototype.endIf = function (_a) {
        var comparisonResult = _a.comparisonResult,
            lineOfIRToEditAfterEndOfIf = _a.lineOfIRToEditAfterEndOfIf,
            labelOfIf = _a.labelOfIf;
        var labelAfterIf = this.getNextRegId();
        this.instructions[lineOfIRToEditAfterEndOfIf] = outputLLVMInstructions_1.ifInstruction(comparisonResult, labelOfIf, labelAfterIf);
        this.addLineOfIR(outputLLVMInstructions_1.endOfIfInstruction(labelAfterIf));
    };
    OutputProgram.prototype.makeComparison = function (firstElement, secondElement, typeOfComparison) {
        if (firstElement.typeOfValue === 'variable') {
            firstElement = this.getVariableForArithmeticExpression(firstElement.value);
            firstElement = {typeOfValue: firstElement.type, value: firstElement.value};
        }
        if (secondElement.typeOfValue === 'variable') {
            secondElement = this.getVariableForArithmeticExpression(secondElement.value);
            secondElement = {typeOfValue: secondElement.type, value: secondElement.value};
        }
        if (firstElement.typeOfValue === 'arrayVariable') {
            var variableRepresentation = this.getVariable(firstElement.value);
            firstElement = {
                typeOfValue: variableRepresentation.basicType,
                value: '%' + this.loadArrayElementOperation(variableRepresentation, firstElement.element.value),
            };
        }
        if (secondElement.typeOfValue === 'arrayVariable') {
            var variableRepresentation = this.getVariable(secondElement.value);
            secondElement = {
                typeOfValue: variableRepresentation.basicType,
                value: '%' + this.loadArrayElementOperation(variableRepresentation, secondElement.element.value),
            };
        }
        var comparisonRegId = this.getNextRegId();
        if (firstElement.typeOfValue === 'i32' && secondElement.typeOfValue === 'i32') {
            this.addLineOfIR(
                outputLLVMInstructions_1.comparison(
                    comparisonRegId,
                    getTypeOfComparisonForType(typeOfComparison, 'i32'),
                    'i32',
                    firstElement.value,
                    secondElement.value,
                ),
            );
        } else if (firstElement.typeOfValue === 'i32' && secondElement.typeOfValue === 'double') {
            var convertedToDouble = this.getNextRegId();
            this.addLineOfIR(outputLLVMInstructions_1.convertToDouble(convertedToDouble, firstElement.value));
            this.addLineOfIR(
                outputLLVMInstructions_1.comparison(
                    comparisonRegId,
                    getTypeOfComparisonForType(typeOfComparison, 'double'),
                    'double',
                    convertedToDouble,
                    secondElement.value,
                ),
            );
        } else if (firstElement.typeOfValue === 'double' && secondElement.typeOfValue === 'i32') {
            var convertedToDouble = this.getNextRegId();
            this.addLineOfIR(outputLLVMInstructions_1.convertToDouble(convertedToDouble, secondElement.value));
            this.addLineOfIR(
                outputLLVMInstructions_1.comparison(
                    comparisonRegId,
                    getTypeOfComparisonForType(typeOfComparison, 'double'),
                    'double',
                    firstElement.value,
                    convertedToDouble,
                ),
            );
        } else {
            this.addLineOfIR(
                outputLLVMInstructions_1.comparison(
                    comparisonRegId,
                    getTypeOfComparisonForType(typeOfComparison, 'double'),
                    'double',
                    firstElement.value,
                    secondElement.value,
                ),
            );
        }
        return '%' + comparisonRegId;
    };
    OutputProgram.prototype.getVariableForArithmeticExpression = function (variableName) {
        var variable = this.getVariable(variableName);
        return __assign(__assign({}, variable), {value: '%' + this.loadOperation(variable)});
    };
    OutputProgram.prototype.arithmeticOperation = function (firstElement, secondElement, operation) {
        if (firstElement.type === 'i32' && secondElement.type === 'i32') {
            var returnRegId = this.getNextRegId();
            this.addLineOfIR(global[operation](returnRegId, firstElement.value, secondElement.value));
            return {type: 'i32', value: '%' + returnRegId};
        } else if (firstElement.type === 'i32' && secondElement.type === 'double') {
            var convertedToDouble = this.getNextRegId();
            this.addLineOfIR(outputLLVMInstructions_1.convertToDouble(convertedToDouble, firstElement.value));
            var returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, '%' + convertedToDouble, secondElement.value));
            return {type: 'double', value: '%' + returnRegId};
        } else if (firstElement.type === 'double' && secondElement.type === 'i32') {
            var convertedToDouble = this.getNextRegId();
            this.addLineOfIR(outputLLVMInstructions_1.convertToDouble(convertedToDouble, secondElement.value));
            var returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, firstElement.value, '%' + convertedToDouble));
            return {type: 'double', value: '%' + returnRegId};
        } else {
            var returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, firstElement.value, secondElement.value));
            return {type: 'double', value: '%' + returnRegId};
        }
    };
    return OutputProgram;
})();
exports.OutputProgram = OutputProgram;
var getLengthOfString = function (text) {
    return text.length - 2 * (text.match(/\\0/g) || []).length;
};
var getInputOutputStringType = function (type, options) {
    if (options === void 0) {
        options = {lengthOfText: 2, stringConstantId: 0};
    }
    switch (type) {
        case 'i32':
            return '[3 x i8], [3 x i8]* @.strint';
        case 'double':
            return '[4 x i8], [4 x i8]* @.strdouble';
        case 'i8*':
            return (
                '[' + (options.lengthOfText + 1) + ' x i8], [' + (options.lengthOfText + 1) + ' x i8]* @.str.' + options.stringConstantId
            );
    }
};
var getAlign = function (type) {
    switch (type) {
        case 'i32':
            return 4;
        case 'double':
            return 8;
        case 'i8*':
            return 8;
    }
};
var getTypeOfComparisonForType = function (comparison, typeOfElements) {
    switch (comparison) {
        case types_1.Comparisons.EQUAL: {
            if (typeOfElements === 'double') {
                return 'oeq';
            } else {
                return 'eq';
            }
        }
        case types_1.Comparisons.LESS_THAN: {
            return (typeOfElements === 'double' ? 'o' : 's') + 'lt';
        }
        case types_1.Comparisons.GREATER_THAN: {
            return (typeOfElements === 'double' ? 'o' : 's') + 'gt';
        }
        case types_1.Comparisons.GREATER_OR_EQUAL: {
            return (typeOfElements === 'double' ? 'o' : 's') + 'ge';
        }
        case types_1.Comparisons.LESS_OR_EQUAL: {
            return (typeOfElements === 'double' ? 'o' : 's') + 'le';
        }
    }
};
exports.OutputProgram = OutputProgram;
//# sourceMappingURL=OutputProgram.js.map
