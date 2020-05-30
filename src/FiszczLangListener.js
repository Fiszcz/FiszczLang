// Generated from ./src/FiszczLang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FiszczLangParser.
function FiszczLangListener() {
    antlr4.tree.ParseTreeListener.call(this);
    return this;
}

FiszczLangListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FiszczLangListener.prototype.constructor = FiszczLangListener;

// Enter a parse tree produced by FiszczLangParser#program.
FiszczLangListener.prototype.enterProgram = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#program.
FiszczLangListener.prototype.exitProgram = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#instruction.
FiszczLangListener.prototype.enterInstruction = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#instruction.
FiszczLangListener.prototype.exitInstruction = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#parameter.
FiszczLangListener.prototype.enterParameter = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#parameter.
FiszczLangListener.prototype.exitParameter = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#definition.
FiszczLangListener.prototype.enterDefinition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#definition.
FiszczLangListener.prototype.exitDefinition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#single_element_definition.
FiszczLangListener.prototype.enterSingle_element_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#single_element_definition.
FiszczLangListener.prototype.exitSingle_element_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#array_definition.
FiszczLangListener.prototype.enterArray_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#array_definition.
FiszczLangListener.prototype.exitArray_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#int_definition.
FiszczLangListener.prototype.enterInt_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#int_definition.
FiszczLangListener.prototype.exitInt_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#real_definition.
FiszczLangListener.prototype.enterReal_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#real_definition.
FiszczLangListener.prototype.exitReal_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#string_definition.
FiszczLangListener.prototype.enterString_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#string_definition.
FiszczLangListener.prototype.exitString_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#dynamic_definition.
FiszczLangListener.prototype.enterDynamic_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#dynamic_definition.
FiszczLangListener.prototype.exitDynamic_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#int_array_definition.
FiszczLangListener.prototype.enterInt_array_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#int_array_definition.
FiszczLangListener.prototype.exitInt_array_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#real_array_definition.
FiszczLangListener.prototype.enterReal_array_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#real_array_definition.
FiszczLangListener.prototype.exitReal_array_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#string_array_definition.
FiszczLangListener.prototype.enterString_array_definition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#string_array_definition.
FiszczLangListener.prototype.exitString_array_definition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#new_operation.
FiszczLangListener.prototype.enterNew_operation = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#new_operation.
FiszczLangListener.prototype.exitNew_operation = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#element_number.
FiszczLangListener.prototype.enterElement_number = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#element_number.
FiszczLangListener.prototype.exitElement_number = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#element_of_array.
FiszczLangListener.prototype.enterElement_of_array = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#element_of_array.
FiszczLangListener.prototype.exitElement_of_array = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#print_instruction.
FiszczLangListener.prototype.enterPrint_instruction = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#print_instruction.
FiszczLangListener.prototype.exitPrint_instruction = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#read_instruction.
FiszczLangListener.prototype.enterRead_instruction = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#read_instruction.
FiszczLangListener.prototype.exitRead_instruction = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#while_instruction.
FiszczLangListener.prototype.enterWhile_instruction = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#while_instruction.
FiszczLangListener.prototype.exitWhile_instruction = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#if_instruction.
FiszczLangListener.prototype.enterIf_instruction = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#if_instruction.
FiszczLangListener.prototype.exitIf_instruction = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#return_instruction.
FiszczLangListener.prototype.enterReturn_instruction = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#return_instruction.
FiszczLangListener.prototype.exitReturn_instruction = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#condition.
FiszczLangListener.prototype.enterCondition = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#condition.
FiszczLangListener.prototype.exitCondition = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#call_operation.
FiszczLangListener.prototype.enterCall_operation = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#call_operation.
FiszczLangListener.prototype.exitCall_operation = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#arithmetic_expression.
FiszczLangListener.prototype.enterArithmetic_expression = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#arithmetic_expression.
FiszczLangListener.prototype.exitArithmetic_expression = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#assignment.
FiszczLangListener.prototype.enterAssignment = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#assignment.
FiszczLangListener.prototype.exitAssignment = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#array_element_assignment.
FiszczLangListener.prototype.enterArray_element_assignment = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#array_element_assignment.
FiszczLangListener.prototype.exitArray_element_assignment = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#value.
FiszczLangListener.prototype.enterValue = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#value.
FiszczLangListener.prototype.exitValue = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#type.
FiszczLangListener.prototype.enterType = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#type.
FiszczLangListener.prototype.exitType = function (ctx) {};

// Enter a parse tree produced by FiszczLangParser#string.
FiszczLangListener.prototype.enterString = function (ctx) {};

// Exit a parse tree produced by FiszczLangParser#string.
FiszczLangListener.prototype.exitString = function (ctx) {};

exports.FiszczLangListener = FiszczLangListener;
