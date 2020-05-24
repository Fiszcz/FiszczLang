// Generated from ./src/FiszczLang.g4 by ANTLR 4.8
// jshint ignore: start
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
var types_1 = require("./types");
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
    var resultOfArithmeticOperation = ctx.arithmetic_expression() ? (ctx.arithmetic_expression().getText() ? this.visitArithmetic_expression(ctx.arithmetic_expression()) : { value: "0", type: "i32" }) : { value: "0", type: "i32" };
    this.program.createNumericVariable(ctx.VARIABLE_NAME().getText(), 'i32', resultOfArithmeticOperation);
};
// Visit a parse tree produced by FiszczLangParser#real_definition.
FiszczLangVisitor.prototype.visitReal_definition = function (ctx) {
    var resultOfArithmeticOperation = ctx.arithmetic_expression() ? (ctx.arithmetic_expression().getText() ? this.visitArithmetic_expression(ctx.arithmetic_expression()) : { value: "0.0", type: "double" }) : { value: "0.0", type: "double" };
    this.program.createNumericVariable(ctx.VARIABLE_NAME().getText(), 'double', resultOfArithmeticOperation);
};
// Visit a parse tree produced by FiszczLangParser#string_definition.
FiszczLangVisitor.prototype.visitString_definition = function (ctx) {
    var text = getTextOfString(ctx.string() ? ctx.string().getText() : "");
    this.program.createStringVariable(ctx.VARIABLE_NAME()[0].getText(), 'i8*', text);
};
// Visit a parse tree produced by FiszczLangParser#int_array_definition.
FiszczLangVisitor.prototype.visitInt_array_definition = function (ctx) {
    var variableName = ctx.VARIABLE_NAME().getText();
    var valuesOfArray = ctx.INTEGER_NUMBER().map(function (integerNumberCtx) { return integerNumberCtx.getText(); });
    var sizeOfArray = valuesOfArray.length;
    var type = "[" + sizeOfArray + " x i32]";
    this.program.createNumericArray(variableName, type, valuesOfArray);
};
// Visit a parse tree produced by FiszczLangParser#real_array_definition.
FiszczLangVisitor.prototype.visitReal_array_definition = function (ctx) {
    return this.visitChildren(ctx);
};
// Visit a parse tree produced by FiszczLangParser#string_array_definition.
FiszczLangVisitor.prototype.visitString_array_definition = function (ctx) {
    var variableName = ctx.VARIABLE_NAME().getText();
    var valuesOfArray = ctx.string().map(function (stringCtx) { return getTextOfString(stringCtx.getText()); });
    var sizeOfArray = valuesOfArray.length;
    var type = "[" + sizeOfArray + " x i8*]";
    this.program.createStringArray(variableName, type, valuesOfArray);
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
    for (var _i = 0, _a = ctx.value(); _i < _a.length; _i++) {
        var ctxValue = _a[_i];
        var valueToPrint = this.visitValue(ctxValue);
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
// Visit a parse tree produced by FiszczLangParser#if_instruction.
FiszczLangVisitor.prototype.visitIf_instruction = function (ctx) {
    var leftSideOfOperator = this.visitValue(ctx.value()[0]);
    var rightSideOfOperator = this.visitValue(ctx.value()[1]);
    var comparisonType;
    if (ctx.EQUAL()) {
        comparisonType = types_1.Comparisons.EQUAL;
    }
    else if (ctx.GREATER_THAN()) {
        comparisonType = types_1.Comparisons.GREATER_THAN;
    }
    else if (ctx.LESS_THAN()) {
        comparisonType = types_1.Comparisons.LESS_THAN;
    }
    else if (ctx.LESS_OR_EQUAL()) {
        comparisonType = types_1.Comparisons.LESS_OR_EQUAL;
    }
    else if (ctx.GREATER_OR_EQUAL()) {
        comparisonType = types_1.Comparisons.GREATER_OR_EQUAL;
    }
    var comparisonResult = this.program.makeComparison(leftSideOfOperator, rightSideOfOperator, comparisonType);
    var informationAboutIf = this.program.startIf();
    this.visitChildren(ctx);
    this.program.endIf(__assign({ comparisonResult: comparisonResult }, informationAboutIf));
};
// Visit a parse tree produced by FiszczLangParser#arithmetic_expression.
FiszczLangVisitor.prototype.visitArithmetic_expression = function (ctx) {
    if (ctx.ASTERISK()) {
        var firstArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
        var secondArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[1]);
        return this.program.arithmeticOperation(firstArithmeticExpression, secondArithmeticExpression, 'mul');
    }
    else if (ctx.SLASH()) {
        var firstArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
        var secondArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[1]);
        return this.program.arithmeticOperation(firstArithmeticExpression, secondArithmeticExpression, 'div');
    }
    else if (ctx.PLUS()) {
        var firstArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
        var secondArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[1]);
        return this.program.arithmeticOperation(firstArithmeticExpression, secondArithmeticExpression, 'add');
    }
    else if (ctx.MINUS()) {
        var firstArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
        var secondArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression()[1]);
        return this.program.arithmeticOperation(firstArithmeticExpression, secondArithmeticExpression, 'sub');
    }
    else if (ctx.VARIABLE_NAME()) {
        global.additionalData = getLineAndColumn(ctx.VARIABLE_NAME());
        return this.program.getVariableForArithmeticExpression(ctx.VARIABLE_NAME().getText());
    }
    else if (ctx.INTEGER_NUMBER()) {
        return { type: 'i32', value: ctx.INTEGER_NUMBER().getText() };
    }
    else if (ctx.REAL_NUMBER()) {
        return { type: 'double', value: ctx.REAL_NUMBER().getText() };
    }
    else if (ctx.arithmetic_expression()) {
        return this.visitArithmetic_expression(ctx.arithmetic_expression()[0]);
    }
};
// Visit a parse tree produced by FiszczLangParser#assignment.
FiszczLangVisitor.prototype.visitAssignment = function (ctx) {
    return this.visitChildren(ctx);
};
// Visit a parse tree produced by FiszczLangParser#array_element_assignment.
FiszczLangVisitor.prototype.visitArray_element_assignment = function (ctx) {
    var variableNameCtx = ctx.element_of_array().VARIABLE_NAME();
    global.additionalData = getLineAndColumn(variableNameCtx);
    var elementNumberCtx = ctx.element_of_array().element_number().value();
    var newValueCtx = ctx.value();
    this.program.assignmentToArrayElement(variableNameCtx.getText(), this.visitValue(elementNumberCtx), this.visitValue(newValueCtx));
};
// Visit a parse tree produced by FiszczLangParser#value.
FiszczLangVisitor.prototype.visitValue = function (ctx) {
    if (ctx.element_of_array()) {
        var variableNameCtx = ctx.element_of_array().VARIABLE_NAME();
        global.additionalData = getLineAndColumn(variableNameCtx);
        var elementNumberValueCtx = ctx.element_of_array().element_number().value();
        return { typeOfValue: 'arrayVariable', value: variableNameCtx.getText(), element: this.visitValue(elementNumberValueCtx) };
    }
    else if (ctx.VARIABLE_NAME()) {
        global.additionalData = getLineAndColumn(ctx.VARIABLE_NAME());
        return { typeOfValue: 'variable', value: ctx.VARIABLE_NAME().getText() };
    }
    else if (ctx.arithmetic_expression()) {
        var resultOfArithmeticExpression = this.visitArithmetic_expression(ctx.arithmetic_expression());
        return {
            typeOfValue: resultOfArithmeticExpression.type,
            value: resultOfArithmeticExpression.value
        };
    }
    else if (ctx.string()) {
        var text = getTextOfString(ctx.string().getText());
        return { typeOfValue: 'i8*', value: text };
    }
    else if (ctx.INTEGER_NUMBER()) {
        return { typeOfValue: 'i32', value: ctx.INTEGER_NUMBER().getText() };
    }
    else if (ctx.REAL_NUMBER()) {
        return { type: 'double', value: ctx.REAL_NUMBER().getText() };
    }
};
// Visit a parse tree produced by FiszczLangParser#string.
FiszczLangVisitor.prototype.visitString = function (ctx) {
    return this.visitChildren(ctx);
};
var getLineAndColumn = function (context) {
    return {
        line: context.symbol.line,
        column: context.symbol.column,
    };
};
var getTextOfString = function (inputString) { return inputString.substring(inputString.indexOf('"')).slice(1, -1).replace(/\\n/g, "\\0A"); };
exports.FiszczLangVisitor = FiszczLangVisitor;
