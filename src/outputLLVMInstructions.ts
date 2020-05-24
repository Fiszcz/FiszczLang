export const createStringConstant = (index, lengthOfText, text) => {
    return `@.str.${index} = private constant [${lengthOfText + 1} x i8] c"${text}${'\00'}", align 1`;
};

export const convertToi32 = (returnRegId, elementToConvert) => {
    return `%${returnRegId} = fptosi double ${elementToConvert} to i32`;
};

export const convertToDouble = (returnRegId, elementToConvert) => {
    return `%${returnRegId} = sitofp i32 ${elementToConvert} to double`;
};

global.fdiv = (returnRegId, firstElement, secondElement) => {
    return `%${returnRegId} = fdiv double ${firstElement}, ${secondElement}`;
};

global.div = (returnRegId, firstElement, secondElement) => {
    return `%${returnRegId} = sdiv i32 ${firstElement}, ${secondElement}`;
};

global.fadd = (returnRegId, firstElement, secondElement) => {
    return `%${returnRegId} = fadd double ${firstElement}, ${secondElement}`;
};

global.add = (returnRegId, firstElement, secondElement) => {
    return `%${returnRegId} = add nsw i32 ${firstElement}, ${secondElement}`;
};

global.fsub = (returnRegId, firstElement, secondElement) => {
    return `%${returnRegId} = fsub double ${firstElement}, ${secondElement}`;
};

global.sub = (returnRegId, firstElement, secondElement) => {
    return `%${returnRegId} = sub nsw i32 ${firstElement}, ${secondElement}`;
};

global.fmul = (returnRegId, firstElement, secondElement) => {
    return `%${returnRegId} = fmul double ${firstElement}, ${secondElement}`;
};

global.mul = (returnRegId, firstElement, secondElement) => {
    return `%${returnRegId} = mul nsw i32 ${firstElement}, ${secondElement}`;
};

export const read = (returnRegId, typeOfFirstArgumentOfScanf, type, nameOfVariable) => {
    return `%${returnRegId} = call i32 (i8*, ...) @scanf(i8* getelementptr inbounds (${typeOfFirstArgumentOfScanf}, i64 0, i64 0), ${type}* %${nameOfVariable})`;
};

export const print = (returnRegId, typeOfFirstArgumentOfPrintf, type, valueToPrint) => {
    return `%${returnRegId} = call i32 (i8*, ...) @printf(i8* getelementptr inbounds (${typeOfFirstArgumentOfPrintf}, i64 0, i64 0), ${type} ${valueToPrint})`;
};

export const printString = (returnRegId, lengthOfText, stringConstantId) => {
    return `%${returnRegId} = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([${lengthOfText + 1} x i8], [${
        lengthOfText + 1
    } x i8]* @.str.${stringConstantId}, i64 0, i64 0))`;
};

export const openWhile = (labelOfCondition) => {
    return `br label %${labelOfCondition}\n; <label>:${labelOfCondition}:`;
};

export const endWhileLoop = (labelOfCondition, labelAfterWhile) => {
    return `br label %${labelOfCondition}\n; <label>:${labelAfterWhile}:`;
};

export const ifInstruction = (comparison, labelOfIf, labelAfterIf) => {
    return `br i1 ${comparison}, label %${labelOfIf}, label %${labelAfterIf}\n; <label>:${labelOfIf}:`;
};

export const endOfIfInstruction = (labelAfterIf) => {
    return `br label %${labelAfterIf}\n; <label>:${labelAfterIf}:`;
};

export const comparison = (regId, typeOfComparison, typeOfElements, firstElement, secondElement) => {
    return `%${regId} = ${typeOfElements === 'i32' ? 'i' : 'f'}cmp ${typeOfComparison} ${typeOfElements} ${firstElement}, ${secondElement}`;
};

export const load = (regId, type, fromId, align) => {
    return `%${regId} = load ${type}, ${type}* %${fromId}, align ${align}`;
};

export const loadArrayElement = (regId, type, fromId, element) => {
    return `%${regId} = getelementptr inbounds ${type}, ${type}* %${fromId}, i64 0, i32 ${element}`;
};

export const createVariableDefinition = (name, type, value, align) => {
    return `%${name} = alloca ${type}, align ${align}\n` + store(name, type, value, align);
};

export const store = (name, type, value, align) => {
    return `store ${type} ${value}, ${type}* %${name}, align ${align}`;
};
