var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputProgram = void 0;
var types_1 = require("./types");
var fs = require('fs');
var headerOfFile = "\ndeclare i32 @scanf(i8*, ...)\ndeclare i32 @printf(i8*, ...)\n\n@.strdouble = private unnamed_addr constant [4 x i8] c\"%lf\\00\", align 1\n@.strint = private unnamed_addr constant [3 x i8] c\"%d\\00\", align 1\n@.str.0 = private unnamed_addr constant [3 x i8] c\"%s\\00\", align 1\n\n";
var mainFunction = "\ndefine i32 @main() nounwind {\n\n\n";
var endOfFile = "\nret i32 0\n}";
process.env.NODE_ENV = 'production';
var OutputProgram = /** @class */ (function () {
    function OutputProgram() {
        this.instructions = [];
        this.variables = new Map();
        this.iteratorOfUnnamedVariables = 0;
        this.stringConstants = [];
        this.iteratorOfStrings = 0;
    }
    OutputProgram.prototype.addCommentAboutCurrentInstruction = function (instruction) {
        this.instructions.push('\n\t; ' + instruction);
    };
    OutputProgram.prototype.writeToFile = function () {
        var outputProgram = headerOfFile;
        this.stringConstants.forEach(function (stringConstant, index) { return outputProgram += createStringConstant(index + 1, getLengthOfString(stringConstant), stringConstant) + '\n'; });
        outputProgram += mainFunction;
        this.instructions.forEach(function (instruction) { return outputProgram += instruction + '\n'; });
        outputProgram += endOfFile;
        fs.writeFileSync('output.ll', outputProgram);
    };
    OutputProgram.prototype.getVariable = function (variableName) {
        var variable = this.variables.get(variableName);
        if (variable) {
            return variable;
        }
        else {
            process.stderr.write("You are trying to use a variable that does not exist " + ":Line - " + global.additionalData.line + " :Column - " + global.additionalData.column + '\n');
            process.exit(1);
        }
    };
    OutputProgram.prototype.getNextRegId = function () {
        return ++this.iteratorOfUnnamedVariables;
    };
    OutputProgram.prototype.addLineOfIR = function (line) {
        this.instructions.push(line);
    };
    OutputProgram.prototype.addStringConstant = function (text) {
        ++this.iteratorOfStrings;
        this.stringConstants.push(text);
        return this.iteratorOfStrings;
    };
    OutputProgram.prototype.createNumericVariable = function (name, type, value) {
        var valueToVariable = value.value;
        if (type === 'i32' && (value === null || value === void 0 ? void 0 : value.type) === 'double') {
            valueToVariable = this.getNextRegId();
            convertToi32(valueToVariable, value.value);
        }
        else if (type === 'double' && value.type === 'i32') {
            valueToVariable = this.getNextRegId();
            convertToDouble(valueToVariable, value.value);
        }
        this.addLineOfIR(createVariableDefinition(name, type, valueToVariable, getAlign(type)));
        this.variables.set(name, { type: type, value: value, name: name });
    };
    OutputProgram.prototype.createStringVariable = function (name, type, value) {
        var stringConstantId = this.addStringConstant(value);
        var lengthOfText = getLengthOfString(value);
        this.addLineOfIR(createVariableDefinition(name, 'i8*', "getelementptr inbounds ([" + (lengthOfText + 1) + " x i8], [" + (lengthOfText + 1) + " x i8]* @.str." + stringConstantId + ", i64 0, i64 0)", 8));
        this.variables.set(name, { type: type, value: { stringConstantId: stringConstantId, lengthOfText: lengthOfText }, name: name });
    };
    OutputProgram.prototype.createNumericArray = function (name, type, value) {
        this.addLineOfIR(createVariableDefinition(name, type, "[" + value.map(function (valueOfElement) { return 'i32 ' + valueOfElement; }).join(',') + "]", 4));
        this.variables.set(name, { type: type, value: value, name: name, basicType: 'i32' });
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
        var valueToStoreInstruction = "[" + createdStrings.map(function (createdString) { return "i8* getelementptr inbounds ([" + (createdString.lengthOfText + 1) + " x i8], [" + (createdString.lengthOfText + 1) + " x i8]* @.str." + createdString.stringConstantId + ", i64 0, i64 0)"; }).join(',') + "]";
        this.addLineOfIR("%" + name + " = alloca " + type + ", align " + 16);
        this.addLineOfIR(store(name, type, valueToStoreInstruction, 4));
        this.variables.set(name, { type: type, value: createdStrings, name: name, basicType: 'i8*' });
    };
    OutputProgram.prototype.assignmentToArrayElement = function (variableName, elementNumber, newValue) {
        var variable = this.getVariable(variableName);
        var regIdOfGetElement = this.getNextRegId();
        this.addLineOfIR(loadArrayElement(regIdOfGetElement, variable.type, variable.name, elementNumber.value));
        this.addLineOfIR(store(regIdOfGetElement, variable.basicType, newValue.value, getAlign(variable.basicType)));
    };
    OutputProgram.prototype.loadOperation = function (variable) {
        var regId = this.getNextRegId();
        this.addLineOfIR(load(regId, variable.type, variable.name, getAlign(variable.type)));
        return regId;
    };
    OutputProgram.prototype.loadArrayElementOperation = function (variable, element) {
        var regIdOfGetElement = this.getNextRegId();
        this.addLineOfIR(loadArrayElement(regIdOfGetElement, variable.type, variable.name, element));
        return this.loadOperation({ name: regIdOfGetElement, type: variable.basicType });
    };
    OutputProgram.prototype.printValue = function (valueToPrint) {
        switch (valueToPrint.typeOfValue) {
            case 'variable': {
                var variableName = valueToPrint.value;
                var variable = this.getVariable(variableName);
                if (variable.type === 'i8*') {
                    var regIdWithValueToPrint = this.loadOperation(variable);
                    this.addLineOfIR(print(this.getNextRegId(), getInputOutputStringType(variable.type, variable.value), variable.type, '%' + regIdWithValueToPrint));
                }
                else {
                    var regIdWithValueToPrint = this.loadOperation(variable);
                    this.addLineOfIR(print(this.getNextRegId(), getInputOutputStringType(variable.type), variable.type, '%' + regIdWithValueToPrint));
                }
                break;
            }
            case 'i32': {
                this.addLineOfIR(print(this.getNextRegId(), getInputOutputStringType(valueToPrint.typeOfValue), valueToPrint.typeOfValue, valueToPrint.value));
                break;
            }
            case 'double': {
                this.addLineOfIR(print(this.getNextRegId(), getInputOutputStringType(valueToPrint.typeOfValue), valueToPrint.typeOfValue, valueToPrint.value));
                break;
            }
            case 'i8*': {
                var stringConstantId = this.addStringConstant(valueToPrint.value);
                this.addLineOfIR(printString(this.getNextRegId(), getLengthOfString(valueToPrint.value), stringConstantId));
                break;
            }
            case 'arrayVariable': {
                var variable = this.getVariable(valueToPrint.value);
                var elementRegId = this.loadArrayElementOperation(variable, valueToPrint.element.value);
                this.addLineOfIR(print(this.getNextRegId(), getInputOutputStringType(variable.basicType), variable.basicType, '%' + elementRegId));
                break;
            }
        }
    };
    OutputProgram.prototype.readValue = function (variableName) {
        var variable = this.getVariable(variableName);
        this.addLineOfIR(read(this.getNextRegId(), getInputOutputStringType(variable.type), variable.type, variableName));
    };
    OutputProgram.prototype.startIf = function () {
        var labelOfIf = this.getNextRegId();
        var lineOfIRToEditAfterEndOfIf = this.instructions.length;
        this.addLineOfIR("WAITING FOR IF");
        return { lineOfIRToEditAfterEndOfIf: lineOfIRToEditAfterEndOfIf, labelOfIf: labelOfIf };
    };
    OutputProgram.prototype.endIf = function (_a) {
        var comparisonResult = _a.comparisonResult, lineOfIRToEditAfterEndOfIf = _a.lineOfIRToEditAfterEndOfIf, labelOfIf = _a.labelOfIf;
        var labelAfterIf = this.getNextRegId();
        this.instructions[lineOfIRToEditAfterEndOfIf] = ifInstruction(comparisonResult, labelOfIf, labelAfterIf);
        this.addLineOfIR(endOfIfInstruction(labelAfterIf));
    };
    OutputProgram.prototype.makeComparison = function (firstElement, secondElement, typeOfComparison) {
        if (firstElement.typeOfValue === 'variable') {
            firstElement = this.getVariableForArithmeticExpression(firstElement.value);
            firstElement = { typeOfValue: firstElement.type, value: firstElement.value };
        }
        if (secondElement.typeOfValue === 'variable') {
            secondElement = this.getVariableForArithmeticExpression(secondElement.value);
            secondElement = { typeOfValue: secondElement.type, value: secondElement.value };
        }
        if (firstElement.typeOfValue === 'arrayVariable') {
            var variableRepresentation = this.getVariable(firstElement.value);
            firstElement = { typeOfValue: variableRepresentation.basicType, value: '%' + this.loadArrayElementOperation(variableRepresentation, firstElement.element.value) };
        }
        if (secondElement.typeOfValue === 'arrayVariable') {
            var variableRepresentation = this.getVariable(secondElement.value);
            secondElement = { typeOfValue: variableRepresentation.basicType, value: '%' + this.loadArrayElementOperation(variableRepresentation, secondElement.element.value) };
        }
        var comparisonRegId = this.getNextRegId();
        if (firstElement.typeOfValue === 'i32' && secondElement.typeOfValue === 'i32') {
            this.addLineOfIR(comparison(comparisonRegId, getTypeOfComparisonForType(typeOfComparison, 'i32'), 'i32', firstElement.value, secondElement.value));
        }
        else if (firstElement.typeOfValue === 'i32' && secondElement.typeOfValue === 'double') {
            var convertedToDouble = this.getNextRegId();
            this.addLineOfIR(convertToDouble(convertedToDouble, firstElement.value));
            this.addLineOfIR(comparison(comparisonRegId, getTypeOfComparisonForType(typeOfComparison, 'double'), 'double', convertedToDouble, secondElement.value));
        }
        else if (firstElement.typeOfValue === 'double' && secondElement.typeOfValue === 'i32') {
            var convertedToDouble = this.getNextRegId();
            this.addLineOfIR(convertToDouble(convertedToDouble, secondElement.value));
            this.addLineOfIR(comparison(comparisonRegId, getTypeOfComparisonForType(typeOfComparison, 'double'), 'double', firstElement.value, convertedToDouble));
        }
        else {
            this.addLineOfIR(comparison(comparisonRegId, getTypeOfComparisonForType(typeOfComparison, 'double'), 'double', firstElement.value, secondElement.value));
        }
        return '%' + comparisonRegId;
    };
    OutputProgram.prototype.getVariableForArithmeticExpression = function (variableName) {
        var variable = this.getVariable(variableName);
        return __assign(__assign({}, variable), { value: '%' + this.loadOperation(variable) });
    };
    OutputProgram.prototype.arithmeticOperation = function (firstElement, secondElement, operation) {
        if (firstElement.type === 'i32' && secondElement.type === 'i32') {
            var returnRegId = this.getNextRegId();
            this.addLineOfIR(global[operation](returnRegId, firstElement.value, secondElement.value));
            return { type: 'i32', value: '%' + returnRegId };
        }
        else if (firstElement.type === 'i32' && secondElement.type === 'double') {
            var convertedToDouble = this.getNextRegId();
            this.addLineOfIR(convertToDouble(convertedToDouble, firstElement.value));
            var returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, '%' + convertedToDouble, secondElement.value));
            return { type: 'double', value: '%' + returnRegId };
        }
        else if (firstElement.type === 'double' && secondElement.type === 'i32') {
            var convertedToDouble = this.getNextRegId();
            this.addLineOfIR(convertToDouble(convertedToDouble, secondElement.value));
            var returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, firstElement.value, '%' + convertedToDouble));
            return { type: 'double', value: '%' + returnRegId };
        }
        else {
            var returnRegId = this.getNextRegId();
            this.addLineOfIR(global['f' + operation](returnRegId, firstElement.value, secondElement.value));
            return { type: 'double', value: '%' + returnRegId };
        }
    };
    return OutputProgram;
}());
exports.OutputProgram = OutputProgram;
var getLengthOfString = function (text) {
    return text.length - 2 * (text.match(/\\0/g) || []).length;
};
var getInputOutputStringType = function (type, options) {
    if (options === void 0) { options = { lengthOfText: 2, stringConstantId: 0 }; }
    switch (type) {
        case 'i32':
            return '[3 x i8], [3 x i8]* @.strint';
        case 'double':
            return '[4 x i8], [4 x i8]* @.strdouble';
        case 'i8*':
            return "[" + (options.lengthOfText + 1) + " x i8], [" + (options.lengthOfText + 1) + " x i8]* @.str." + options.stringConstantId;
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
            }
            else {
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
var createStringConstant = function (index, lengthOfText, text) {
    return "@.str." + index + " = private constant [" + (lengthOfText + 1) + " x i8] c\"" + text + '\00' + "\", align 1";
};
var convertToi32 = function (returnRegId, elementToConvert) {
    return "%" + returnRegId + " = fptosi double " + elementToConvert + " to i32";
};
var convertToDouble = function (returnRegId, elementToConvert) {
    return "%" + returnRegId + " = sitofp i32 " + elementToConvert + " to double";
};
global.fdiv = function (returnRegId, firstElement, secondElement) {
    return "%" + returnRegId + " = fdiv double " + firstElement + ", " + secondElement;
};
global.div = function (returnRegId, firstElement, secondElement) {
    return "%" + returnRegId + " = sdiv i32 " + firstElement + ", " + secondElement;
};
global.fadd = function (returnRegId, firstElement, secondElement) {
    return "%" + returnRegId + " = fadd double " + firstElement + ", " + secondElement;
};
global.add = function (returnRegId, firstElement, secondElement) {
    return "%" + returnRegId + " = add nsw i32 " + firstElement + ", " + secondElement;
};
global.fsub = function (returnRegId, firstElement, secondElement) {
    return "%" + returnRegId + " = fsub double " + firstElement + ", " + secondElement;
};
global.sub = function (returnRegId, firstElement, secondElement) {
    return "%" + returnRegId + " = sub nsw i32 " + firstElement + ", " + secondElement;
};
global.fmul = function (returnRegId, firstElement, secondElement) {
    return "%" + returnRegId + " = fmul double " + firstElement + ", " + secondElement;
};
global.mul = function (returnRegId, firstElement, secondElement) {
    return "%" + returnRegId + " = mul nsw i32 " + firstElement + ", " + secondElement;
};
var read = function (returnRegId, typeOfFirstArgumentOfScanf, type, nameOfVariable) {
    return "%" + returnRegId + " = call i32 (i8*, ...) @scanf(i8* getelementptr inbounds (" + typeOfFirstArgumentOfScanf + ", i64 0, i64 0), " + type + "* %" + nameOfVariable + ")";
};
var print = function (returnRegId, typeOfFirstArgumentOfPrintf, type, valueToPrint) {
    return "%" + returnRegId + " = call i32 (i8*, ...) @printf(i8* getelementptr inbounds (" + typeOfFirstArgumentOfPrintf + ", i64 0, i64 0), " + type + " " + valueToPrint + ")";
};
var printString = function (returnRegId, lengthOfText, stringConstantId) {
    return "%" + returnRegId + " = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([" + (lengthOfText + 1) + " x i8], [" + (lengthOfText + 1) + " x i8]* @.str." + stringConstantId + ", i64 0, i64 0))";
};
var ifInstruction = function (comparison, labelOfIf, labelAfterIf) {
    return "br i1 " + comparison + ", label %" + labelOfIf + ", label %" + labelAfterIf + "\n; <label>:" + labelOfIf + ":";
};
var endOfIfInstruction = function (labelAfterIf) {
    return "br label %" + labelAfterIf + "\n; <label>:" + labelAfterIf + ":";
};
var comparison = function (regId, typeOfComparison, typeOfElements, firstElement, secondElement) {
    return "%" + regId + " = " + (typeOfElements === 'i32' ? 'i' : 'f') + "cmp " + typeOfComparison + " " + typeOfElements + " " + firstElement + ", " + secondElement;
};
var load = function (regId, type, fromId, align) {
    return "%" + regId + " = load " + type + ", " + type + "* %" + fromId + ", align " + align;
};
var loadArrayElement = function (regId, type, fromId, element) {
    return "%" + regId + " = getelementptr inbounds " + type + ", " + type + "* %" + fromId + ", i64 0, i32 " + element;
};
var createVariableDefinition = function (name, type, value, align) {
    return "%" + name + " = alloca " + type + ", align " + align + "\n" + store(name, type, value, align);
};
var store = function (name, type, value, align) {
    return "store " + type + " " + value + ", " + type + "* %" + name + ", align " + align;
};
exports.OutputProgram = OutputProgram;
