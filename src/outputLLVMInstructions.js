Object.defineProperty(exports, '__esModule', {value: true});
exports.store = exports.createVariableDefinition = exports.loadArrayElement = exports.load = exports.comparison = exports.endOfIfInstruction = exports.ifInstruction = exports.endWhileLoop = exports.openWhile = exports.printString = exports.print = exports.read = exports.call = exports.ret = exports.definitionOfFunction = exports.convertToDouble = exports.convertToi32 = exports.createStringConstant = void 0;
exports.createStringConstant = function (index, lengthOfText, text) {
    return '@.str.' + index + ' = private constant [' + (lengthOfText + 1) + ' x i8] c"' + text + '\00' + '", align 1';
};
exports.convertToi32 = function (returnRegId, elementToConvert) {
    return '%' + returnRegId + ' = fptosi double ' + elementToConvert + ' to i32';
};
exports.convertToDouble = function (returnRegId, elementToConvert) {
    return '%' + returnRegId + ' = sitofp i32 ' + elementToConvert + ' to double';
};
global.fdiv = function (returnRegId, firstElement, secondElement) {
    return '%' + returnRegId + ' = fdiv double ' + firstElement + ', ' + secondElement;
};
global.div = function (returnRegId, firstElement, secondElement) {
    return '%' + returnRegId + ' = sdiv i32 ' + firstElement + ', ' + secondElement;
};
global.fadd = function (returnRegId, firstElement, secondElement) {
    return '%' + returnRegId + ' = fadd double ' + firstElement + ', ' + secondElement;
};
global.add = function (returnRegId, firstElement, secondElement) {
    return '%' + returnRegId + ' = add nsw i32 ' + firstElement + ', ' + secondElement;
};
global.fsub = function (returnRegId, firstElement, secondElement) {
    return '%' + returnRegId + ' = fsub double ' + firstElement + ', ' + secondElement;
};
global.sub = function (returnRegId, firstElement, secondElement) {
    return '%' + returnRegId + ' = sub nsw i32 ' + firstElement + ', ' + secondElement;
};
global.fmul = function (returnRegId, firstElement, secondElement) {
    return '%' + returnRegId + ' = fmul double ' + firstElement + ', ' + secondElement;
};
global.mul = function (returnRegId, firstElement, secondElement) {
    return '%' + returnRegId + ' = mul nsw i32 ' + firstElement + ', ' + secondElement;
};
exports.definitionOfFunction = function (returnType, nameOfFunction, parameters) {
    return (
        '; Function Attrs: noinline nounwind optnone\ndefine ' + returnType + ' @' + nameOfFunction + '(' + parameters.join(', ') + ') #0 {'
    );
};
exports.ret = function (type, value) {
    return 'ret ' + type + ' ' + value;
};
exports.call = function (regId, returnType, functionName, argumentsToFunction) {
    return (
        '%' +
        regId +
        ' = call ' +
        returnType +
        ' @' +
        functionName +
        '(' +
        argumentsToFunction
            .map(function (argument) {
                return argument.typeOfValue + ' ' + argument.value;
            })
            .join(', ') +
        ')'
    );
};
exports.read = function (returnRegId, typeOfFirstArgumentOfScanf, type, nameOfVariable) {
    return (
        '%' +
        returnRegId +
        ' = call i32 (i8*, ...) @scanf(i8* getelementptr inbounds (' +
        typeOfFirstArgumentOfScanf +
        ', i64 0, i64 0), ' +
        type +
        '* %' +
        nameOfVariable +
        ')'
    );
};
exports.print = function (returnRegId, typeOfFirstArgumentOfPrintf, type, valueToPrint) {
    return (
        '%' +
        returnRegId +
        ' = call i32 (i8*, ...) @printf(i8* getelementptr inbounds (' +
        typeOfFirstArgumentOfPrintf +
        ', i64 0, i64 0), ' +
        type +
        ' ' +
        valueToPrint +
        ')'
    );
};
exports.printString = function (returnRegId, lengthOfText, stringConstantId) {
    return (
        '%' +
        returnRegId +
        ' = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([' +
        (lengthOfText + 1) +
        ' x i8], [' +
        (lengthOfText + 1) +
        ' x i8]* @.str.' +
        stringConstantId +
        ', i64 0, i64 0))'
    );
};
exports.openWhile = function (labelOfCondition) {
    return 'br label %' + labelOfCondition + '\n; <label>:' + labelOfCondition + ':';
};
exports.endWhileLoop = function (labelOfCondition, labelAfterWhile) {
    return 'br label %' + labelOfCondition + '\n; <label>:' + labelAfterWhile + ':';
};
exports.ifInstruction = function (comparison, labelOfIf, labelAfterIf) {
    return 'br i1 ' + comparison + ', label %' + labelOfIf + ', label %' + labelAfterIf + '\n; <label>:' + labelOfIf + ':';
};
exports.endOfIfInstruction = function (labelAfterIf) {
    return 'br label %' + labelAfterIf + '\n; <label>:' + labelAfterIf + ':';
};
exports.comparison = function (regId, typeOfComparison, typeOfElements, firstElement, secondElement) {
    return (
        '%' +
        regId +
        ' = ' +
        (typeOfElements === 'i32' ? 'i' : 'f') +
        'cmp ' +
        typeOfComparison +
        ' ' +
        typeOfElements +
        ' ' +
        firstElement +
        ', ' +
        secondElement
    );
};
exports.load = function (regId, type, fromId, align) {
    return '%' + regId + ' = load ' + type + ', ' + type + '* %' + fromId + ', align ' + align;
};
exports.loadArrayElement = function (regId, type, fromId, element) {
    return '%' + regId + ' = getelementptr inbounds ' + type + ', ' + type + '* %' + fromId + ', i64 0, i32 ' + element;
};
exports.createVariableDefinition = function (name, type, value, align) {
    return '%' + name + ' = alloca ' + type + ', align ' + align + '\n' + exports.store(name, type, value, align);
};
exports.store = function (name, type, value, align) {
    return 'store ' + type + ' ' + value + ', ' + type + '* %' + name + ', align ' + align;
};
//# sourceMappingURL=outputLLVMInstructions.js.map
