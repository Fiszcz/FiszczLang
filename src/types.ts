export interface Variable {
    type: string;
    basicType?: string;
    value: any;
    name: string;
    dynamic?: boolean;
}

export interface FunctionSignature {
    name: string;
    returnType: string;
    parameters: string[];
}

export enum Comparisons {
    EQUAL,
    LESS_THAN,
    GREATER_THAN,
    LESS_OR_EQUAL,
    GREATER_OR_EQUAL,
}
