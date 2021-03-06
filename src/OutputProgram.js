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
        this.globalVariables = new Map();
        this.iteratorOfUnnamedVariables = 0;
        this.stringConstants = [];
        this.iteratorOfStrings = 0;
        this.functionSignatures = new Map();
        this.functions = [];
        this.areWeInsideFunction = false;
        this.iteratorOfUnnamedVariablesInsideFunction = 0;
        this.temporaryPlaceForInstructions = [];
        this.functionVariables = new Map();
    }
    OutputProgram.prototype.addCommentAboutCurrentInstruction = function (instruction) {
        this.instructions.push('\n\t; ' + instruction);
    };
    OutputProgram.prototype.writeToFile = function () {
        var outputProgram = headerOfFile;
        this.functions.forEach(function (definedFunction) {
            return (outputProgram += definedFunction + '\n');
        });
        outputProgram += '\n';
        this.stringConstants.forEach(function (stringConstant, index) {
            return (outputProgram +=
                outputLLVMInstructions_1.createStringConstant(index + 1, getLengthOfString(stringConstant), stringConstant) + '\n');
        });
        outputProgram += '\n';
        this.globalVariables.forEach(function (variable) {
            outputProgram += outputLLVMInstructions_1.createGlobalVariable(variable) + '\n';
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
            this.functionVariables.set(name, __assign(__assign({}, dataAboutVariable), {name: '%' + name}));
        } else {
            this.globalVariables.set(name, __assign(__assign({}, dataAboutVariable), {name: '@' + name}));
        }
    };
    OutputProgram.prototype.getVariable = function (variableName, notError) {
        if (notError === void 0) {
            notError = false;
        }
        var localVariable = this.functionVariables.get(variableName);
        var globalVariable = this.globalVariables.get(variableName);
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
        this.addLineOfIR(
            outputLLVMInstructions_1.createVariableDefinition(
                'returnValue',
                returnType,
                returnType === 'i32' ? '0' : '0.0',
                getAlign(returnType),
            ),
        );
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
    };
    OutputProgram.prototype.addFunctionSignature = function (_a) {
        var nameOfOperation = _a.nameOfOperation,
            returnType = _a.returnType,
            parameters = _a.parameters;
        this.functionSignatures.set(nameOfOperation, {
            name: nameOfOperation,
            returnType: returnType,
            parameters: parameters.map(function (parameter) {
                return parameter.type;
            }),
        });
    };
    OutputProgram.prototype.endFunction = function (returnType) {
        this.addLineOfIR('br label %returnBlock');
        this.addLineOfIR('returnBlock:');
        var regId = this.loadOperation({type: returnType, name: '%returnValue'});
        this.addLineOfIR('ret ' + (returnType === 'i32' ? 'i32' : 'double') + ' %' + regId);
        this.addLineOfIR('}');
        this.areWeInsideFunction = false;
        this.functions.push(this.instructions.join('\n'));
        this.instructions = this.temporaryPlaceForInstructions;
    };
    // TODO: sprawdzac czy typ zwracany zgadza sie z typem zwracanym funkcji
    OutputProgram.prototype.returnValue = function (returnValue) {
        if (returnValue.typeOfValue === 'variable') {
            var variable = this.getVariable(returnValue.value);
            this.addLineOfIR(
                outputLLVMInstructions_1.store('%returnValue', variable.type, '%' + this.loadOperation(variable), getAlign(variable.type)),
            );
        } else {
            this.addLineOfIR(
                outputLLVMInstructions_1.store(
                    '%returnValue',
                    returnValue.typeOfValue,
                    returnValue.value,
                    getAlign(returnValue.typeOfValue),
                ),
            );
        }
        this.addLineOfIR('br label %returnBlock');
        this.getNextRegId();
    };
    // TODO: sprawdzac poprawnosc typow argumentow do funkcji
    OutputProgram.prototype.callFunction = function (operationName, argumentsToFunction) {
        var _this = this;
        var returnTypeOfFunction = this.functionSignatures.get(operationName).returnType;
        var mappedArguments = argumentsToFunction.map(function (arg) {
            if (arg.typeOfValue === 'variable') {
                var variable = _this.getVariable(arg.value);
                var regId = _this.loadOperation(variable);
                return {
                    typeOfValue: variable.type,
                    value: '%' + regId,
                };
            }
            return arg;
        });
        var returnRegId = this.getNextRegId();
        this.addLineOfIR(outputLLVMInstructions_1.call(returnRegId, returnTypeOfFunction, operationName, mappedArguments));
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
        if (this.areWeInsideFunction) {
            this.addLineOfIR(outputLLVMInstructions_1.createVariableDefinition(name, type, valueToVariable, getAlign(type)));
        } else {
            this.addLineOfIR(outputLLVMInstructions_1.store('@' + name, type, valueToVariable, getAlign(type)));
        }
        this.addVariable(name, {type: type, value: value, name: name});
    };
    OutputProgram.prototype.createDynamicVariable = function (name, value) {
        var variable = this.getVariable(name, true);
        var newName = (variable === null || variable === void 0 ? void 0 : variable.name) ? variable.name.slice(1) + 'a' : name;
        if (this.areWeInsideFunction) {
            this.addLineOfIR(outputLLVMInstructions_1.createVariableDefinition(newName, value.type, value.value, getAlign(value.type)));
        } else {
            this.addLineOfIR(outputLLVMInstructions_1.store('@' + newName, value.type, value.value, getAlign(value.type)));
        }
        if (this.areWeInsideFunction) {
            this.functionVariables.set(name, {type: value.type, value: value, name: '%' + newName, dynamic: true});
        } else {
            this.globalVariables.set(name, {type: value.type, value: value, name: '@' + newName, dynamic: true});
        }
    };
    OutputProgram.prototype.createStringVariable = function (name, type, value) {
        var stringConstantId = this.addStringConstant(value);
        var lengthOfText = getLengthOfString(value);
        var definition =
            'getelementptr inbounds ([' +
            (lengthOfText + 1) +
            ' x i8], [' +
            (lengthOfText + 1) +
            ' x i8]* @.str.' +
            stringConstantId +
            ', i64 0, i64 0)';
        if (this.areWeInsideFunction) {
            this.addLineOfIR(outputLLVMInstructions_1.createVariableDefinition(name, 'i8*', definition, 8));
        }
        this.addVariable(name, {
            type: type,
            value: {stringConstantId: stringConstantId, lengthOfText: lengthOfText, definition: 'i8* ' + definition + ', align 8'},
            name: name,
        });
    };
    OutputProgram.prototype.createNumericArray = function (name, type, value) {
        var definition =
            '[' +
            value
                .map(function (valueOfElement) {
                    return 'i32 ' + valueOfElement;
                })
                .join(',') +
            ']';
        if (this.areWeInsideFunction) {
            this.addLineOfIR(outputLLVMInstructions_1.createVariableDefinition(name, type, definition, 4));
        }
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
        var definition =
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
        if (this.areWeInsideFunction) {
            this.addLineOfIR('%' + name + ' = alloca ' + type + ', align ' + 16);
            this.addLineOfIR(outputLLVMInstructions_1.store(name, type, definition, 4));
        }
        this.addVariable(name, {
            type: type,
            value: __assign(__assign({}, createdStrings), {definition: definition}),
            name: name,
            basicType: 'i8*',
        });
    };
    OutputProgram.prototype.assignment = function (variableName, newValue) {
        var variable = this.getVariable(variableName);
        if (variable.dynamic) {
            if (newValue.typeOfValue === 'variable') {
                var variable_1 = this.getVariable(newValue.value);
                this.createDynamicVariable(variableName, {type: variable_1.type, value: '%' + this.loadOperation(variable_1)});
            }
            this.createDynamicVariable(variableName, {type: newValue.typeOfValue, value: newValue.value});
        } else {
            this.addLineOfIR(outputLLVMInstructions_1.store(variable.name, variable.type, newValue.value, getAlign(variable.type)));
        }
    };
    OutputProgram.prototype.assignmentToArrayElement = function (variableName, elementNumber, newValue) {
        var variable = this.getVariable(variableName);
        var regIdOfGetElement = this.getNextRegId();
        this.addLineOfIR(outputLLVMInstructions_1.loadArrayElement(regIdOfGetElement, variable.type, variable.name, elementNumber.value));
        this.addLineOfIR(
            outputLLVMInstructions_1.store('%' + regIdOfGetElement, variable.basicType, newValue.value, getAlign(variable.basicType)),
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
        return this.loadOperation({name: '%' + regIdOfGetElement, type: variable.basicType});
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
            outputLLVMInstructions_1.read(this.getNextRegId(), getInputOutputStringType(variable.type), variable.type, variable.name),
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
