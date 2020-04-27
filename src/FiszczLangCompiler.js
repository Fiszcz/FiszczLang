const {OutputProgram} = require("./OutputProgram.js");

process.env.NODE_ENV = 'production';

const fs = require('fs');
const antlr4 = require('antlr4/index');
const {FiszczLangVisitor} = require("./FiszczLangVisitor");
const {FiszczLangParser} = require("./FiszczLangParser");
const {FiszczLangLexer} = require("./FiszczLangLexer");

const input = fs.readFileSync(process.argv[2]).toString();

const chars = new antlr4.InputStream(input);
const lexer = new FiszczLangLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new FiszczLangParser(tokens);

parser.buildParseTrees = true;
const tree = parser.program();

const outputProgram = new OutputProgram();
const fiszczLangVisitor = new FiszczLangVisitor(outputProgram);
fiszczLangVisitor.visitProgram(tree);

outputProgram.writeToFile();
