declare module NodeJS {
    interface Global {
        mul: (returnRegId: any, firstElement: any, secondElement: any) => string;
        fmul: (returnRegId: any, firstElement: any, secondElement: any) => string;
        sub: (returnRegId: any, firstElement: any, secondElement: any) => string;
        fsub: (returnRegId: any, firstElement: any, secondElement: any) => string;
        add: (returnRegId: any, firstElement: any, secondElement: any) => string;
        fadd: (returnRegId: any, firstElement: any, secondElement: any) => string;
        div: (returnRegId: any, firstElement: any, secondElement: any) => string;
        fdiv: (returnRegId: any, firstElement: any, secondElement: any) => string;
        additionalData: {
            line: number;
            column: number;
        }
    }
}
