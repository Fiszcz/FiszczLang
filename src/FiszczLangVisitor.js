// Generated from ./src/FiszczLang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FiszczLangParser.

function FiszczLangVisitor(outputProgram) {
    this.program = outputProgram;
    antlr4.tree.ParseTreeVisitor.call(this);
    return this;
}

FiszczLangVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FiszczLangVisitor.prototype.constructor = FiszczLangVisitor;

// Visit a parse tree produced by FiszczLangParser#program.
FiszczLangVisitor.prototype.visitProgram = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#instruction.
FiszczLangVisitor.prototype.visitInstruction = function (ctx) {
    this.program.addCommentAboutCurrentInstruction(ctx.getText().split('\n')[0]);
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#definition.
FiszczLangVisitor.prototype.visitDefinition = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#single_element_definition.
FiszczLangVisitor.prototype.visitSingle_element_definition = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#array_definition.
FiszczLangVisitor.prototype.visitArray_definition = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#int_definition.
FiszczLangVisitor.prototype.visitInt_definition = function (ctx) {
    const resultOfArithmeticOperation = ctx.arithmetic_expression() ? (ctx.arithmetic_expression().getText() ? this.visitArithmetic_expression(ctx.arithmetic_expression()) : {value: "0", type: "i32"}) : {value: "0", type: "i32"};
    this.program.createVariable(ctx.VARIABLE_NAME().getText(), 'i32', resultOfArithmeticOperation);
};


// Visit a parse tree produced by FiszczLangParser#real_definition.
FiszczLangVisitor.prototype.visitReal_definition = function (ctx) {
    const resultOfArithmeticOperation = ctx.arithmetic_expression() ? (ctx.arithmetic_expression().getText() ? this.visitArithmetic_expression(ctx.arithmetic_expression()) : {value: "0.0", type: "double"}) : {value: "0.0", type: "double"};
    this.program.createVariable(ctx.VARIABLE_NAME().getText(), 'double', resultOfArithmeticOperation);
};


// Visit a parse tree produced by FiszczLangParser#string_definition.
FiszczLangVisitor.prototype.visitString_definition = function (ctx) {
    const text = getTextOfString(ctx.string() ? ctx.string().getText() : "");
    this.program.createVariable(ctx.VARIABLE_NAME()[0].getText(), 'i8*', text);
};


// Visit a parse tree produced by FiszczLangParser#int_array_definition.
FiszczLangVisitor.prototype.visitInt_array_definition = function (ctx) {
    const variableName = ctx.VARIABLE_NAME().getText();
    const valuesOfArray = ctx.INTEGER_NUMBER().map((integerNumberCtx) => integerNumberCtx.getText());
    const sizeOfArray = valuesOfArray.length;
    const type = `[${sizeOfArray} x i32]`;

    this.program.createVariable(variableName, type, valuesOfArray);
};


// Visit a parse tree produced by FiszczLangParser#real_array_definition.
FiszczLangVisitor.prototype.visitReal_array_definition = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#string_array_definition.
FiszczLangVisitor.prototype.visitString_array_definition = function (ctx) {
    const variableName = ctx.VARIABLE_NAME().getText();
    const valuesOfArray = ctx.string().map((stringCtx) => getTextOfString(stringCtx.getText()));
    const sizeOfArray = valuesOfArray.length;
    const type = `[${sizeOfArray} x i8*]`;

    this.program.createVariable(variableName, type, valuesOfArray);
};


// Visit a parse tree produced by FiszczLangParser#element_number.
FiszczLangVisitor.prototype.visitElement_number = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#element_of_array.
FiszczLangVisitor.prototype.visitElement_of_array = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#print_instruction.
FiszczLangVisitor.prototype.visitPrint_instruction = function (ctx) {
    for (let ctxValue of ctx.value()) {
        const valueToPrint = this.visitValue(ctxValue);
        this.program.printValue(valueToPrint);
    }
};


// Visit a parse tree produced by FiszczLangParser#read_instruction.
FiszczLangVisitor.prototype.visitRead_instruction = function (ctx) {
    if (ctx.VARIABLE_NAME()) {
        global.additionalData = getLineAndColumn(ctx.VARIABLE_NAME());
        this.program.readValue(ctx.VARIABLE_NAME().getText());
    }
};


// Visit a parse tree produced by FiszczLangParser#arithmetic_expression.
FiszczLangVisitor.prototype.visitArithmetic_expression = function (ctx) {
    if (ctx.ASTERISK()) {
        const firstArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
        const secondArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[1]);
        return this.program.arithmeticOperation(firstArithmeticExpression, secondArithmeticExpression, 'mul');
    } else if (ctx.SLASH()) {
        const firstArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
        const secondArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[1]);
        return this.program.arithmeticOperation(firstArithmeticExpression, secondArithmeticExpression, 'div');
    } else if (ctx.PLUS()) {
        const firstArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
        const secondArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[1]);
        return this.program.arithmeticOperation(firstArithmeticExpression, secondArithmeticExpression, 'add');
    } else if (ctx.MINUS()) {
        const firstArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
        const secondArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[1]);
        return this.program.arithmeticOperation(firstArithmeticExpression, secondArithmeticExpression, 'sub');
    } else if (ctx.VARIABLE_NAME()) {
        global.additionalData = getLineAndColumn(ctx.VARIABLE_NAME());
        return this.program.getVariableForArithmeticExpression(ctx.VARIABLE_NAME().getText());
    } else if (ctx.INTEGER_NUMBER()) {
        return {type: 'i32', value: ctx.INTEGER_NUMBER().getText()};
    } else if (ctx.REAL_NUMBER()) {
        return {type: 'double', value: ctx.REAL_NUMBER().getText()};
    } else if (ctx.arithmetic_expression()) {
        return this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
    }
}


// Visit a parse tree produced by FiszczLangParser#assignment.
FiszczLangVisitor.prototype.visitAssignment = function (ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by FiszczLangParser#array_element_assignment.
FiszczLangVisitor.prototype.visitArray_element_assignment = function (ctx) {
    const variableNameCtx = ctx.element_of_array().VARIABLE_NAME();
    global.additionalData = getLineAndColumn(variableNameCtx);
    const elementNumberCtx = ctx.element_of_array().element_number().value();
    const newValueCtx = ctx.value();
    this.program.assignmentToArrayElement(variableNameCtx.getText(), this.visitValue(elementNumberCtx), this.visitValue(newValueCtx));
};


// Visit a parse tree produced by FiszczLangParser#value.
FiszczLangVisitor.prototype.visitValue = function (ctx) {
    if (ctx.element_of_array()) {
        const variableNameCtx = ctx.element_of_array().VARIABLE_NAME();
        global.additionalData = getLineAndColumn(variableNameCtx);
        const elementNumberValueCtx = ctx.element_of_array().element_number().value();
        return {typeOfValue: 'arrayVariable', value: variableNameCtx.getText(), element: this.visitValue(elementNumberValueCtx)};
    } else if (ctx.VARIABLE_NAME()) {
        global.additionalData = getLineAndColumn(ctx.VARIABLE_NAME());
        return {typeOfValue: 'variable', value: ctx.VARIABLE_NAME().getText()};
    } else if (ctx.arithmetic_expression()) {
        const resultOfArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression());
        return {
            typeOfValue: resultOfArithmeticExpression.type,
            value: resultOfArithmeticExpression.value
        };
    } else if (ctx.string()) {
        const text = getTextOfString(ctx.string().getText());
        return {typeOfValue: 'i8*', value: text};
    } else if (ctx.INTEGER_NUMBER()) {
        return {typeOfValue: 'i32', value: ctx.INTEGER_NUMBER().getText()};
    }
};


// Visit a parse tree produced by FiszczLangParser#string.
FiszczLangVisitor.prototype.visitString = function (ctx) {
    return this.visitChildren(ctx);
};

const getLineAndColumn = (context) => {
    return {
        line: context.symbol.line,
        column: context.symbol.column,
    }
};

const getTextOfString = (inputString) => inputString.substring(inputString.indexOf('"')).slice(1, -1).replace(/\\n/g, "\\0A");


exports.FiszczLangVisitor = FiszczLangVisitor;
