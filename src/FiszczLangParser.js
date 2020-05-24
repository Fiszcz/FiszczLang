// Generated from ./src/FiszczLang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FiszczLangListener = require('./FiszczLangListener').FiszczLangListener;
var FiszczLangVisitor = require('./FiszczLangVisitor').FiszczLangVisitor;

var grammarFileName = "FiszczLang.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\'\u0119\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0006\u00023\n\u0002\r\u0002",
    "\u000e\u00024\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003A\n\u0003\u0003\u0003\u0005\u0003D\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004J\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005O\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006T\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007[\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\bb\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\tk\n\t\u0005\tm\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0007\nu\n\n\f\n\u000e\nx\u000b\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b",
    "\u0082\n\u000b\f\u000b\u000e\u000b\u0085\u000b\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u008f",
    "\n\f\f\f\u000e\f\u0092\u000b\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u00a1\n\u000f\f\u000f\u000e\u000f",
    "\u00a4\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00aa\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u00b0\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0006",
    "\u0011\u00b5\n\u0011\r\u0011\u000e\u0011\u00b6\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00bf\n",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0006\u0012\u00c4\n\u0012",
    "\r\u0012\u000e\u0012\u00c5\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u00cc\n\u0013\u0003\u0013\u0003\u0013\u0005\u0013",
    "\u00d0\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u00dd\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u00e1\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00e5\n\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00ea\n\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00ee\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u00f3\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014",
    "\u00f7\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00fc",
    "\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0100\n\u0014\u0003\u0014",
    "\u0007\u0014\u0103\n\u0014\f\u0014\u000e\u0014\u0106\u000b\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0005\u0017\u0115\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0002\u0003&\u0019\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.\u0002\b\u0003\u0002\u001a\u001b",
    "\u0003\u0002\r\u000e\u0003\u0002\u000f\u0010\u0003\u0002\u0011\u0012",
    "\u0003\u0002\u0015\u0016\u0003\u0002 $\u0002\u0138\u00022\u0003\u0002",
    "\u0002\u0002\u0004@\u0003\u0002\u0002\u0002\u0006I\u0003\u0002\u0002",
    "\u0002\bN\u0003\u0002\u0002\u0002\nS\u0003\u0002\u0002\u0002\fU\u0003",
    "\u0002\u0002\u0002\u000e\\\u0003\u0002\u0002\u0002\u0010c\u0003\u0002",
    "\u0002\u0002\u0012n\u0003\u0002\u0002\u0002\u0014{\u0003\u0002\u0002",
    "\u0002\u0016\u0088\u0003\u0002\u0002\u0002\u0018\u0095\u0003\u0002\u0002",
    "\u0002\u001a\u0099\u0003\u0002\u0002\u0002\u001c\u009c\u0003\u0002\u0002",
    "\u0002\u001e\u00a5\u0003\u0002\u0002\u0002 \u00ab\u0003\u0002\u0002",
    "\u0002\"\u00ba\u0003\u0002\u0002\u0002$\u00c9\u0003\u0002\u0002\u0002",
    "&\u00dc\u0003\u0002\u0002\u0002(\u0107\u0003\u0002\u0002\u0002*\u010b",
    "\u0003\u0002\u0002\u0002,\u0114\u0003\u0002\u0002\u0002.\u0116\u0003",
    "\u0002\u0002\u000203\u0005\u0004\u0003\u000213\u0007\'\u0002\u00022",
    "0\u0003\u0002\u0002\u000221\u0003\u0002\u0002\u000234\u0003\u0002\u0002",
    "\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u000256\u0003\u0002",
    "\u0002\u000267\u0007\u0002\u0002\u00037\u0003\u0003\u0002\u0002\u0002",
    "8A\u0005\u0006\u0004\u00029A\u0005\u001c\u000f\u0002:A\u0005\u001c\u000f",
    "\u0002;A\u0005\u001e\u0010\u0002<A\u0005\"\u0012\u0002=A\u0005 \u0011",
    "\u0002>A\u0005(\u0015\u0002?A\u0005*\u0016\u0002@8\u0003\u0002\u0002",
    "\u0002@9\u0003\u0002\u0002\u0002@:\u0003\u0002\u0002\u0002@;\u0003\u0002",
    "\u0002\u0002@<\u0003\u0002\u0002\u0002@=\u0003\u0002\u0002\u0002@>\u0003",
    "\u0002\u0002\u0002@?\u0003\u0002\u0002\u0002AC\u0003\u0002\u0002\u0002",
    "BD\u0007\'\u0002\u0002CB\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002",
    "\u0002DE\u0003\u0002\u0002\u0002EF\u0007\u0003\u0002\u0002F\u0005\u0003",
    "\u0002\u0002\u0002GJ\u0005\b\u0005\u0002HJ\u0005\n\u0006\u0002IG\u0003",
    "\u0002\u0002\u0002IH\u0003\u0002\u0002\u0002J\u0007\u0003\u0002\u0002",
    "\u0002KO\u0005\f\u0007\u0002LO\u0005\u000e\b\u0002MO\u0005\u0010\t\u0002",
    "NK\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NM\u0003\u0002\u0002",
    "\u0002O\t\u0003\u0002\u0002\u0002PT\u0005\u0012\n\u0002QT\u0005\u0014",
    "\u000b\u0002RT\u0005\u0016\f\u0002SP\u0003\u0002\u0002\u0002SQ\u0003",
    "\u0002\u0002\u0002SR\u0003\u0002\u0002\u0002T\u000b\u0003\u0002\u0002",
    "\u0002UV\u0007\u0004\u0002\u0002VW\u0007\'\u0002\u0002WZ\u0007%\u0002",
    "\u0002XY\u0007\'\u0002\u0002Y[\u0005&\u0014\u0002ZX\u0003\u0002\u0002",
    "\u0002Z[\u0003\u0002\u0002\u0002[\r\u0003\u0002\u0002\u0002\\]\u0007",
    "\u0005\u0002\u0002]^\u0007\'\u0002\u0002^a\u0007%\u0002\u0002_`\u0007",
    "\'\u0002\u0002`b\u0005&\u0014\u0002a_\u0003\u0002\u0002\u0002ab\u0003",
    "\u0002\u0002\u0002b\u000f\u0003\u0002\u0002\u0002cd\u0007\u0006\u0002",
    "\u0002de\u0007\'\u0002\u0002el\u0007%\u0002\u0002fj\u0007\'\u0002\u0002",
    "gk\u0005.\u0018\u0002hk\u0007%\u0002\u0002ik\u0005\u001a\u000e\u0002",
    "jg\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002ji\u0003\u0002\u0002",
    "\u0002km\u0003\u0002\u0002\u0002lf\u0003\u0002\u0002\u0002lm\u0003\u0002",
    "\u0002\u0002m\u0011\u0003\u0002\u0002\u0002no\u0007\u0007\u0002\u0002",
    "op\u0007%\u0002\u0002pq\u0007\b\u0002\u0002qv\u0007\u001a\u0002\u0002",
    "rs\u0007\t\u0002\u0002su\u0007\u001a\u0002\u0002tr\u0003\u0002\u0002",
    "\u0002ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002",
    "\u0002\u0002wy\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002yz\u0007",
    "\n\u0002\u0002z\u0013\u0003\u0002\u0002\u0002{|\u0007\u000b\u0002\u0002",
    "|}\u0007%\u0002\u0002}~\u0007\b\u0002\u0002~\u0083\t\u0002\u0002\u0002",
    "\u007f\u0080\u0007\t\u0002\u0002\u0080\u0082\t\u0002\u0002\u0002\u0081",
    "\u007f\u0003\u0002\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083",
    "\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084",
    "\u0086\u0003\u0002\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086",
    "\u0087\u0007\n\u0002\u0002\u0087\u0015\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0007\f\u0002\u0002\u0089\u008a\u0007%\u0002\u0002\u008a\u008b",
    "\u0007\b\u0002\u0002\u008b\u0090\u0005.\u0018\u0002\u008c\u008d\u0007",
    "\t\u0002\u0002\u008d\u008f\u0005.\u0018\u0002\u008e\u008c\u0003\u0002",
    "\u0002\u0002\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002",
    "\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0093\u0003\u0002",
    "\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u0094\u0007\n",
    "\u0002\u0002\u0094\u0017\u0003\u0002\u0002\u0002\u0095\u0096\u0007\b",
    "\u0002\u0002\u0096\u0097\u0005,\u0017\u0002\u0097\u0098\u0007\n\u0002",
    "\u0002\u0098\u0019\u0003\u0002\u0002\u0002\u0099\u009a\u0007%\u0002",
    "\u0002\u009a\u009b\u0005\u0018\r\u0002\u009b\u001b\u0003\u0002\u0002",
    "\u0002\u009c\u009d\t\u0003\u0002\u0002\u009d\u00a2\u0007\'\u0002\u0002",
    "\u009e\u00a1\u0005,\u0017\u0002\u009f\u00a1\u0007\'\u0002\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a1",
    "\u00a4\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0003\u0002\u0002\u0002\u00a3\u001d\u0003\u0002\u0002\u0002\u00a4",
    "\u00a2\u0003\u0002\u0002\u0002\u00a5\u00a6\t\u0004\u0002\u0002\u00a6",
    "\u00a9\u0007\'\u0002\u0002\u00a7\u00aa\u0007%\u0002\u0002\u00a8\u00aa",
    "\u0005\u001a\u000e\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00a8",
    "\u0003\u0002\u0002\u0002\u00aa\u001f\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\t\u0005\u0002\u0002\u00ac\u00ad\u0007\'\u0002\u0002\u00ad\u00af\u0005",
    "$\u0013\u0002\u00ae\u00b0\u0007\'\u0002\u0002\u00af\u00ae\u0003\u0002",
    "\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002",
    "\u0002\u0002\u00b1\u00b4\u0007\u0013\u0002\u0002\u00b2\u00b5\u0005\u0004",
    "\u0003\u0002\u00b3\u00b5\u0007\'\u0002\u0002\u00b4\u00b2\u0003\u0002",
    "\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002",
    "\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002",
    "\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u0014",
    "\u0002\u0002\u00b9!\u0003\u0002\u0002\u0002\u00ba\u00bb\t\u0006\u0002",
    "\u0002\u00bb\u00bc\u0007\'\u0002\u0002\u00bc\u00be\u0005$\u0013\u0002",
    "\u00bd\u00bf\u0007\'\u0002\u0002\u00be\u00bd\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002",
    "\u00c0\u00c3\u0007\u0013\u0002\u0002\u00c1\u00c4\u0005\u0004\u0003\u0002",
    "\u00c2\u00c4\u0007\'\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002",
    "\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002",
    "\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002",
    "\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\u0014\u0002\u0002",
    "\u00c8#\u0003\u0002\u0002\u0002\u00c9\u00cb\u0005,\u0017\u0002\u00ca",
    "\u00cc\u0007\'\u0002\u0002\u00cb\u00ca\u0003\u0002\u0002\u0002\u00cb",
    "\u00cc\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd",
    "\u00cf\t\u0007\u0002\u0002\u00ce\u00d0\u0007\'\u0002\u0002\u00cf\u00ce",
    "\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0003\u0002\u0002\u0002\u00d1\u00d2\u0005,\u0017\u0002\u00d2%\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\b\u0014\u0001\u0002\u00d4\u00d5\u0007",
    "\u0017\u0002\u0002\u00d5\u00d6\u0005&\u0014\u0002\u00d6\u00d7\u0007",
    "\u0018\u0002\u0002\u00d7\u00dd\u0003\u0002\u0002\u0002\u00d8\u00dd\u0007",
    "%\u0002\u0002\u00d9\u00dd\u0005\u001a\u000e\u0002\u00da\u00dd\u0007",
    "\u001a\u0002\u0002\u00db\u00dd\u0007\u001b\u0002\u0002\u00dc\u00d3\u0003",
    "\u0002\u0002\u0002\u00dc\u00d8\u0003\u0002\u0002\u0002\u00dc\u00d9\u0003",
    "\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00db\u0003",
    "\u0002\u0002\u0002\u00dd\u0104\u0003\u0002\u0002\u0002\u00de\u00e0\f",
    "\n\u0002\u0002\u00df\u00e1\u0007\'\u0002\u0002\u00e0\u00df\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e2\u0003\u0002",
    "\u0002\u0002\u00e2\u00e4\u0007\u001c\u0002\u0002\u00e3\u00e5\u0007\'",
    "\u0002\u0002\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u0103\u0005&",
    "\u0014\u000b\u00e7\u00e9\f\t\u0002\u0002\u00e8\u00ea\u0007\'\u0002\u0002",
    "\u00e9\u00e8\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ed\u0007\u001d\u0002\u0002",
    "\u00ec\u00ee\u0007\'\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002",
    "\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002",
    "\u00ef\u0103\u0005&\u0014\n\u00f0\u00f2\f\b\u0002\u0002\u00f1\u00f3",
    "\u0007\'\u0002\u0002\u00f2\u00f1\u0003\u0002\u0002\u0002\u00f2\u00f3",
    "\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f6",
    "\u0007\u001e\u0002\u0002\u00f5\u00f7\u0007\'\u0002\u0002\u00f6\u00f5",
    "\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8",
    "\u0003\u0002\u0002\u0002\u00f8\u0103\u0005&\u0014\t\u00f9\u00fb\f\u0007",
    "\u0002\u0002\u00fa\u00fc\u0007\'\u0002\u0002\u00fb\u00fa\u0003\u0002",
    "\u0002\u0002\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002",
    "\u0002\u0002\u00fd\u00ff\u0007\u001f\u0002\u0002\u00fe\u0100\u0007\'",
    "\u0002\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002",
    "\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0103\u0005&",
    "\u0014\b\u0102\u00de\u0003\u0002\u0002\u0002\u0102\u00e7\u0003\u0002",
    "\u0002\u0002\u0102\u00f0\u0003\u0002\u0002\u0002\u0102\u00f9\u0003\u0002",
    "\u0002\u0002\u0103\u0106\u0003\u0002\u0002\u0002\u0104\u0102\u0003\u0002",
    "\u0002\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105\'\u0003\u0002",
    "\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002\u0107\u0108\u0007%",
    "\u0002\u0002\u0108\u0109\u0007\'\u0002\u0002\u0109\u010a\u0005,\u0017",
    "\u0002\u010a)\u0003\u0002\u0002\u0002\u010b\u010c\u0005\u001a\u000e",
    "\u0002\u010c\u010d\u0005,\u0017\u0002\u010d+\u0003\u0002\u0002\u0002",
    "\u010e\u0115\u0007%\u0002\u0002\u010f\u0115\u0007\u001a\u0002\u0002",
    "\u0110\u0115\u0007\u001b\u0002\u0002\u0111\u0115\u0005.\u0018\u0002",
    "\u0112\u0115\u0005\u001a\u000e\u0002\u0113\u0115\u0005&\u0014\u0002",
    "\u0114\u010e\u0003\u0002\u0002\u0002\u0114\u010f\u0003\u0002\u0002\u0002",
    "\u0114\u0110\u0003\u0002\u0002\u0002\u0114\u0111\u0003\u0002\u0002\u0002",
    "\u0114\u0112\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002",
    "\u0115-\u0003\u0002\u0002\u0002\u0116\u0117\u0007&\u0002\u0002\u0117",
    "/\u0003\u0002\u0002\u0002\'24@CINSZajlv\u0083\u0090\u00a0\u00a2\u00a9",
    "\u00af\u00b4\u00b6\u00be\u00c3\u00c5\u00cb\u00cf\u00dc\u00e0\u00e4\u00e9",
    "\u00ed\u00f2\u00f6\u00fb\u00ff\u0102\u0104\u0114"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'int'", "'real'", "'string'", "'int[]'", 
                     "'['", "','", "']'", "'real[]'", "'string[]'", "'print'", 
                     "'PRINT'", "'read'", "'READ'", "'while'", "'WHILE'", 
                     "'{'", "'}'", "'if'", "'IF'", "'('", "')'", null, null, 
                     null, "'*'", "'/'", "'+'", "'-'", "'='", "'<='", "'>='", 
                     "'>'", "'<'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "COMMENT", "INTEGER_NUMBER", 
                      "REAL_NUMBER", "ASTERISK", "SLASH", "PLUS", "MINUS", 
                      "EQUAL", "LESS_OR_EQUAL", "GREATER_OR_EQUAL", "GREATER_THAN", 
                      "LESS_THAN", "VARIABLE_NAME", "TEXT", "W" ];

var ruleNames =  [ "program", "instruction", "definition", "single_element_definition", 
                   "array_definition", "int_definition", "real_definition", 
                   "string_definition", "int_array_definition", "real_array_definition", 
                   "string_array_definition", "element_number", "element_of_array", 
                   "print_instruction", "read_instruction", "while_instruction", 
                   "if_instruction", "condition", "arithmetic_expression", 
                   "assignment", "array_element_assignment", "value", "string" ];

function FiszczLangParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FiszczLangParser.prototype = Object.create(antlr4.Parser.prototype);
FiszczLangParser.prototype.constructor = FiszczLangParser;

Object.defineProperty(FiszczLangParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FiszczLangParser.EOF = antlr4.Token.EOF;
FiszczLangParser.T__0 = 1;
FiszczLangParser.T__1 = 2;
FiszczLangParser.T__2 = 3;
FiszczLangParser.T__3 = 4;
FiszczLangParser.T__4 = 5;
FiszczLangParser.T__5 = 6;
FiszczLangParser.T__6 = 7;
FiszczLangParser.T__7 = 8;
FiszczLangParser.T__8 = 9;
FiszczLangParser.T__9 = 10;
FiszczLangParser.T__10 = 11;
FiszczLangParser.T__11 = 12;
FiszczLangParser.T__12 = 13;
FiszczLangParser.T__13 = 14;
FiszczLangParser.T__14 = 15;
FiszczLangParser.T__15 = 16;
FiszczLangParser.T__16 = 17;
FiszczLangParser.T__17 = 18;
FiszczLangParser.T__18 = 19;
FiszczLangParser.T__19 = 20;
FiszczLangParser.T__20 = 21;
FiszczLangParser.T__21 = 22;
FiszczLangParser.COMMENT = 23;
FiszczLangParser.INTEGER_NUMBER = 24;
FiszczLangParser.REAL_NUMBER = 25;
FiszczLangParser.ASTERISK = 26;
FiszczLangParser.SLASH = 27;
FiszczLangParser.PLUS = 28;
FiszczLangParser.MINUS = 29;
FiszczLangParser.EQUAL = 30;
FiszczLangParser.LESS_OR_EQUAL = 31;
FiszczLangParser.GREATER_OR_EQUAL = 32;
FiszczLangParser.GREATER_THAN = 33;
FiszczLangParser.LESS_THAN = 34;
FiszczLangParser.VARIABLE_NAME = 35;
FiszczLangParser.TEXT = 36;
FiszczLangParser.W = 37;

FiszczLangParser.RULE_program = 0;
FiszczLangParser.RULE_instruction = 1;
FiszczLangParser.RULE_definition = 2;
FiszczLangParser.RULE_single_element_definition = 3;
FiszczLangParser.RULE_array_definition = 4;
FiszczLangParser.RULE_int_definition = 5;
FiszczLangParser.RULE_real_definition = 6;
FiszczLangParser.RULE_string_definition = 7;
FiszczLangParser.RULE_int_array_definition = 8;
FiszczLangParser.RULE_real_array_definition = 9;
FiszczLangParser.RULE_string_array_definition = 10;
FiszczLangParser.RULE_element_number = 11;
FiszczLangParser.RULE_element_of_array = 12;
FiszczLangParser.RULE_print_instruction = 13;
FiszczLangParser.RULE_read_instruction = 14;
FiszczLangParser.RULE_while_instruction = 15;
FiszczLangParser.RULE_if_instruction = 16;
FiszczLangParser.RULE_condition = 17;
FiszczLangParser.RULE_arithmetic_expression = 18;
FiszczLangParser.RULE_assignment = 19;
FiszczLangParser.RULE_array_element_assignment = 20;
FiszczLangParser.RULE_value = 21;
FiszczLangParser.RULE_string = 22;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(FiszczLangParser.EOF, 0);
};

ProgramContext.prototype.instruction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstructionContext);
    } else {
        return this.getTypedRuleContext(InstructionContext,i);
    }
};

ProgramContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.ProgramContext = ProgramContext;

FiszczLangParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FiszczLangParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 48;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FiszczLangParser.T__1:
            case FiszczLangParser.T__2:
            case FiszczLangParser.T__3:
            case FiszczLangParser.T__4:
            case FiszczLangParser.T__8:
            case FiszczLangParser.T__9:
            case FiszczLangParser.T__10:
            case FiszczLangParser.T__11:
            case FiszczLangParser.T__12:
            case FiszczLangParser.T__13:
            case FiszczLangParser.T__14:
            case FiszczLangParser.T__15:
            case FiszczLangParser.T__18:
            case FiszczLangParser.T__19:
            case FiszczLangParser.VARIABLE_NAME:
                this.state = 46;
                this.instruction();
                break;
            case FiszczLangParser.W:
                this.state = 47;
                this.match(FiszczLangParser.W);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 50; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FiszczLangParser.T__1) | (1 << FiszczLangParser.T__2) | (1 << FiszczLangParser.T__3) | (1 << FiszczLangParser.T__4) | (1 << FiszczLangParser.T__8) | (1 << FiszczLangParser.T__9) | (1 << FiszczLangParser.T__10) | (1 << FiszczLangParser.T__11) | (1 << FiszczLangParser.T__12) | (1 << FiszczLangParser.T__13) | (1 << FiszczLangParser.T__14) | (1 << FiszczLangParser.T__15) | (1 << FiszczLangParser.T__18) | (1 << FiszczLangParser.T__19))) !== 0) || _la===FiszczLangParser.VARIABLE_NAME || _la===FiszczLangParser.W);
        this.state = 52;
        this.match(FiszczLangParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InstructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_instruction;
    return this;
}

InstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstructionContext.prototype.constructor = InstructionContext;

InstructionContext.prototype.definition = function() {
    return this.getTypedRuleContext(DefinitionContext,0);
};

InstructionContext.prototype.print_instruction = function() {
    return this.getTypedRuleContext(Print_instructionContext,0);
};

InstructionContext.prototype.read_instruction = function() {
    return this.getTypedRuleContext(Read_instructionContext,0);
};

InstructionContext.prototype.if_instruction = function() {
    return this.getTypedRuleContext(If_instructionContext,0);
};

InstructionContext.prototype.while_instruction = function() {
    return this.getTypedRuleContext(While_instructionContext,0);
};

InstructionContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

InstructionContext.prototype.array_element_assignment = function() {
    return this.getTypedRuleContext(Array_element_assignmentContext,0);
};

InstructionContext.prototype.W = function() {
    return this.getToken(FiszczLangParser.W, 0);
};

InstructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterInstruction(this);
	}
};

InstructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitInstruction(this);
	}
};

InstructionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitInstruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.InstructionContext = InstructionContext;

FiszczLangParser.prototype.instruction = function() {

    var localctx = new InstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FiszczLangParser.RULE_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 54;
            this.definition();
            break;

        case 2:
            this.state = 55;
            this.print_instruction();
            break;

        case 3:
            this.state = 56;
            this.print_instruction();
            break;

        case 4:
            this.state = 57;
            this.read_instruction();
            break;

        case 5:
            this.state = 58;
            this.if_instruction();
            break;

        case 6:
            this.state = 59;
            this.while_instruction();
            break;

        case 7:
            this.state = 60;
            this.assignment();
            break;

        case 8:
            this.state = 61;
            this.array_element_assignment();
            break;

        }
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FiszczLangParser.W) {
            this.state = 64;
            this.match(FiszczLangParser.W);
        }

        this.state = 67;
        this.match(FiszczLangParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_definition;
    return this;
}

DefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefinitionContext.prototype.constructor = DefinitionContext;

DefinitionContext.prototype.single_element_definition = function() {
    return this.getTypedRuleContext(Single_element_definitionContext,0);
};

DefinitionContext.prototype.array_definition = function() {
    return this.getTypedRuleContext(Array_definitionContext,0);
};

DefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterDefinition(this);
	}
};

DefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitDefinition(this);
	}
};

DefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.DefinitionContext = DefinitionContext;

FiszczLangParser.prototype.definition = function() {

    var localctx = new DefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FiszczLangParser.RULE_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FiszczLangParser.T__1:
        case FiszczLangParser.T__2:
        case FiszczLangParser.T__3:
            this.state = 69;
            this.single_element_definition();
            break;
        case FiszczLangParser.T__4:
        case FiszczLangParser.T__8:
        case FiszczLangParser.T__9:
            this.state = 70;
            this.array_definition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Single_element_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_single_element_definition;
    return this;
}

Single_element_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Single_element_definitionContext.prototype.constructor = Single_element_definitionContext;

Single_element_definitionContext.prototype.int_definition = function() {
    return this.getTypedRuleContext(Int_definitionContext,0);
};

Single_element_definitionContext.prototype.real_definition = function() {
    return this.getTypedRuleContext(Real_definitionContext,0);
};

Single_element_definitionContext.prototype.string_definition = function() {
    return this.getTypedRuleContext(String_definitionContext,0);
};

Single_element_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterSingle_element_definition(this);
	}
};

Single_element_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitSingle_element_definition(this);
	}
};

Single_element_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitSingle_element_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Single_element_definitionContext = Single_element_definitionContext;

FiszczLangParser.prototype.single_element_definition = function() {

    var localctx = new Single_element_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FiszczLangParser.RULE_single_element_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FiszczLangParser.T__1:
            this.state = 73;
            this.int_definition();
            break;
        case FiszczLangParser.T__2:
            this.state = 74;
            this.real_definition();
            break;
        case FiszczLangParser.T__3:
            this.state = 75;
            this.string_definition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Array_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_array_definition;
    return this;
}

Array_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_definitionContext.prototype.constructor = Array_definitionContext;

Array_definitionContext.prototype.int_array_definition = function() {
    return this.getTypedRuleContext(Int_array_definitionContext,0);
};

Array_definitionContext.prototype.real_array_definition = function() {
    return this.getTypedRuleContext(Real_array_definitionContext,0);
};

Array_definitionContext.prototype.string_array_definition = function() {
    return this.getTypedRuleContext(String_array_definitionContext,0);
};

Array_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterArray_definition(this);
	}
};

Array_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitArray_definition(this);
	}
};

Array_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitArray_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Array_definitionContext = Array_definitionContext;

FiszczLangParser.prototype.array_definition = function() {

    var localctx = new Array_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FiszczLangParser.RULE_array_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FiszczLangParser.T__4:
            this.state = 78;
            this.int_array_definition();
            break;
        case FiszczLangParser.T__8:
            this.state = 79;
            this.real_array_definition();
            break;
        case FiszczLangParser.T__9:
            this.state = 80;
            this.string_array_definition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Int_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_int_definition;
    return this;
}

Int_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Int_definitionContext.prototype.constructor = Int_definitionContext;

Int_definitionContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


Int_definitionContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Int_definitionContext.prototype.arithmetic_expression = function() {
    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
};

Int_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterInt_definition(this);
	}
};

Int_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitInt_definition(this);
	}
};

Int_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitInt_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Int_definitionContext = Int_definitionContext;

FiszczLangParser.prototype.int_definition = function() {

    var localctx = new Int_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FiszczLangParser.RULE_int_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.match(FiszczLangParser.T__1);
        this.state = 84;
        this.match(FiszczLangParser.W);
        this.state = 85;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 88;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 86;
            this.match(FiszczLangParser.W);
            this.state = 87;
            this.arithmetic_expression(0);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Real_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_real_definition;
    return this;
}

Real_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Real_definitionContext.prototype.constructor = Real_definitionContext;

Real_definitionContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


Real_definitionContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Real_definitionContext.prototype.arithmetic_expression = function() {
    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
};

Real_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterReal_definition(this);
	}
};

Real_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitReal_definition(this);
	}
};

Real_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitReal_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Real_definitionContext = Real_definitionContext;

FiszczLangParser.prototype.real_definition = function() {

    var localctx = new Real_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FiszczLangParser.RULE_real_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(FiszczLangParser.T__2);
        this.state = 91;
        this.match(FiszczLangParser.W);
        this.state = 92;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 95;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 93;
            this.match(FiszczLangParser.W);
            this.state = 94;
            this.arithmetic_expression(0);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function String_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_string_definition;
    return this;
}

String_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
String_definitionContext.prototype.constructor = String_definitionContext;

String_definitionContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


String_definitionContext.prototype.VARIABLE_NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.VARIABLE_NAME);
    } else {
        return this.getToken(FiszczLangParser.VARIABLE_NAME, i);
    }
};


String_definitionContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

String_definitionContext.prototype.element_of_array = function() {
    return this.getTypedRuleContext(Element_of_arrayContext,0);
};

String_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterString_definition(this);
	}
};

String_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitString_definition(this);
	}
};

String_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitString_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.String_definitionContext = String_definitionContext;

FiszczLangParser.prototype.string_definition = function() {

    var localctx = new String_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FiszczLangParser.RULE_string_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(FiszczLangParser.T__3);
        this.state = 98;
        this.match(FiszczLangParser.W);
        this.state = 99;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 106;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 100;
            this.match(FiszczLangParser.W);
            this.state = 104;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 101;
                this.string();
                break;

            case 2:
                this.state = 102;
                this.match(FiszczLangParser.VARIABLE_NAME);
                break;

            case 3:
                this.state = 103;
                this.element_of_array();
                break;

            }

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Int_array_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_int_array_definition;
    return this;
}

Int_array_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Int_array_definitionContext.prototype.constructor = Int_array_definitionContext;

Int_array_definitionContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Int_array_definitionContext.prototype.INTEGER_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.INTEGER_NUMBER);
    } else {
        return this.getToken(FiszczLangParser.INTEGER_NUMBER, i);
    }
};


Int_array_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterInt_array_definition(this);
	}
};

Int_array_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitInt_array_definition(this);
	}
};

Int_array_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitInt_array_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Int_array_definitionContext = Int_array_definitionContext;

FiszczLangParser.prototype.int_array_definition = function() {

    var localctx = new Int_array_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FiszczLangParser.RULE_int_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(FiszczLangParser.T__4);
        this.state = 109;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 110;
        this.match(FiszczLangParser.T__5);
        this.state = 111;
        this.match(FiszczLangParser.INTEGER_NUMBER);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FiszczLangParser.T__6) {
            this.state = 112;
            this.match(FiszczLangParser.T__6);
            this.state = 113;
            this.match(FiszczLangParser.INTEGER_NUMBER);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 119;
        this.match(FiszczLangParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Real_array_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_real_array_definition;
    return this;
}

Real_array_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Real_array_definitionContext.prototype.constructor = Real_array_definitionContext;

Real_array_definitionContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Real_array_definitionContext.prototype.INTEGER_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.INTEGER_NUMBER);
    } else {
        return this.getToken(FiszczLangParser.INTEGER_NUMBER, i);
    }
};


Real_array_definitionContext.prototype.REAL_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.REAL_NUMBER);
    } else {
        return this.getToken(FiszczLangParser.REAL_NUMBER, i);
    }
};


Real_array_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterReal_array_definition(this);
	}
};

Real_array_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitReal_array_definition(this);
	}
};

Real_array_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitReal_array_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Real_array_definitionContext = Real_array_definitionContext;

FiszczLangParser.prototype.real_array_definition = function() {

    var localctx = new Real_array_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FiszczLangParser.RULE_real_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(FiszczLangParser.T__8);
        this.state = 122;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 123;
        this.match(FiszczLangParser.T__5);
        this.state = 124;
        _la = this._input.LA(1);
        if(!(_la===FiszczLangParser.INTEGER_NUMBER || _la===FiszczLangParser.REAL_NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FiszczLangParser.T__6) {
            this.state = 125;
            this.match(FiszczLangParser.T__6);
            this.state = 126;
            _la = this._input.LA(1);
            if(!(_la===FiszczLangParser.INTEGER_NUMBER || _la===FiszczLangParser.REAL_NUMBER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 132;
        this.match(FiszczLangParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function String_array_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_string_array_definition;
    return this;
}

String_array_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
String_array_definitionContext.prototype.constructor = String_array_definitionContext;

String_array_definitionContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

String_array_definitionContext.prototype.string = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StringContext);
    } else {
        return this.getTypedRuleContext(StringContext,i);
    }
};

String_array_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterString_array_definition(this);
	}
};

String_array_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitString_array_definition(this);
	}
};

String_array_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitString_array_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.String_array_definitionContext = String_array_definitionContext;

FiszczLangParser.prototype.string_array_definition = function() {

    var localctx = new String_array_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FiszczLangParser.RULE_string_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(FiszczLangParser.T__9);
        this.state = 135;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 136;
        this.match(FiszczLangParser.T__5);
        this.state = 137;
        this.string();
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FiszczLangParser.T__6) {
            this.state = 138;
            this.match(FiszczLangParser.T__6);
            this.state = 139;
            this.string();
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 145;
        this.match(FiszczLangParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Element_numberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_element_number;
    return this;
}

Element_numberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Element_numberContext.prototype.constructor = Element_numberContext;

Element_numberContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Element_numberContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterElement_number(this);
	}
};

Element_numberContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitElement_number(this);
	}
};

Element_numberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitElement_number(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Element_numberContext = Element_numberContext;

FiszczLangParser.prototype.element_number = function() {

    var localctx = new Element_numberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FiszczLangParser.RULE_element_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(FiszczLangParser.T__5);
        this.state = 148;
        this.value();
        this.state = 149;
        this.match(FiszczLangParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Element_of_arrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_element_of_array;
    return this;
}

Element_of_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Element_of_arrayContext.prototype.constructor = Element_of_arrayContext;

Element_of_arrayContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Element_of_arrayContext.prototype.element_number = function() {
    return this.getTypedRuleContext(Element_numberContext,0);
};

Element_of_arrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterElement_of_array(this);
	}
};

Element_of_arrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitElement_of_array(this);
	}
};

Element_of_arrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitElement_of_array(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Element_of_arrayContext = Element_of_arrayContext;

FiszczLangParser.prototype.element_of_array = function() {

    var localctx = new Element_of_arrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FiszczLangParser.RULE_element_of_array);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 152;
        this.element_number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Print_instructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_print_instruction;
    return this;
}

Print_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Print_instructionContext.prototype.constructor = Print_instructionContext;

Print_instructionContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


Print_instructionContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

Print_instructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterPrint_instruction(this);
	}
};

Print_instructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitPrint_instruction(this);
	}
};

Print_instructionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitPrint_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Print_instructionContext = Print_instructionContext;

FiszczLangParser.prototype.print_instruction = function() {

    var localctx = new Print_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FiszczLangParser.RULE_print_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        _la = this._input.LA(1);
        if(!(_la===FiszczLangParser.T__10 || _la===FiszczLangParser.T__11)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 155;
        this.match(FiszczLangParser.W);
        this.state = 160;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 158;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case FiszczLangParser.T__20:
                case FiszczLangParser.INTEGER_NUMBER:
                case FiszczLangParser.REAL_NUMBER:
                case FiszczLangParser.VARIABLE_NAME:
                case FiszczLangParser.TEXT:
                    this.state = 156;
                    this.value();
                    break;
                case FiszczLangParser.W:
                    this.state = 157;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 162;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Read_instructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_read_instruction;
    return this;
}

Read_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Read_instructionContext.prototype.constructor = Read_instructionContext;

Read_instructionContext.prototype.W = function() {
    return this.getToken(FiszczLangParser.W, 0);
};

Read_instructionContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Read_instructionContext.prototype.element_of_array = function() {
    return this.getTypedRuleContext(Element_of_arrayContext,0);
};

Read_instructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterRead_instruction(this);
	}
};

Read_instructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitRead_instruction(this);
	}
};

Read_instructionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitRead_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Read_instructionContext = Read_instructionContext;

FiszczLangParser.prototype.read_instruction = function() {

    var localctx = new Read_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FiszczLangParser.RULE_read_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        _la = this._input.LA(1);
        if(!(_la===FiszczLangParser.T__12 || _la===FiszczLangParser.T__13)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 164;
        this.match(FiszczLangParser.W);
        this.state = 167;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.state = 165;
            this.match(FiszczLangParser.VARIABLE_NAME);
            break;

        case 2:
            this.state = 166;
            this.element_of_array();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function While_instructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_while_instruction;
    return this;
}

While_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_instructionContext.prototype.constructor = While_instructionContext;

While_instructionContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


While_instructionContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

While_instructionContext.prototype.instruction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstructionContext);
    } else {
        return this.getTypedRuleContext(InstructionContext,i);
    }
};

While_instructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterWhile_instruction(this);
	}
};

While_instructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitWhile_instruction(this);
	}
};

While_instructionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitWhile_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.While_instructionContext = While_instructionContext;

FiszczLangParser.prototype.while_instruction = function() {

    var localctx = new While_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FiszczLangParser.RULE_while_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        _la = this._input.LA(1);
        if(!(_la===FiszczLangParser.T__14 || _la===FiszczLangParser.T__15)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 170;
        this.match(FiszczLangParser.W);
        this.state = 171;
        this.condition();
        this.state = 173;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FiszczLangParser.W) {
            this.state = 172;
            this.match(FiszczLangParser.W);
        }

        this.state = 175;
        this.match(FiszczLangParser.T__16);
        this.state = 178; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 178;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FiszczLangParser.T__1:
            case FiszczLangParser.T__2:
            case FiszczLangParser.T__3:
            case FiszczLangParser.T__4:
            case FiszczLangParser.T__8:
            case FiszczLangParser.T__9:
            case FiszczLangParser.T__10:
            case FiszczLangParser.T__11:
            case FiszczLangParser.T__12:
            case FiszczLangParser.T__13:
            case FiszczLangParser.T__14:
            case FiszczLangParser.T__15:
            case FiszczLangParser.T__18:
            case FiszczLangParser.T__19:
            case FiszczLangParser.VARIABLE_NAME:
                this.state = 176;
                this.instruction();
                break;
            case FiszczLangParser.W:
                this.state = 177;
                this.match(FiszczLangParser.W);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 180; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FiszczLangParser.T__1) | (1 << FiszczLangParser.T__2) | (1 << FiszczLangParser.T__3) | (1 << FiszczLangParser.T__4) | (1 << FiszczLangParser.T__8) | (1 << FiszczLangParser.T__9) | (1 << FiszczLangParser.T__10) | (1 << FiszczLangParser.T__11) | (1 << FiszczLangParser.T__12) | (1 << FiszczLangParser.T__13) | (1 << FiszczLangParser.T__14) | (1 << FiszczLangParser.T__15) | (1 << FiszczLangParser.T__18) | (1 << FiszczLangParser.T__19))) !== 0) || _la===FiszczLangParser.VARIABLE_NAME || _la===FiszczLangParser.W);
        this.state = 182;
        this.match(FiszczLangParser.T__17);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function If_instructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_if_instruction;
    return this;
}

If_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_instructionContext.prototype.constructor = If_instructionContext;

If_instructionContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


If_instructionContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

If_instructionContext.prototype.instruction = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstructionContext);
    } else {
        return this.getTypedRuleContext(InstructionContext,i);
    }
};

If_instructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterIf_instruction(this);
	}
};

If_instructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitIf_instruction(this);
	}
};

If_instructionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitIf_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.If_instructionContext = If_instructionContext;

FiszczLangParser.prototype.if_instruction = function() {

    var localctx = new If_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FiszczLangParser.RULE_if_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        _la = this._input.LA(1);
        if(!(_la===FiszczLangParser.T__18 || _la===FiszczLangParser.T__19)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 185;
        this.match(FiszczLangParser.W);
        this.state = 186;
        this.condition();
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FiszczLangParser.W) {
            this.state = 187;
            this.match(FiszczLangParser.W);
        }

        this.state = 190;
        this.match(FiszczLangParser.T__16);
        this.state = 193; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 193;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case FiszczLangParser.T__1:
            case FiszczLangParser.T__2:
            case FiszczLangParser.T__3:
            case FiszczLangParser.T__4:
            case FiszczLangParser.T__8:
            case FiszczLangParser.T__9:
            case FiszczLangParser.T__10:
            case FiszczLangParser.T__11:
            case FiszczLangParser.T__12:
            case FiszczLangParser.T__13:
            case FiszczLangParser.T__14:
            case FiszczLangParser.T__15:
            case FiszczLangParser.T__18:
            case FiszczLangParser.T__19:
            case FiszczLangParser.VARIABLE_NAME:
                this.state = 191;
                this.instruction();
                break;
            case FiszczLangParser.W:
                this.state = 192;
                this.match(FiszczLangParser.W);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 195; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FiszczLangParser.T__1) | (1 << FiszczLangParser.T__2) | (1 << FiszczLangParser.T__3) | (1 << FiszczLangParser.T__4) | (1 << FiszczLangParser.T__8) | (1 << FiszczLangParser.T__9) | (1 << FiszczLangParser.T__10) | (1 << FiszczLangParser.T__11) | (1 << FiszczLangParser.T__12) | (1 << FiszczLangParser.T__13) | (1 << FiszczLangParser.T__14) | (1 << FiszczLangParser.T__15) | (1 << FiszczLangParser.T__18) | (1 << FiszczLangParser.T__19))) !== 0) || _la===FiszczLangParser.VARIABLE_NAME || _la===FiszczLangParser.W);
        this.state = 197;
        this.match(FiszczLangParser.T__17);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

ConditionContext.prototype.EQUAL = function() {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

ConditionContext.prototype.LESS_OR_EQUAL = function() {
    return this.getToken(FiszczLangParser.LESS_OR_EQUAL, 0);
};

ConditionContext.prototype.GREATER_OR_EQUAL = function() {
    return this.getToken(FiszczLangParser.GREATER_OR_EQUAL, 0);
};

ConditionContext.prototype.GREATER_THAN = function() {
    return this.getToken(FiszczLangParser.GREATER_THAN, 0);
};

ConditionContext.prototype.LESS_THAN = function() {
    return this.getToken(FiszczLangParser.LESS_THAN, 0);
};

ConditionContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitCondition(this);
	}
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.ConditionContext = ConditionContext;

FiszczLangParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FiszczLangParser.RULE_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.value();
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FiszczLangParser.W) {
            this.state = 200;
            this.match(FiszczLangParser.W);
        }

        this.state = 203;
        _la = this._input.LA(1);
        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (FiszczLangParser.EQUAL - 30)) | (1 << (FiszczLangParser.LESS_OR_EQUAL - 30)) | (1 << (FiszczLangParser.GREATER_OR_EQUAL - 30)) | (1 << (FiszczLangParser.GREATER_THAN - 30)) | (1 << (FiszczLangParser.LESS_THAN - 30)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FiszczLangParser.W) {
            this.state = 204;
            this.match(FiszczLangParser.W);
        }

        this.state = 207;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Arithmetic_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_arithmetic_expression;
    return this;
}

Arithmetic_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arithmetic_expressionContext.prototype.constructor = Arithmetic_expressionContext;

Arithmetic_expressionContext.prototype.arithmetic_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Arithmetic_expressionContext);
    } else {
        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
    }
};

Arithmetic_expressionContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Arithmetic_expressionContext.prototype.element_of_array = function() {
    return this.getTypedRuleContext(Element_of_arrayContext,0);
};

Arithmetic_expressionContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(FiszczLangParser.INTEGER_NUMBER, 0);
};

Arithmetic_expressionContext.prototype.REAL_NUMBER = function() {
    return this.getToken(FiszczLangParser.REAL_NUMBER, 0);
};

Arithmetic_expressionContext.prototype.ASTERISK = function() {
    return this.getToken(FiszczLangParser.ASTERISK, 0);
};

Arithmetic_expressionContext.prototype.W = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};


Arithmetic_expressionContext.prototype.SLASH = function() {
    return this.getToken(FiszczLangParser.SLASH, 0);
};

Arithmetic_expressionContext.prototype.PLUS = function() {
    return this.getToken(FiszczLangParser.PLUS, 0);
};

Arithmetic_expressionContext.prototype.MINUS = function() {
    return this.getToken(FiszczLangParser.MINUS, 0);
};

Arithmetic_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterArithmetic_expression(this);
	}
};

Arithmetic_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitArithmetic_expression(this);
	}
};

Arithmetic_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitArithmetic_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FiszczLangParser.prototype.arithmetic_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Arithmetic_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, FiszczLangParser.RULE_arithmetic_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.state = 210;
            this.match(FiszczLangParser.T__20);
            this.state = 211;
            this.arithmetic_expression(0);
            this.state = 212;
            this.match(FiszczLangParser.T__21);
            break;

        case 2:
            this.state = 214;
            this.match(FiszczLangParser.VARIABLE_NAME);
            break;

        case 3:
            this.state = 215;
            this.element_of_array();
            break;

        case 4:
            this.state = 216;
            this.match(FiszczLangParser.INTEGER_NUMBER);
            break;

        case 5:
            this.state = 217;
            this.match(FiszczLangParser.REAL_NUMBER);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 258;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 256;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                    this.state = 220;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 222;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===FiszczLangParser.W) {
                        this.state = 221;
                        this.match(FiszczLangParser.W);
                    }

                    this.state = 224;
                    this.match(FiszczLangParser.ASTERISK);
                    this.state = 226;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===FiszczLangParser.W) {
                        this.state = 225;
                        this.match(FiszczLangParser.W);
                    }

                    this.state = 228;
                    this.arithmetic_expression(9);
                    break;

                case 2:
                    localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                    this.state = 229;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 231;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===FiszczLangParser.W) {
                        this.state = 230;
                        this.match(FiszczLangParser.W);
                    }

                    this.state = 233;
                    this.match(FiszczLangParser.SLASH);
                    this.state = 235;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===FiszczLangParser.W) {
                        this.state = 234;
                        this.match(FiszczLangParser.W);
                    }

                    this.state = 237;
                    this.arithmetic_expression(8);
                    break;

                case 3:
                    localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                    this.state = 238;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 240;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===FiszczLangParser.W) {
                        this.state = 239;
                        this.match(FiszczLangParser.W);
                    }

                    this.state = 242;
                    this.match(FiszczLangParser.PLUS);
                    this.state = 244;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===FiszczLangParser.W) {
                        this.state = 243;
                        this.match(FiszczLangParser.W);
                    }

                    this.state = 246;
                    this.arithmetic_expression(7);
                    break;

                case 4:
                    localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 249;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===FiszczLangParser.W) {
                        this.state = 248;
                        this.match(FiszczLangParser.W);
                    }

                    this.state = 251;
                    this.match(FiszczLangParser.MINUS);
                    this.state = 253;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===FiszczLangParser.W) {
                        this.state = 252;
                        this.match(FiszczLangParser.W);
                    }

                    this.state = 255;
                    this.arithmetic_expression(6);
                    break;

                } 
            }
            this.state = 260;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

AssignmentContext.prototype.W = function() {
    return this.getToken(FiszczLangParser.W, 0);
};

AssignmentContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.AssignmentContext = AssignmentContext;

FiszczLangParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FiszczLangParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 262;
        this.match(FiszczLangParser.W);
        this.state = 263;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Array_element_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_array_element_assignment;
    return this;
}

Array_element_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_element_assignmentContext.prototype.constructor = Array_element_assignmentContext;

Array_element_assignmentContext.prototype.element_of_array = function() {
    return this.getTypedRuleContext(Element_of_arrayContext,0);
};

Array_element_assignmentContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Array_element_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterArray_element_assignment(this);
	}
};

Array_element_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitArray_element_assignment(this);
	}
};

Array_element_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitArray_element_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.Array_element_assignmentContext = Array_element_assignmentContext;

FiszczLangParser.prototype.array_element_assignment = function() {

    var localctx = new Array_element_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FiszczLangParser.RULE_array_element_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.element_of_array();
        this.state = 266;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.VARIABLE_NAME = function() {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

ValueContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(FiszczLangParser.INTEGER_NUMBER, 0);
};

ValueContext.prototype.REAL_NUMBER = function() {
    return this.getToken(FiszczLangParser.REAL_NUMBER, 0);
};

ValueContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ValueContext.prototype.element_of_array = function() {
    return this.getTypedRuleContext(Element_of_arrayContext,0);
};

ValueContext.prototype.arithmetic_expression = function() {
    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.ValueContext = ValueContext;

FiszczLangParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FiszczLangParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.state = 268;
            this.match(FiszczLangParser.VARIABLE_NAME);
            break;

        case 2:
            this.state = 269;
            this.match(FiszczLangParser.INTEGER_NUMBER);
            break;

        case 3:
            this.state = 270;
            this.match(FiszczLangParser.REAL_NUMBER);
            break;

        case 4:
            this.state = 271;
            this.string();
            break;

        case 5:
            this.state = 272;
            this.element_of_array();
            break;

        case 6:
            this.state = 273;
            this.arithmetic_expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.TEXT = function() {
    return this.getToken(FiszczLangParser.TEXT, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof FiszczLangListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FiszczLangVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FiszczLangParser.StringContext = StringContext;

FiszczLangParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, FiszczLangParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(FiszczLangParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FiszczLangParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 18:
			return this.arithmetic_expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FiszczLangParser.prototype.arithmetic_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FiszczLangParser = FiszczLangParser;
