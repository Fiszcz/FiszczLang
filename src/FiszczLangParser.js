// Generated from ./src/FiszczLang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FiszczLangListener = require('./FiszczLangListener').FiszczLangListener;
var FiszczLangVisitor = require('./FiszczLangVisitor').FiszczLangVisitor;

var grammarFileName = 'FiszczLang.g4';

var serializedATN = [
    '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
    '\u0003,\u01db\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t',
    '\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004',
    '\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004',
    '\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004',
    '\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t',
    '\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004',
    '\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t',
    '\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003',
    '\u0002\u0003\u0002\u0006\u0002?\n\u0002\r\u0002\u000e\u0002@\u0003\u0002',
    '\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003',
    '\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003',
    '\u0005\u0003P\n\u0003\u0003\u0003\u0005\u0003S\n\u0003\u0003\u0003\u0003',
    '\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003',
    '\u0005\u0003\u0005\u0005\u0005^\n\u0005\u0003\u0006\u0003\u0006\u0003',
    '\u0006\u0005\u0006c\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005',
    '\u0007h\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bn\n\b\u0003\b',
    '\u0003\b\u0005\br\n\b\u0003\b\u0005\bu\n\b\u0003\t\u0003\t\u0003\t\u0003',
    '\t\u0005\t{\n\t\u0003\t\u0003\t\u0005\t\u007f\n\t\u0003\t\u0005\t\u0082',
    '\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u0088\n\n\u0003\n\u0003',
    '\n\u0005\n\u008c\n\n\u0003\n\u0003\n\u0003\n\u0005\n\u0091\n\n\u0005',
    '\n\u0093\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b',
    '\u0099\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u009d\n\u000b\u0003',
    '\u000b\u0005\u000b\u00a0\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005',
    '\f\u00a6\n\f\u0003\f\u0003\f\u0005\f\u00aa\n\f\u0003\f\u0003\f\u0005',
    '\f\u00ae\n\f\u0003\f\u0003\f\u0005\f\u00b2\n\f\u0003\f\u0003\f\u0005',
    '\f\u00b6\n\f\u0003\f\u0007\f\u00b9\n\f\f\f\u000e\f\u00bc\u000b\f\u0003',
    '\f\u0005\f\u00bf\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r',
    '\u0005\r\u00c7\n\r\u0003\r\u0003\r\u0005\r\u00cb\n\r\u0003\r\u0003\r',
    '\u0005\r\u00cf\n\r\u0003\r\u0003\r\u0005\r\u00d3\n\r\u0003\r\u0003\r',
    '\u0005\r\u00d7\n\r\u0003\r\u0007\r\u00da\n\r\f\r\u000e\r\u00dd\u000b',
    '\r\u0003\r\u0005\r\u00e0\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e',
    '\u0003\u000e\u0003\u000e\u0005\u000e\u00e8\n\u000e\u0003\u000e\u0003',
    '\u000e\u0005\u000e\u00ec\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e',
    '\u00f0\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00f4\n\u000e\u0003',
    '\u000e\u0003\u000e\u0005\u000e\u00f8\n\u000e\u0003\u000e\u0007\u000e',
    '\u00fb\n\u000e\f\u000e\u000e\u000e\u00fe\u000b\u000e\u0003\u000e\u0005',
    '\u000e\u0101\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f',
    '\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u010b\n',
    '\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u010f\n\u000f\u0003\u000f',
    '\u0005\u000f\u0112\n\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0116',
    '\n\u000f\u0003\u000f\u0007\u000f\u0119\n\u000f\f\u000f\u000e\u000f\u011c',
    '\u000b\u000f\u0003\u000f\u0005\u000f\u011f\n\u000f\u0003\u000f\u0003',
    '\u000f\u0003\u000f\u0006\u000f\u0124\n\u000f\r\u000f\u000e\u000f\u0125',
    '\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010',
    '\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012',
    '\u0003\u0012\u0007\u0012\u0135\n\u0012\f\u0012\u000e\u0012\u0138\u000b',
    '\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u013e',
    '\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014',
    '\u0144\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0006\u0014\u0149',
    '\n\u0014\r\u0014\u000e\u0014\u014a\u0003\u0014\u0003\u0014\u0003\u0015',
    '\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0153\n\u0015\u0003',
    '\u0015\u0003\u0015\u0003\u0015\u0006\u0015\u0158\n\u0015\r\u0015\u000e',
    '\u0015\u0159\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016',
    '\u0160\n\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0005',
    '\u0017\u0166\n\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u016a\n\u0017',
    '\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018',
    '\u0171\n\u0018\u0003\u0018\u0005\u0018\u0174\n\u0018\u0003\u0018\u0003',
    '\u0018\u0005\u0018\u0178\n\u0018\u0003\u0018\u0007\u0018\u017b\n\u0018',
    '\f\u0018\u000e\u0018\u017e\u000b\u0018\u0003\u0018\u0005\u0018\u0181',
    '\n\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019',
    '\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019',
    '\u0003\u0019\u0005\u0019\u018f\n\u0019\u0003\u0019\u0003\u0019\u0005',
    '\u0019\u0193\n\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0197\n\u0019',
    '\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u019c\n\u0019\u0003',
    '\u0019\u0003\u0019\u0005\u0019\u01a0\n\u0019\u0003\u0019\u0003\u0019',
    '\u0003\u0019\u0005\u0019\u01a5\n\u0019\u0003\u0019\u0003\u0019\u0005',
    '\u0019\u01a9\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019',
    '\u01ae\n\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u01b2\n\u0019\u0003',
    '\u0019\u0007\u0019\u01b5\n\u0019\f\u0019\u000e\u0019\u01b8\u000b\u0019',
    '\u0003\u001a\u0003\u001a\u0005\u001a\u01bc\n\u001a\u0003\u001a\u0003',
    '\u001a\u0005\u001a\u01c0\n\u001a\u0003\u001a\u0003\u001a\u0003\u001b',
    '\u0003\u001b\u0005\u001b\u01c6\n\u001b\u0003\u001b\u0003\u001b\u0005',
    '\u001b\u01ca\n\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c',
    '\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c',
    '\u01d5\n\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003',
    '\u001e\u0002\u00030\u001f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012',
    '\u0014\u0016\u0018\u001a\u001c\u001e "$&(*,.02468:\u0002\t\u0003\u0002',
    '\u001d\u001e\u0003\u0002\u0011\u0012\u0003\u0002\u0013\u0014\u0003\u0002',
    "\u0015\u0016\u0003\u0002\u0017\u0018\u0003\u0002#'\u0005\u0002\u0004",
    '\u0006\b\b\f\r\u0002\u0227\u0002>\u0003\u0002\u0002\u0002\u0004O\u0003',
    '\u0002\u0002\u0002\u0006V\u0003\u0002\u0002\u0002\b]\u0003\u0002\u0002',
    '\u0002\nb\u0003\u0002\u0002\u0002\fg\u0003\u0002\u0002\u0002\u000ei',
    '\u0003\u0002\u0002\u0002\u0010v\u0003\u0002\u0002\u0002\u0012\u0083',
    '\u0003\u0002\u0002\u0002\u0014\u0094\u0003\u0002\u0002\u0002\u0016\u00a1',
    '\u0003\u0002\u0002\u0002\u0018\u00c2\u0003\u0002\u0002\u0002\u001a\u00e3',
    '\u0003\u0002\u0002\u0002\u001c\u0104\u0003\u0002\u0002\u0002\u001e\u0129',
    '\u0003\u0002\u0002\u0002 \u012d\u0003\u0002\u0002\u0002"\u0130\u0003',
    '\u0002\u0002\u0002$\u0139\u0003\u0002\u0002\u0002&\u013f\u0003\u0002',
    '\u0002\u0002(\u014e\u0003\u0002\u0002\u0002*\u015d\u0003\u0002\u0002',
    '\u0002,\u0163\u0003\u0002\u0002\u0002.\u016d\u0003\u0002\u0002\u0002',
    '0\u018e\u0003\u0002\u0002\u00022\u01b9\u0003\u0002\u0002\u00024\u01c3',
    '\u0003\u0002\u0002\u00026\u01d4\u0003\u0002\u0002\u00028\u01d6\u0003',
    '\u0002\u0002\u0002:\u01d8\u0003\u0002\u0002\u0002<?\u0005\u0004\u0003',
    '\u0002=?\u0007,\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002',
    '\u0002\u0002?@\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003',
    '\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0007\u0002\u0002\u0003',
    'C\u0003\u0003\u0002\u0002\u0002DP\u0005\u001c\u000f\u0002EP\u0005\b',
    '\u0005\u0002FP\u0005"\u0012\u0002GP\u0005"\u0012\u0002HP\u0005$\u0013',
    '\u0002IP\u0005(\u0015\u0002JP\u0005&\u0014\u0002KP\u00052\u001a\u0002',
    'LP\u00054\u001b\u0002MP\u0005*\u0016\u0002NP\u0005.\u0018\u0002OD\u0003',
    '\u0002\u0002\u0002OE\u0003\u0002\u0002\u0002OF\u0003\u0002\u0002\u0002',
    'OG\u0003\u0002\u0002\u0002OH\u0003\u0002\u0002\u0002OI\u0003\u0002\u0002',
    '\u0002OJ\u0003\u0002\u0002\u0002OK\u0003\u0002\u0002\u0002OL\u0003\u0002',
    '\u0002\u0002OM\u0003\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002PR\u0003',
    '\u0002\u0002\u0002QS\u0007,\u0002\u0002RQ\u0003\u0002\u0002\u0002RS',
    '\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0007\u0003\u0002',
    '\u0002U\u0005\u0003\u0002\u0002\u0002VW\u00058\u001d\u0002WX\u0007,',
    '\u0002\u0002XY\u0007*\u0002\u0002Y\u0007\u0003\u0002\u0002\u0002Z^\u0005',
    '\n\u0006\u0002[^\u0005\f\u0007\u0002\\^\u0005\u0014\u000b\u0002]Z\u0003',
    '\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]\\\u0003\u0002\u0002\u0002',
    '^\t\u0003\u0002\u0002\u0002_c\u0005\u000e\b\u0002`c\u0005\u0010\t\u0002',
    'ac\u0005\u0012\n\u0002b_\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002',
    '\u0002ba\u0003\u0002\u0002\u0002c\u000b\u0003\u0002\u0002\u0002dh\u0005',
    '\u0016\f\u0002eh\u0005\u0018\r\u0002fh\u0005\u001a\u000e\u0002gd\u0003',
    '\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002\u0002',
    'h\r\u0003\u0002\u0002\u0002ij\u0007\u0004\u0002\u0002jk\u0007,\u0002',
    '\u0002kt\u0007*\u0002\u0002ln\u0007,\u0002\u0002ml\u0003\u0002\u0002',
    '\u0002mn\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002oq\u0007#',
    '\u0002\u0002pr\u0007,\u0002\u0002qp\u0003\u0002\u0002\u0002qr\u0003',
    '\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002su\u00050\u0019\u0002tm',
    '\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\u000f\u0003\u0002',
    '\u0002\u0002vw\u0007\u0005\u0002\u0002wx\u0007,\u0002\u0002x\u0081\u0007',
    '*\u0002\u0002y{\u0007,\u0002\u0002zy\u0003\u0002\u0002\u0002z{\u0003',
    '\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|~\u0007#\u0002\u0002}\u007f',
    '\u0007,\u0002\u0002~}\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002',
    '\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0082\u00050\u0019',
    '\u0002\u0081z\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002',
    '\u0002\u0082\u0011\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u0006\u0002',
    '\u0002\u0084\u0085\u0007,\u0002\u0002\u0085\u0092\u0007*\u0002\u0002',
    '\u0086\u0088\u0007,\u0002\u0002\u0087\u0086\u0003\u0002\u0002\u0002',
    '\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002',
    '\u0089\u008b\u0007#\u0002\u0002\u008a\u008c\u0007,\u0002\u0002\u008b',
    '\u008a\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c',
    '\u0090\u0003\u0002\u0002\u0002\u008d\u0091\u0005:\u001e\u0002\u008e',
    '\u0091\u0007*\u0002\u0002\u008f\u0091\u0005 \u0011\u0002\u0090\u008d',
    '\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u008f',
    '\u0003\u0002\u0002\u0002\u0091\u0093\u0003\u0002\u0002\u0002\u0092\u0087',
    '\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0013',
    '\u0003\u0002\u0002\u0002\u0094\u0095\u0007\u0007\u0002\u0002\u0095\u0096',
    '\u0007,\u0002\u0002\u0096\u009f\u0007*\u0002\u0002\u0097\u0099\u0007',
    ',\u0002\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003',
    '\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009c\u0007',
    '#\u0002\u0002\u009b\u009d\u0007,\u0002\u0002\u009c\u009b\u0003\u0002',
    '\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002',
    '\u0002\u0002\u009e\u00a0\u00050\u0019\u0002\u009f\u0098\u0003\u0002',
    '\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u0015\u0003\u0002',
    '\u0002\u0002\u00a1\u00a2\u0007\b\u0002\u0002\u00a2\u00a3\u0007,\u0002',
    '\u0002\u00a3\u00a5\u0007*\u0002\u0002\u00a4\u00a6\u0007,\u0002\u0002',
    '\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002',
    '\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u00a9\u0007#\u0002\u0002',
    '\u00a8\u00aa\u0007,\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002',
    '\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002',
    '\u00ab\u00ad\u0007\t\u0002\u0002\u00ac\u00ae\u0007,\u0002\u0002\u00ad',
    '\u00ac\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae',
    '\u00af\u0003\u0002\u0002\u0002\u00af\u00ba\u0007\u001d\u0002\u0002\u00b0',
    '\u00b2\u0007,\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b1',
    '\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3',
    '\u00b5\u0007\n\u0002\u0002\u00b4\u00b6\u0007,\u0002\u0002\u00b5\u00b4',
    '\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b7',
    '\u0003\u0002\u0002\u0002\u00b7\u00b9\u0007\u001d\u0002\u0002\u00b8\u00b1',
    '\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002\u0002\u00ba\u00b8',
    '\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00be',
    '\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bd\u00bf',
    '\u0007,\u0002\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00be\u00bf',
    '\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u00c1',
    '\u0007\u000b\u0002\u0002\u00c1\u0017\u0003\u0002\u0002\u0002\u00c2\u00c3',
    '\u0007\f\u0002\u0002\u00c3\u00c4\u0007,\u0002\u0002\u00c4\u00c6\u0007',
    '*\u0002\u0002\u00c5\u00c7\u0007,\u0002\u0002\u00c6\u00c5\u0003\u0002',
    '\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002',
    '\u0002\u0002\u00c8\u00ca\u0007#\u0002\u0002\u00c9\u00cb\u0007,\u0002',
    '\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002',
    '\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00ce\u0007\t\u0002',
    '\u0002\u00cd\u00cf\u0007,\u0002\u0002\u00ce\u00cd\u0003\u0002\u0002',
    '\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002',
    '\u0002\u00d0\u00db\t\u0002\u0002\u0002\u00d1\u00d3\u0007,\u0002\u0002',
    '\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002',
    '\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d6\u0007\n\u0002\u0002',
    '\u00d5\u00d7\u0007,\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002\u0002',
    '\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002',
    '\u00d8\u00da\t\u0002\u0002\u0002\u00d9\u00d2\u0003\u0002\u0002\u0002',
    '\u00da\u00dd\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002',
    '\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00df\u0003\u0002\u0002\u0002',
    '\u00dd\u00db\u0003\u0002\u0002\u0002\u00de\u00e0\u0007,\u0002\u0002',
    '\u00df\u00de\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002',
    '\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007\u000b\u0002\u0002',
    '\u00e2\u0019\u0003\u0002\u0002\u0002\u00e3\u00e4\u0007\r\u0002\u0002',
    '\u00e4\u00e5\u0007,\u0002\u0002\u00e5\u00e7\u0007*\u0002\u0002\u00e6',
    '\u00e8\u0007,\u0002\u0002\u00e7\u00e6\u0003\u0002\u0002\u0002\u00e7',
    '\u00e8\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9',
    '\u00eb\u0007#\u0002\u0002\u00ea\u00ec\u0007,\u0002\u0002\u00eb\u00ea',
    '\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ed',
    '\u0003\u0002\u0002\u0002\u00ed\u00ef\u0007\t\u0002\u0002\u00ee\u00f0',
    '\u0007,\u0002\u0002\u00ef\u00ee\u0003\u0002\u0002\u0002\u00ef\u00f0',
    '\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00fc',
    '\u0005:\u001e\u0002\u00f2\u00f4\u0007,\u0002\u0002\u00f3\u00f2\u0003',
    '\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003',
    '\u0002\u0002\u0002\u00f5\u00f7\u0007\n\u0002\u0002\u00f6\u00f8\u0007',
    ',\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003',
    '\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fb\u0005',
    ':\u001e\u0002\u00fa\u00f3\u0003\u0002\u0002\u0002\u00fb\u00fe\u0003',
    '\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003',
    '\u0002\u0002\u0002\u00fd\u0100\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003',
    '\u0002\u0002\u0002\u00ff\u0101\u0007,\u0002\u0002\u0100\u00ff\u0003',
    '\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003',
    '\u0002\u0002\u0002\u0102\u0103\u0007\u000b\u0002\u0002\u0103\u001b\u0003',
    '\u0002\u0002\u0002\u0104\u0105\u00058\u001d\u0002\u0105\u0106\u0007',
    ',\u0002\u0002\u0106\u0107\u0007)\u0002\u0002\u0107\u0108\u0007,\u0002',
    '\u0002\u0108\u010a\u0007*\u0002\u0002\u0109\u010b\u0007,\u0002\u0002',
    '\u010a\u0109\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002',
    '\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010e\u0007\u000e\u0002\u0002',
    '\u010d\u010f\u0007,\u0002\u0002\u010e\u010d\u0003\u0002\u0002\u0002',
    '\u010e\u010f\u0003\u0002\u0002\u0002\u010f\u0111\u0003\u0002\u0002\u0002',
    '\u0110\u0112\u0005\u0006\u0004\u0002\u0111\u0110\u0003\u0002\u0002\u0002',
    '\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u011a\u0003\u0002\u0002\u0002',
    '\u0113\u0115\u0007\n\u0002\u0002\u0114\u0116\u0007,\u0002\u0002\u0115',
    '\u0114\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116',
    '\u0117\u0003\u0002\u0002\u0002\u0117\u0119\u0005\u0006\u0004\u0002\u0118',
    '\u0113\u0003\u0002\u0002\u0002\u0119\u011c\u0003\u0002\u0002\u0002\u011a',
    '\u0118\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b',
    '\u011e\u0003\u0002\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002\u011d',
    '\u011f\u0007,\u0002\u0002\u011e\u011d\u0003\u0002\u0002\u0002\u011e',
    '\u011f\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120',
    '\u0123\u0007\u000f\u0002\u0002\u0121\u0124\u0005\u0004\u0003\u0002\u0122',
    '\u0124\u0007,\u0002\u0002\u0123\u0121\u0003\u0002\u0002\u0002\u0123',
    '\u0122\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125',
    '\u0123\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126',
    '\u0127\u0003\u0002\u0002\u0002\u0127\u0128\u0007\u0010\u0002\u0002\u0128',
    '\u001d\u0003\u0002\u0002\u0002\u0129\u012a\u0007\t\u0002\u0002\u012a',
    '\u012b\u00056\u001c\u0002\u012b\u012c\u0007\u000b\u0002\u0002\u012c',
    '\u001f\u0003\u0002\u0002\u0002\u012d\u012e\u0007*\u0002\u0002\u012e',
    '\u012f\u0005\u001e\u0010\u0002\u012f!\u0003\u0002\u0002\u0002\u0130',
    '\u0131\t\u0003\u0002\u0002\u0131\u0136\u0007,\u0002\u0002\u0132\u0135',
    '\u00056\u001c\u0002\u0133\u0135\u0007,\u0002\u0002\u0134\u0132\u0003',
    '\u0002\u0002\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0135\u0138\u0003',
    '\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0136\u0137\u0003',
    '\u0002\u0002\u0002\u0137#\u0003\u0002\u0002\u0002\u0138\u0136\u0003',
    '\u0002\u0002\u0002\u0139\u013a\t\u0004\u0002\u0002\u013a\u013d\u0007',
    ',\u0002\u0002\u013b\u013e\u0007*\u0002\u0002\u013c\u013e\u0005 \u0011',
    '\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013d\u013c\u0003\u0002\u0002',
    '\u0002\u013e%\u0003\u0002\u0002\u0002\u013f\u0140\t\u0005\u0002\u0002',
    '\u0140\u0141\u0007,\u0002\u0002\u0141\u0143\u0005,\u0017\u0002\u0142',
    '\u0144\u0007,\u0002\u0002\u0143\u0142\u0003\u0002\u0002\u0002\u0143',
    '\u0144\u0003\u0002\u0002\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145',
    '\u0148\u0007\u000f\u0002\u0002\u0146\u0149\u0005\u0004\u0003\u0002\u0147',
    '\u0149\u0007,\u0002\u0002\u0148\u0146\u0003\u0002\u0002\u0002\u0148',
    '\u0147\u0003\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a',
    '\u0148\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b',
    '\u014c\u0003\u0002\u0002\u0002\u014c\u014d\u0007\u0010\u0002\u0002\u014d',
    "'\u0003\u0002\u0002\u0002\u014e\u014f\t\u0006\u0002\u0002\u014f\u0150",
    '\u0007,\u0002\u0002\u0150\u0152\u0005,\u0017\u0002\u0151\u0153\u0007',
    ',\u0002\u0002\u0152\u0151\u0003\u0002\u0002\u0002\u0152\u0153\u0003',
    '\u0002\u0002\u0002\u0153\u0154\u0003\u0002\u0002\u0002\u0154\u0157\u0007',
    '\u000f\u0002\u0002\u0155\u0158\u0005\u0004\u0003\u0002\u0156\u0158\u0007',
    ',\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0157\u0156\u0003',
    '\u0002\u0002\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159\u0157\u0003',
    '\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a\u015b\u0003',
    '\u0002\u0002\u0002\u015b\u015c\u0007\u0010\u0002\u0002\u015c)\u0003',
    '\u0002\u0002\u0002\u015d\u015f\u0007\u0019\u0002\u0002\u015e\u0160\u0007',
    ',\u0002\u0002\u015f\u015e\u0003\u0002\u0002\u0002\u015f\u0160\u0003',
    '\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0162\u0005',
    '6\u001c\u0002\u0162+\u0003\u0002\u0002\u0002\u0163\u0165\u00056\u001c',
    '\u0002\u0164\u0166\u0007,\u0002\u0002\u0165\u0164\u0003\u0002\u0002',
    '\u0002\u0165\u0166\u0003\u0002\u0002\u0002\u0166\u0167\u0003\u0002\u0002',
    '\u0002\u0167\u0169\t\u0007\u0002\u0002\u0168\u016a\u0007,\u0002\u0002',
    '\u0169\u0168\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002',
    '\u016a\u016b\u0003\u0002\u0002\u0002\u016b\u016c\u00056\u001c\u0002',
    '\u016c-\u0003\u0002\u0002\u0002\u016d\u016e\u0007*\u0002\u0002\u016e',
    "\u0170\u0007'\u0002\u0002\u016f\u0171\u00056\u001c\u0002\u0170\u016f",
    '\u0003\u0002\u0002\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171\u017c',
    '\u0003\u0002\u0002\u0002\u0172\u0174\u0007,\u0002\u0002\u0173\u0172',
    '\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174\u0175',
    '\u0003\u0002\u0002\u0002\u0175\u0177\u0007\n\u0002\u0002\u0176\u0178',
    '\u0007,\u0002\u0002\u0177\u0176\u0003\u0002\u0002\u0002\u0177\u0178',
    '\u0003\u0002\u0002\u0002\u0178\u0179\u0003\u0002\u0002\u0002\u0179\u017b',
    '\u00056\u001c\u0002\u017a\u0173\u0003\u0002\u0002\u0002\u017b\u017e',
    '\u0003\u0002\u0002\u0002\u017c\u017a\u0003\u0002\u0002\u0002\u017c\u017d',
    '\u0003\u0002\u0002\u0002\u017d\u0180\u0003\u0002\u0002\u0002\u017e\u017c',
    '\u0003\u0002\u0002\u0002\u017f\u0181\u0007,\u0002\u0002\u0180\u017f',
    '\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002\u0002\u0002\u0181\u0182',
    '\u0003\u0002\u0002\u0002\u0182\u0183\u0007&\u0002\u0002\u0183/\u0003',
    '\u0002\u0002\u0002\u0184\u0185\b\u0019\u0001\u0002\u0185\u0186\u0007',
    '\u001a\u0002\u0002\u0186\u0187\u00050\u0019\u0002\u0187\u0188\u0007',
    '\u001b\u0002\u0002\u0188\u018f\u0003\u0002\u0002\u0002\u0189\u018f\u0005',
    '.\u0018\u0002\u018a\u018f\u0007*\u0002\u0002\u018b\u018f\u0005 \u0011',
    '\u0002\u018c\u018f\u0007\u001d\u0002\u0002\u018d\u018f\u0007\u001e\u0002',
    '\u0002\u018e\u0184\u0003\u0002\u0002\u0002\u018e\u0189\u0003\u0002\u0002',
    '\u0002\u018e\u018a\u0003\u0002\u0002\u0002\u018e\u018b\u0003\u0002\u0002',
    '\u0002\u018e\u018c\u0003\u0002\u0002\u0002\u018e\u018d\u0003\u0002\u0002',
    '\u0002\u018f\u01b6\u0003\u0002\u0002\u0002\u0190\u0192\f\u000b\u0002',
    '\u0002\u0191\u0193\u0007,\u0002\u0002\u0192\u0191\u0003\u0002\u0002',
    '\u0002\u0192\u0193\u0003\u0002\u0002\u0002\u0193\u0194\u0003\u0002\u0002',
    '\u0002\u0194\u0196\u0007\u001f\u0002\u0002\u0195\u0197\u0007,\u0002',
    '\u0002\u0196\u0195\u0003\u0002\u0002\u0002\u0196\u0197\u0003\u0002\u0002',
    '\u0002\u0197\u0198\u0003\u0002\u0002\u0002\u0198\u01b5\u00050\u0019',
    '\f\u0199\u019b\f\n\u0002\u0002\u019a\u019c\u0007,\u0002\u0002\u019b',
    '\u019a\u0003\u0002\u0002\u0002\u019b\u019c\u0003\u0002\u0002\u0002\u019c',
    '\u019d\u0003\u0002\u0002\u0002\u019d\u019f\u0007 \u0002\u0002\u019e',
    '\u01a0\u0007,\u0002\u0002\u019f\u019e\u0003\u0002\u0002\u0002\u019f',
    '\u01a0\u0003\u0002\u0002\u0002\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1',
    '\u01b5\u00050\u0019\u000b\u01a2\u01a4\f\t\u0002\u0002\u01a3\u01a5\u0007',
    ',\u0002\u0002\u01a4\u01a3\u0003\u0002\u0002\u0002\u01a4\u01a5\u0003',
    '\u0002\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6\u01a8\u0007',
    '!\u0002\u0002\u01a7\u01a9\u0007,\u0002\u0002\u01a8\u01a7\u0003\u0002',
    '\u0002\u0002\u01a8\u01a9\u0003\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002',
    '\u0002\u0002\u01aa\u01b5\u00050\u0019\n\u01ab\u01ad\f\b\u0002\u0002',
    '\u01ac\u01ae\u0007,\u0002\u0002\u01ad\u01ac\u0003\u0002\u0002\u0002',
    '\u01ad\u01ae\u0003\u0002\u0002\u0002\u01ae\u01af\u0003\u0002\u0002\u0002',
    '\u01af\u01b1\u0007"\u0002\u0002\u01b0\u01b2\u0007,\u0002\u0002\u01b1',
    '\u01b0\u0003\u0002\u0002\u0002\u01b1\u01b2\u0003\u0002\u0002\u0002\u01b2',
    '\u01b3\u0003\u0002\u0002\u0002\u01b3\u01b5\u00050\u0019\t\u01b4\u0190',
    '\u0003\u0002\u0002\u0002\u01b4\u0199\u0003\u0002\u0002\u0002\u01b4\u01a2',
    '\u0003\u0002\u0002\u0002\u01b4\u01ab\u0003\u0002\u0002\u0002\u01b5\u01b8',
    '\u0003\u0002\u0002\u0002\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b6\u01b7',
    '\u0003\u0002\u0002\u0002\u01b71\u0003\u0002\u0002\u0002\u01b8\u01b6',
    '\u0003\u0002\u0002\u0002\u01b9\u01bb\u0007*\u0002\u0002\u01ba\u01bc',
    '\u0007,\u0002\u0002\u01bb\u01ba\u0003\u0002\u0002\u0002\u01bb\u01bc',
    '\u0003\u0002\u0002\u0002\u01bc\u01bd\u0003\u0002\u0002\u0002\u01bd\u01bf',
    '\u0007#\u0002\u0002\u01be\u01c0\u0007,\u0002\u0002\u01bf\u01be\u0003',
    '\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002\u01c0\u01c1\u0003',
    '\u0002\u0002\u0002\u01c1\u01c2\u00056\u001c\u0002\u01c23\u0003\u0002',
    '\u0002\u0002\u01c3\u01c5\u0005 \u0011\u0002\u01c4\u01c6\u0007,\u0002',
    '\u0002\u01c5\u01c4\u0003\u0002\u0002\u0002\u01c5\u01c6\u0003\u0002\u0002',
    '\u0002\u01c6\u01c7\u0003\u0002\u0002\u0002\u01c7\u01c9\u0007#\u0002',
    '\u0002\u01c8\u01ca\u0007,\u0002\u0002\u01c9\u01c8\u0003\u0002\u0002',
    '\u0002\u01c9\u01ca\u0003\u0002\u0002\u0002\u01ca\u01cb\u0003\u0002\u0002',
    '\u0002\u01cb\u01cc\u00056\u001c\u0002\u01cc5\u0003\u0002\u0002\u0002',
    '\u01cd\u01d5\u0005.\u0018\u0002\u01ce\u01d5\u0007*\u0002\u0002\u01cf',
    '\u01d5\u0007\u001d\u0002\u0002\u01d0\u01d5\u0007\u001e\u0002\u0002\u01d1',
    '\u01d5\u0005:\u001e\u0002\u01d2\u01d5\u0005 \u0011\u0002\u01d3\u01d5',
    '\u00050\u0019\u0002\u01d4\u01cd\u0003\u0002\u0002\u0002\u01d4\u01ce',
    '\u0003\u0002\u0002\u0002\u01d4\u01cf\u0003\u0002\u0002\u0002\u01d4\u01d0',
    '\u0003\u0002\u0002\u0002\u01d4\u01d1\u0003\u0002\u0002\u0002\u01d4\u01d2',
    '\u0003\u0002\u0002\u0002\u01d4\u01d3\u0003\u0002\u0002\u0002\u01d57',
    '\u0003\u0002\u0002\u0002\u01d6\u01d7\t\b\u0002\u0002\u01d79\u0003\u0002',
    '\u0002\u0002\u01d8\u01d9\u0007+\u0002\u0002\u01d9;\u0003\u0002\u0002',
    '\u0002T>@OR]bgmqtz~\u0081\u0087\u008b\u0090\u0092\u0098\u009c\u009f',
    '\u00a5\u00a9\u00ad\u00b1\u00b5\u00ba\u00be\u00c6\u00ca\u00ce\u00d2\u00d6',
    '\u00db\u00df\u00e7\u00eb\u00ef\u00f3\u00f7\u00fc\u0100\u010a\u010e\u0111',
    '\u0115\u011a\u011e\u0123\u0125\u0134\u0136\u013d\u0143\u0148\u014a\u0152',
    '\u0157\u0159\u015f\u0165\u0169\u0170\u0173\u0177\u017c\u0180\u018e\u0192',
    '\u0196\u019b\u019f\u01a4\u01a8\u01ad\u01b1\u01b4\u01b6\u01bb\u01bf\u01c5',
    '\u01c9\u01d4',
].join('');

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [
    null,
    "';'",
    "'int'",
    "'real'",
    "'string'",
    "'val'",
    "'int[]'",
    "'['",
    "','",
    "']'",
    "'real[]'",
    "'string[]'",
    "':'",
    "'{'",
    "'}'",
    "'print'",
    "'PRINT'",
    "'read'",
    "'READ'",
    "'while'",
    "'WHILE'",
    "'if'",
    "'IF'",
    "'#'",
    "'('",
    "')'",
    null,
    null,
    null,
    "'*'",
    "'/'",
    "'+'",
    "'-'",
    "'='",
    "'<='",
    "'>='",
    "'>'",
    "'<'",
];

var symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    'COMMENT',
    'INTEGER_NUMBER',
    'REAL_NUMBER',
    'ASTERISK',
    'SLASH',
    'PLUS',
    'MINUS',
    'EQUAL',
    'LESS_OR_EQUAL',
    'GREATER_OR_EQUAL',
    'GREATER_THAN',
    'LESS_THAN',
    'TYPE',
    'OPERATION_STRING',
    'VARIABLE_NAME',
    'TEXT',
    'W',
];

var ruleNames = [
    'program',
    'instruction',
    'parameter',
    'definition',
    'single_element_definition',
    'array_definition',
    'int_definition',
    'real_definition',
    'string_definition',
    'dynamic_definition',
    'int_array_definition',
    'real_array_definition',
    'string_array_definition',
    'new_operation',
    'element_number',
    'element_of_array',
    'print_instruction',
    'read_instruction',
    'while_instruction',
    'if_instruction',
    'return_instruction',
    'condition',
    'call_operation',
    'arithmetic_expression',
    'assignment',
    'array_element_assignment',
    'value',
    'type',
    'string',
];

function FiszczLangParser(input) {
    antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FiszczLangParser.prototype = Object.create(antlr4.Parser.prototype);
FiszczLangParser.prototype.constructor = FiszczLangParser;

Object.defineProperty(FiszczLangParser.prototype, 'atn', {
    get: function () {
        return atn;
    },
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
FiszczLangParser.T__22 = 23;
FiszczLangParser.T__23 = 24;
FiszczLangParser.T__24 = 25;
FiszczLangParser.COMMENT = 26;
FiszczLangParser.INTEGER_NUMBER = 27;
FiszczLangParser.REAL_NUMBER = 28;
FiszczLangParser.ASTERISK = 29;
FiszczLangParser.SLASH = 30;
FiszczLangParser.PLUS = 31;
FiszczLangParser.MINUS = 32;
FiszczLangParser.EQUAL = 33;
FiszczLangParser.LESS_OR_EQUAL = 34;
FiszczLangParser.GREATER_OR_EQUAL = 35;
FiszczLangParser.GREATER_THAN = 36;
FiszczLangParser.LESS_THAN = 37;
FiszczLangParser.TYPE = 38;
FiszczLangParser.OPERATION_STRING = 39;
FiszczLangParser.VARIABLE_NAME = 40;
FiszczLangParser.TEXT = 41;
FiszczLangParser.W = 42;

FiszczLangParser.RULE_program = 0;
FiszczLangParser.RULE_instruction = 1;
FiszczLangParser.RULE_parameter = 2;
FiszczLangParser.RULE_definition = 3;
FiszczLangParser.RULE_single_element_definition = 4;
FiszczLangParser.RULE_array_definition = 5;
FiszczLangParser.RULE_int_definition = 6;
FiszczLangParser.RULE_real_definition = 7;
FiszczLangParser.RULE_string_definition = 8;
FiszczLangParser.RULE_dynamic_definition = 9;
FiszczLangParser.RULE_int_array_definition = 10;
FiszczLangParser.RULE_real_array_definition = 11;
FiszczLangParser.RULE_string_array_definition = 12;
FiszczLangParser.RULE_new_operation = 13;
FiszczLangParser.RULE_element_number = 14;
FiszczLangParser.RULE_element_of_array = 15;
FiszczLangParser.RULE_print_instruction = 16;
FiszczLangParser.RULE_read_instruction = 17;
FiszczLangParser.RULE_while_instruction = 18;
FiszczLangParser.RULE_if_instruction = 19;
FiszczLangParser.RULE_return_instruction = 20;
FiszczLangParser.RULE_condition = 21;
FiszczLangParser.RULE_call_operation = 22;
FiszczLangParser.RULE_arithmetic_expression = 23;
FiszczLangParser.RULE_assignment = 24;
FiszczLangParser.RULE_array_element_assignment = 25;
FiszczLangParser.RULE_value = 26;
FiszczLangParser.RULE_type = 27;
FiszczLangParser.RULE_string = 28;

function ProgramContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function () {
    return this.getToken(FiszczLangParser.EOF, 0);
};

ProgramContext.prototype.instruction = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(InstructionContext);
    } else {
        return this.getTypedRuleContext(InstructionContext, i);
    }
};

ProgramContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

ProgramContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterProgram(this);
    }
};

ProgramContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitProgram(this);
    }
};

ProgramContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.ProgramContext = ProgramContext;

FiszczLangParser.prototype.program = function () {
    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FiszczLangParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 60;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FiszczLangParser.T__1:
                case FiszczLangParser.T__2:
                case FiszczLangParser.T__3:
                case FiszczLangParser.T__4:
                case FiszczLangParser.T__5:
                case FiszczLangParser.T__9:
                case FiszczLangParser.T__10:
                case FiszczLangParser.T__14:
                case FiszczLangParser.T__15:
                case FiszczLangParser.T__16:
                case FiszczLangParser.T__17:
                case FiszczLangParser.T__18:
                case FiszczLangParser.T__19:
                case FiszczLangParser.T__20:
                case FiszczLangParser.T__21:
                case FiszczLangParser.T__22:
                case FiszczLangParser.VARIABLE_NAME:
                    this.state = 58;
                    this.instruction();
                    break;
                case FiszczLangParser.W:
                    this.state = 59;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 62;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            ((_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__5) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__10) |
                        (1 << FiszczLangParser.T__14) |
                        (1 << FiszczLangParser.T__15) |
                        (1 << FiszczLangParser.T__16) |
                        (1 << FiszczLangParser.T__17) |
                        (1 << FiszczLangParser.T__18) |
                        (1 << FiszczLangParser.T__19) |
                        (1 << FiszczLangParser.T__20) |
                        (1 << FiszczLangParser.T__21) |
                        (1 << FiszczLangParser.T__22))) !==
                    0) ||
            _la === FiszczLangParser.VARIABLE_NAME ||
            _la === FiszczLangParser.W
        );
        this.state = 64;
        this.match(FiszczLangParser.EOF);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_instruction;
    return this;
}

InstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstructionContext.prototype.constructor = InstructionContext;

InstructionContext.prototype.new_operation = function () {
    return this.getTypedRuleContext(New_operationContext, 0);
};

InstructionContext.prototype.definition = function () {
    return this.getTypedRuleContext(DefinitionContext, 0);
};

InstructionContext.prototype.print_instruction = function () {
    return this.getTypedRuleContext(Print_instructionContext, 0);
};

InstructionContext.prototype.read_instruction = function () {
    return this.getTypedRuleContext(Read_instructionContext, 0);
};

InstructionContext.prototype.if_instruction = function () {
    return this.getTypedRuleContext(If_instructionContext, 0);
};

InstructionContext.prototype.while_instruction = function () {
    return this.getTypedRuleContext(While_instructionContext, 0);
};

InstructionContext.prototype.assignment = function () {
    return this.getTypedRuleContext(AssignmentContext, 0);
};

InstructionContext.prototype.array_element_assignment = function () {
    return this.getTypedRuleContext(Array_element_assignmentContext, 0);
};

InstructionContext.prototype.return_instruction = function () {
    return this.getTypedRuleContext(Return_instructionContext, 0);
};

InstructionContext.prototype.call_operation = function () {
    return this.getTypedRuleContext(Call_operationContext, 0);
};

InstructionContext.prototype.W = function () {
    return this.getToken(FiszczLangParser.W, 0);
};

InstructionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterInstruction(this);
    }
};

InstructionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitInstruction(this);
    }
};

InstructionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitInstruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.InstructionContext = InstructionContext;

FiszczLangParser.prototype.instruction = function () {
    var localctx = new InstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FiszczLangParser.RULE_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
        switch (la_) {
            case 1:
                this.state = 66;
                this.new_operation();
                break;

            case 2:
                this.state = 67;
                this.definition();
                break;

            case 3:
                this.state = 68;
                this.print_instruction();
                break;

            case 4:
                this.state = 69;
                this.print_instruction();
                break;

            case 5:
                this.state = 70;
                this.read_instruction();
                break;

            case 6:
                this.state = 71;
                this.if_instruction();
                break;

            case 7:
                this.state = 72;
                this.while_instruction();
                break;

            case 8:
                this.state = 73;
                this.assignment();
                break;

            case 9:
                this.state = 74;
                this.array_element_assignment();
                break;

            case 10:
                this.state = 75;
                this.return_instruction();
                break;

            case 11:
                this.state = 76;
                this.call_operation();
                break;
        }
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 79;
            this.match(FiszczLangParser.W);
        }

        this.state = 82;
        this.match(FiszczLangParser.T__0);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

function ParameterContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.type = function () {
    return this.getTypedRuleContext(TypeContext, 0);
};

ParameterContext.prototype.W = function () {
    return this.getToken(FiszczLangParser.W, 0);
};

ParameterContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

ParameterContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterParameter(this);
    }
};

ParameterContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitParameter(this);
    }
};

ParameterContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitParameter(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.ParameterContext = ParameterContext;

FiszczLangParser.prototype.parameter = function () {
    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FiszczLangParser.RULE_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.type();
        this.state = 85;
        this.match(FiszczLangParser.W);
        this.state = 86;
        this.match(FiszczLangParser.VARIABLE_NAME);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_definition;
    return this;
}

DefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefinitionContext.prototype.constructor = DefinitionContext;

DefinitionContext.prototype.single_element_definition = function () {
    return this.getTypedRuleContext(Single_element_definitionContext, 0);
};

DefinitionContext.prototype.array_definition = function () {
    return this.getTypedRuleContext(Array_definitionContext, 0);
};

DefinitionContext.prototype.dynamic_definition = function () {
    return this.getTypedRuleContext(Dynamic_definitionContext, 0);
};

DefinitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterDefinition(this);
    }
};

DefinitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitDefinition(this);
    }
};

DefinitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.DefinitionContext = DefinitionContext;

FiszczLangParser.prototype.definition = function () {
    var localctx = new DefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FiszczLangParser.RULE_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FiszczLangParser.T__1:
            case FiszczLangParser.T__2:
            case FiszczLangParser.T__3:
                this.state = 88;
                this.single_element_definition();
                break;
            case FiszczLangParser.T__5:
            case FiszczLangParser.T__9:
            case FiszczLangParser.T__10:
                this.state = 89;
                this.array_definition();
                break;
            case FiszczLangParser.T__4:
                this.state = 90;
                this.dynamic_definition();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_single_element_definition;
    return this;
}

Single_element_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Single_element_definitionContext.prototype.constructor = Single_element_definitionContext;

Single_element_definitionContext.prototype.int_definition = function () {
    return this.getTypedRuleContext(Int_definitionContext, 0);
};

Single_element_definitionContext.prototype.real_definition = function () {
    return this.getTypedRuleContext(Real_definitionContext, 0);
};

Single_element_definitionContext.prototype.string_definition = function () {
    return this.getTypedRuleContext(String_definitionContext, 0);
};

Single_element_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterSingle_element_definition(this);
    }
};

Single_element_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitSingle_element_definition(this);
    }
};

Single_element_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitSingle_element_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Single_element_definitionContext = Single_element_definitionContext;

FiszczLangParser.prototype.single_element_definition = function () {
    var localctx = new Single_element_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FiszczLangParser.RULE_single_element_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FiszczLangParser.T__1:
                this.state = 93;
                this.int_definition();
                break;
            case FiszczLangParser.T__2:
                this.state = 94;
                this.real_definition();
                break;
            case FiszczLangParser.T__3:
                this.state = 95;
                this.string_definition();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_array_definition;
    return this;
}

Array_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_definitionContext.prototype.constructor = Array_definitionContext;

Array_definitionContext.prototype.int_array_definition = function () {
    return this.getTypedRuleContext(Int_array_definitionContext, 0);
};

Array_definitionContext.prototype.real_array_definition = function () {
    return this.getTypedRuleContext(Real_array_definitionContext, 0);
};

Array_definitionContext.prototype.string_array_definition = function () {
    return this.getTypedRuleContext(String_array_definitionContext, 0);
};

Array_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterArray_definition(this);
    }
};

Array_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitArray_definition(this);
    }
};

Array_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitArray_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Array_definitionContext = Array_definitionContext;

FiszczLangParser.prototype.array_definition = function () {
    var localctx = new Array_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FiszczLangParser.RULE_array_definition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FiszczLangParser.T__5:
                this.state = 98;
                this.int_array_definition();
                break;
            case FiszczLangParser.T__9:
                this.state = 99;
                this.real_array_definition();
                break;
            case FiszczLangParser.T__10:
                this.state = 100;
                this.string_array_definition();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_int_definition;
    return this;
}

Int_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Int_definitionContext.prototype.constructor = Int_definitionContext;

Int_definitionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Int_definitionContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Int_definitionContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

Int_definitionContext.prototype.arithmetic_expression = function () {
    return this.getTypedRuleContext(Arithmetic_expressionContext, 0);
};

Int_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterInt_definition(this);
    }
};

Int_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitInt_definition(this);
    }
};

Int_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitInt_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Int_definitionContext = Int_definitionContext;

FiszczLangParser.prototype.int_definition = function () {
    var localctx = new Int_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FiszczLangParser.RULE_int_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(FiszczLangParser.T__1);
        this.state = 104;
        this.match(FiszczLangParser.W);
        this.state = 105;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 114;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
        if (la_ === 1) {
            this.state = 107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 106;
                this.match(FiszczLangParser.W);
            }

            this.state = 109;
            this.match(FiszczLangParser.EQUAL);
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 110;
                this.match(FiszczLangParser.W);
            }

            this.state = 113;
            this.arithmetic_expression(0);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_real_definition;
    return this;
}

Real_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Real_definitionContext.prototype.constructor = Real_definitionContext;

Real_definitionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Real_definitionContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Real_definitionContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

Real_definitionContext.prototype.arithmetic_expression = function () {
    return this.getTypedRuleContext(Arithmetic_expressionContext, 0);
};

Real_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterReal_definition(this);
    }
};

Real_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitReal_definition(this);
    }
};

Real_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitReal_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Real_definitionContext = Real_definitionContext;

FiszczLangParser.prototype.real_definition = function () {
    var localctx = new Real_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FiszczLangParser.RULE_real_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(FiszczLangParser.T__2);
        this.state = 117;
        this.match(FiszczLangParser.W);
        this.state = 118;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 127;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 12, this._ctx);
        if (la_ === 1) {
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 119;
                this.match(FiszczLangParser.W);
            }

            this.state = 122;
            this.match(FiszczLangParser.EQUAL);
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 123;
                this.match(FiszczLangParser.W);
            }

            this.state = 126;
            this.arithmetic_expression(0);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_string_definition;
    return this;
}

String_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
String_definitionContext.prototype.constructor = String_definitionContext;

String_definitionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

String_definitionContext.prototype.VARIABLE_NAME = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.VARIABLE_NAME);
    } else {
        return this.getToken(FiszczLangParser.VARIABLE_NAME, i);
    }
};

String_definitionContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

String_definitionContext.prototype.string = function () {
    return this.getTypedRuleContext(StringContext, 0);
};

String_definitionContext.prototype.element_of_array = function () {
    return this.getTypedRuleContext(Element_of_arrayContext, 0);
};

String_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterString_definition(this);
    }
};

String_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitString_definition(this);
    }
};

String_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitString_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.String_definitionContext = String_definitionContext;

FiszczLangParser.prototype.string_definition = function () {
    var localctx = new String_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FiszczLangParser.RULE_string_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(FiszczLangParser.T__3);
        this.state = 130;
        this.match(FiszczLangParser.W);
        this.state = 131;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 144;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 16, this._ctx);
        if (la_ === 1) {
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 132;
                this.match(FiszczLangParser.W);
            }

            this.state = 135;
            this.match(FiszczLangParser.EQUAL);
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 136;
                this.match(FiszczLangParser.W);
            }

            this.state = 142;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 15, this._ctx);
            switch (la_) {
                case 1:
                    this.state = 139;
                    this.string();
                    break;

                case 2:
                    this.state = 140;
                    this.match(FiszczLangParser.VARIABLE_NAME);
                    break;

                case 3:
                    this.state = 141;
                    this.element_of_array();
                    break;
            }
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

function Dynamic_definitionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_dynamic_definition;
    return this;
}

Dynamic_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Dynamic_definitionContext.prototype.constructor = Dynamic_definitionContext;

Dynamic_definitionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Dynamic_definitionContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Dynamic_definitionContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

Dynamic_definitionContext.prototype.arithmetic_expression = function () {
    return this.getTypedRuleContext(Arithmetic_expressionContext, 0);
};

Dynamic_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterDynamic_definition(this);
    }
};

Dynamic_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitDynamic_definition(this);
    }
};

Dynamic_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitDynamic_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Dynamic_definitionContext = Dynamic_definitionContext;

FiszczLangParser.prototype.dynamic_definition = function () {
    var localctx = new Dynamic_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FiszczLangParser.RULE_dynamic_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(FiszczLangParser.T__4);
        this.state = 147;
        this.match(FiszczLangParser.W);
        this.state = 148;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 157;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
        if (la_ === 1) {
            this.state = 150;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 149;
                this.match(FiszczLangParser.W);
            }

            this.state = 152;
            this.match(FiszczLangParser.EQUAL);
            this.state = 154;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 153;
                this.match(FiszczLangParser.W);
            }

            this.state = 156;
            this.arithmetic_expression(0);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_int_array_definition;
    return this;
}

Int_array_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Int_array_definitionContext.prototype.constructor = Int_array_definitionContext;

Int_array_definitionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Int_array_definitionContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Int_array_definitionContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

Int_array_definitionContext.prototype.INTEGER_NUMBER = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.INTEGER_NUMBER);
    } else {
        return this.getToken(FiszczLangParser.INTEGER_NUMBER, i);
    }
};

Int_array_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterInt_array_definition(this);
    }
};

Int_array_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitInt_array_definition(this);
    }
};

Int_array_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitInt_array_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Int_array_definitionContext = Int_array_definitionContext;

FiszczLangParser.prototype.int_array_definition = function () {
    var localctx = new Int_array_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FiszczLangParser.RULE_int_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(FiszczLangParser.T__5);
        this.state = 160;
        this.match(FiszczLangParser.W);
        this.state = 161;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 163;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 162;
            this.match(FiszczLangParser.W);
        }

        this.state = 165;
        this.match(FiszczLangParser.EQUAL);
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 166;
            this.match(FiszczLangParser.W);
        }

        this.state = 169;
        this.match(FiszczLangParser.T__6);
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 170;
            this.match(FiszczLangParser.W);
        }

        this.state = 173;
        this.match(FiszczLangParser.INTEGER_NUMBER);
        this.state = 184;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 175;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 174;
                    this.match(FiszczLangParser.W);
                }

                this.state = 177;
                this.match(FiszczLangParser.T__7);
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 178;
                    this.match(FiszczLangParser.W);
                }

                this.state = 181;
                this.match(FiszczLangParser.INTEGER_NUMBER);
            }
            this.state = 186;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
        }

        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 187;
            this.match(FiszczLangParser.W);
        }

        this.state = 190;
        this.match(FiszczLangParser.T__8);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_real_array_definition;
    return this;
}

Real_array_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Real_array_definitionContext.prototype.constructor = Real_array_definitionContext;

Real_array_definitionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Real_array_definitionContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Real_array_definitionContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

Real_array_definitionContext.prototype.INTEGER_NUMBER = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.INTEGER_NUMBER);
    } else {
        return this.getToken(FiszczLangParser.INTEGER_NUMBER, i);
    }
};

Real_array_definitionContext.prototype.REAL_NUMBER = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.REAL_NUMBER);
    } else {
        return this.getToken(FiszczLangParser.REAL_NUMBER, i);
    }
};

Real_array_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterReal_array_definition(this);
    }
};

Real_array_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitReal_array_definition(this);
    }
};

Real_array_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitReal_array_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Real_array_definitionContext = Real_array_definitionContext;

FiszczLangParser.prototype.real_array_definition = function () {
    var localctx = new Real_array_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FiszczLangParser.RULE_real_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(FiszczLangParser.T__9);
        this.state = 193;
        this.match(FiszczLangParser.W);
        this.state = 194;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 195;
            this.match(FiszczLangParser.W);
        }

        this.state = 198;
        this.match(FiszczLangParser.EQUAL);
        this.state = 200;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 199;
            this.match(FiszczLangParser.W);
        }

        this.state = 202;
        this.match(FiszczLangParser.T__6);
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 203;
            this.match(FiszczLangParser.W);
        }

        this.state = 206;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.INTEGER_NUMBER || _la === FiszczLangParser.REAL_NUMBER)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 217;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 207;
                    this.match(FiszczLangParser.W);
                }

                this.state = 210;
                this.match(FiszczLangParser.T__7);
                this.state = 212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 211;
                    this.match(FiszczLangParser.W);
                }

                this.state = 214;
                _la = this._input.LA(1);
                if (!(_la === FiszczLangParser.INTEGER_NUMBER || _la === FiszczLangParser.REAL_NUMBER)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
            this.state = 219;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
        }

        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 220;
            this.match(FiszczLangParser.W);
        }

        this.state = 223;
        this.match(FiszczLangParser.T__8);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_string_array_definition;
    return this;
}

String_array_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
String_array_definitionContext.prototype.constructor = String_array_definitionContext;

String_array_definitionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

String_array_definitionContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

String_array_definitionContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

String_array_definitionContext.prototype.string = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(StringContext);
    } else {
        return this.getTypedRuleContext(StringContext, i);
    }
};

String_array_definitionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterString_array_definition(this);
    }
};

String_array_definitionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitString_array_definition(this);
    }
};

String_array_definitionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitString_array_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.String_array_definitionContext = String_array_definitionContext;

FiszczLangParser.prototype.string_array_definition = function () {
    var localctx = new String_array_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FiszczLangParser.RULE_string_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(FiszczLangParser.T__10);
        this.state = 226;
        this.match(FiszczLangParser.W);
        this.state = 227;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 228;
            this.match(FiszczLangParser.W);
        }

        this.state = 231;
        this.match(FiszczLangParser.EQUAL);
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 232;
            this.match(FiszczLangParser.W);
        }

        this.state = 235;
        this.match(FiszczLangParser.T__6);
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 236;
            this.match(FiszczLangParser.W);
        }

        this.state = 239;
        this.string();
        this.state = 250;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 241;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 240;
                    this.match(FiszczLangParser.W);
                }

                this.state = 243;
                this.match(FiszczLangParser.T__7);
                this.state = 245;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 244;
                    this.match(FiszczLangParser.W);
                }

                this.state = 247;
                this.string();
            }
            this.state = 252;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
        }

        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 253;
            this.match(FiszczLangParser.W);
        }

        this.state = 256;
        this.match(FiszczLangParser.T__8);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

function New_operationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_new_operation;
    return this;
}

New_operationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
New_operationContext.prototype.constructor = New_operationContext;

New_operationContext.prototype.type = function () {
    return this.getTypedRuleContext(TypeContext, 0);
};

New_operationContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

New_operationContext.prototype.OPERATION_STRING = function () {
    return this.getToken(FiszczLangParser.OPERATION_STRING, 0);
};

New_operationContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

New_operationContext.prototype.parameter = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext, i);
    }
};

New_operationContext.prototype.instruction = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(InstructionContext);
    } else {
        return this.getTypedRuleContext(InstructionContext, i);
    }
};

New_operationContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterNew_operation(this);
    }
};

New_operationContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitNew_operation(this);
    }
};

New_operationContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitNew_operation(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.New_operationContext = New_operationContext;

FiszczLangParser.prototype.new_operation = function () {
    var localctx = new New_operationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FiszczLangParser.RULE_new_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.type();
        this.state = 259;
        this.match(FiszczLangParser.W);
        this.state = 260;
        this.match(FiszczLangParser.OPERATION_STRING);
        this.state = 261;
        this.match(FiszczLangParser.W);
        this.state = 262;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 264;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 263;
            this.match(FiszczLangParser.W);
        }

        this.state = 266;
        this.match(FiszczLangParser.T__11);

        this.state = 268;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 42, this._ctx);
        if (la_ === 1) {
            this.state = 267;
            this.match(FiszczLangParser.W);
        }
        this.state = 271;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
            (_la & ~0x1f) == 0 &&
            ((1 << _la) &
                ((1 << FiszczLangParser.T__1) |
                    (1 << FiszczLangParser.T__2) |
                    (1 << FiszczLangParser.T__3) |
                    (1 << FiszczLangParser.T__5) |
                    (1 << FiszczLangParser.T__9) |
                    (1 << FiszczLangParser.T__10))) !==
                0
        ) {
            this.state = 270;
            this.parameter();
        }

        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === FiszczLangParser.T__7) {
            this.state = 273;
            this.match(FiszczLangParser.T__7);
            this.state = 275;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 274;
                this.match(FiszczLangParser.W);
            }

            this.state = 277;
            this.parameter();
            this.state = 282;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 283;
            this.match(FiszczLangParser.W);
        }

        this.state = 286;
        this.match(FiszczLangParser.T__12);
        this.state = 289;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 289;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FiszczLangParser.T__1:
                case FiszczLangParser.T__2:
                case FiszczLangParser.T__3:
                case FiszczLangParser.T__4:
                case FiszczLangParser.T__5:
                case FiszczLangParser.T__9:
                case FiszczLangParser.T__10:
                case FiszczLangParser.T__14:
                case FiszczLangParser.T__15:
                case FiszczLangParser.T__16:
                case FiszczLangParser.T__17:
                case FiszczLangParser.T__18:
                case FiszczLangParser.T__19:
                case FiszczLangParser.T__20:
                case FiszczLangParser.T__21:
                case FiszczLangParser.T__22:
                case FiszczLangParser.VARIABLE_NAME:
                    this.state = 287;
                    this.instruction();
                    break;
                case FiszczLangParser.W:
                    this.state = 288;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 291;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            ((_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__5) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__10) |
                        (1 << FiszczLangParser.T__14) |
                        (1 << FiszczLangParser.T__15) |
                        (1 << FiszczLangParser.T__16) |
                        (1 << FiszczLangParser.T__17) |
                        (1 << FiszczLangParser.T__18) |
                        (1 << FiszczLangParser.T__19) |
                        (1 << FiszczLangParser.T__20) |
                        (1 << FiszczLangParser.T__21) |
                        (1 << FiszczLangParser.T__22))) !==
                    0) ||
            _la === FiszczLangParser.VARIABLE_NAME ||
            _la === FiszczLangParser.W
        );
        this.state = 293;
        this.match(FiszczLangParser.T__13);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_element_number;
    return this;
}

Element_numberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Element_numberContext.prototype.constructor = Element_numberContext;

Element_numberContext.prototype.value = function () {
    return this.getTypedRuleContext(ValueContext, 0);
};

Element_numberContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterElement_number(this);
    }
};

Element_numberContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitElement_number(this);
    }
};

Element_numberContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitElement_number(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Element_numberContext = Element_numberContext;

FiszczLangParser.prototype.element_number = function () {
    var localctx = new Element_numberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FiszczLangParser.RULE_element_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(FiszczLangParser.T__6);
        this.state = 296;
        this.value();
        this.state = 297;
        this.match(FiszczLangParser.T__8);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_element_of_array;
    return this;
}

Element_of_arrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Element_of_arrayContext.prototype.constructor = Element_of_arrayContext;

Element_of_arrayContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Element_of_arrayContext.prototype.element_number = function () {
    return this.getTypedRuleContext(Element_numberContext, 0);
};

Element_of_arrayContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterElement_of_array(this);
    }
};

Element_of_arrayContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitElement_of_array(this);
    }
};

Element_of_arrayContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitElement_of_array(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Element_of_arrayContext = Element_of_arrayContext;

FiszczLangParser.prototype.element_of_array = function () {
    var localctx = new Element_of_arrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FiszczLangParser.RULE_element_of_array);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 300;
        this.element_number();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_print_instruction;
    return this;
}

Print_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Print_instructionContext.prototype.constructor = Print_instructionContext;

Print_instructionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Print_instructionContext.prototype.value = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext, i);
    }
};

Print_instructionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterPrint_instruction(this);
    }
};

Print_instructionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitPrint_instruction(this);
    }
};

Print_instructionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitPrint_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Print_instructionContext = Print_instructionContext;

FiszczLangParser.prototype.print_instruction = function () {
    var localctx = new Print_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FiszczLangParser.RULE_print_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.T__14 || _la === FiszczLangParser.T__15)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 303;
        this.match(FiszczLangParser.W);
        this.state = 308;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 306;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FiszczLangParser.T__23:
                    case FiszczLangParser.INTEGER_NUMBER:
                    case FiszczLangParser.REAL_NUMBER:
                    case FiszczLangParser.VARIABLE_NAME:
                    case FiszczLangParser.TEXT:
                        this.state = 304;
                        this.value();
                        break;
                    case FiszczLangParser.W:
                        this.state = 305;
                        this.match(FiszczLangParser.W);
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                }
            }
            this.state = 310;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_read_instruction;
    return this;
}

Read_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Read_instructionContext.prototype.constructor = Read_instructionContext;

Read_instructionContext.prototype.W = function () {
    return this.getToken(FiszczLangParser.W, 0);
};

Read_instructionContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Read_instructionContext.prototype.element_of_array = function () {
    return this.getTypedRuleContext(Element_of_arrayContext, 0);
};

Read_instructionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterRead_instruction(this);
    }
};

Read_instructionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitRead_instruction(this);
    }
};

Read_instructionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitRead_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Read_instructionContext = Read_instructionContext;

FiszczLangParser.prototype.read_instruction = function () {
    var localctx = new Read_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FiszczLangParser.RULE_read_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.T__16 || _la === FiszczLangParser.T__17)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 312;
        this.match(FiszczLangParser.W);
        this.state = 315;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 51, this._ctx);
        switch (la_) {
            case 1:
                this.state = 313;
                this.match(FiszczLangParser.VARIABLE_NAME);
                break;

            case 2:
                this.state = 314;
                this.element_of_array();
                break;
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_while_instruction;
    return this;
}

While_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_instructionContext.prototype.constructor = While_instructionContext;

While_instructionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

While_instructionContext.prototype.condition = function () {
    return this.getTypedRuleContext(ConditionContext, 0);
};

While_instructionContext.prototype.instruction = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(InstructionContext);
    } else {
        return this.getTypedRuleContext(InstructionContext, i);
    }
};

While_instructionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterWhile_instruction(this);
    }
};

While_instructionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitWhile_instruction(this);
    }
};

While_instructionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitWhile_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.While_instructionContext = While_instructionContext;

FiszczLangParser.prototype.while_instruction = function () {
    var localctx = new While_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FiszczLangParser.RULE_while_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.T__18 || _la === FiszczLangParser.T__19)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 318;
        this.match(FiszczLangParser.W);
        this.state = 319;
        this.condition();
        this.state = 321;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 320;
            this.match(FiszczLangParser.W);
        }

        this.state = 323;
        this.match(FiszczLangParser.T__12);
        this.state = 326;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 326;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FiszczLangParser.T__1:
                case FiszczLangParser.T__2:
                case FiszczLangParser.T__3:
                case FiszczLangParser.T__4:
                case FiszczLangParser.T__5:
                case FiszczLangParser.T__9:
                case FiszczLangParser.T__10:
                case FiszczLangParser.T__14:
                case FiszczLangParser.T__15:
                case FiszczLangParser.T__16:
                case FiszczLangParser.T__17:
                case FiszczLangParser.T__18:
                case FiszczLangParser.T__19:
                case FiszczLangParser.T__20:
                case FiszczLangParser.T__21:
                case FiszczLangParser.T__22:
                case FiszczLangParser.VARIABLE_NAME:
                    this.state = 324;
                    this.instruction();
                    break;
                case FiszczLangParser.W:
                    this.state = 325;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 328;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            ((_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__5) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__10) |
                        (1 << FiszczLangParser.T__14) |
                        (1 << FiszczLangParser.T__15) |
                        (1 << FiszczLangParser.T__16) |
                        (1 << FiszczLangParser.T__17) |
                        (1 << FiszczLangParser.T__18) |
                        (1 << FiszczLangParser.T__19) |
                        (1 << FiszczLangParser.T__20) |
                        (1 << FiszczLangParser.T__21) |
                        (1 << FiszczLangParser.T__22))) !==
                    0) ||
            _la === FiszczLangParser.VARIABLE_NAME ||
            _la === FiszczLangParser.W
        );
        this.state = 330;
        this.match(FiszczLangParser.T__13);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_if_instruction;
    return this;
}

If_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_instructionContext.prototype.constructor = If_instructionContext;

If_instructionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

If_instructionContext.prototype.condition = function () {
    return this.getTypedRuleContext(ConditionContext, 0);
};

If_instructionContext.prototype.instruction = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(InstructionContext);
    } else {
        return this.getTypedRuleContext(InstructionContext, i);
    }
};

If_instructionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterIf_instruction(this);
    }
};

If_instructionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitIf_instruction(this);
    }
};

If_instructionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitIf_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.If_instructionContext = If_instructionContext;

FiszczLangParser.prototype.if_instruction = function () {
    var localctx = new If_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FiszczLangParser.RULE_if_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.T__20 || _la === FiszczLangParser.T__21)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 333;
        this.match(FiszczLangParser.W);
        this.state = 334;
        this.condition();
        this.state = 336;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 335;
            this.match(FiszczLangParser.W);
        }

        this.state = 338;
        this.match(FiszczLangParser.T__12);
        this.state = 341;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 341;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FiszczLangParser.T__1:
                case FiszczLangParser.T__2:
                case FiszczLangParser.T__3:
                case FiszczLangParser.T__4:
                case FiszczLangParser.T__5:
                case FiszczLangParser.T__9:
                case FiszczLangParser.T__10:
                case FiszczLangParser.T__14:
                case FiszczLangParser.T__15:
                case FiszczLangParser.T__16:
                case FiszczLangParser.T__17:
                case FiszczLangParser.T__18:
                case FiszczLangParser.T__19:
                case FiszczLangParser.T__20:
                case FiszczLangParser.T__21:
                case FiszczLangParser.T__22:
                case FiszczLangParser.VARIABLE_NAME:
                    this.state = 339;
                    this.instruction();
                    break;
                case FiszczLangParser.W:
                    this.state = 340;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 343;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            ((_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__5) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__10) |
                        (1 << FiszczLangParser.T__14) |
                        (1 << FiszczLangParser.T__15) |
                        (1 << FiszczLangParser.T__16) |
                        (1 << FiszczLangParser.T__17) |
                        (1 << FiszczLangParser.T__18) |
                        (1 << FiszczLangParser.T__19) |
                        (1 << FiszczLangParser.T__20) |
                        (1 << FiszczLangParser.T__21) |
                        (1 << FiszczLangParser.T__22))) !==
                    0) ||
            _la === FiszczLangParser.VARIABLE_NAME ||
            _la === FiszczLangParser.W
        );
        this.state = 345;
        this.match(FiszczLangParser.T__13);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

function Return_instructionContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_return_instruction;
    return this;
}

Return_instructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Return_instructionContext.prototype.constructor = Return_instructionContext;

Return_instructionContext.prototype.value = function () {
    return this.getTypedRuleContext(ValueContext, 0);
};

Return_instructionContext.prototype.W = function () {
    return this.getToken(FiszczLangParser.W, 0);
};

Return_instructionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterReturn_instruction(this);
    }
};

Return_instructionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitReturn_instruction(this);
    }
};

Return_instructionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitReturn_instruction(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Return_instructionContext = Return_instructionContext;

FiszczLangParser.prototype.return_instruction = function () {
    var localctx = new Return_instructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FiszczLangParser.RULE_return_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 347;
        this.match(FiszczLangParser.T__22);
        this.state = 349;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 348;
            this.match(FiszczLangParser.W);
        }

        this.state = 351;
        this.value();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.value = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext, i);
    }
};

ConditionContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

ConditionContext.prototype.LESS_OR_EQUAL = function () {
    return this.getToken(FiszczLangParser.LESS_OR_EQUAL, 0);
};

ConditionContext.prototype.GREATER_OR_EQUAL = function () {
    return this.getToken(FiszczLangParser.GREATER_OR_EQUAL, 0);
};

ConditionContext.prototype.GREATER_THAN = function () {
    return this.getToken(FiszczLangParser.GREATER_THAN, 0);
};

ConditionContext.prototype.LESS_THAN = function () {
    return this.getToken(FiszczLangParser.LESS_THAN, 0);
};

ConditionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

ConditionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterCondition(this);
    }
};

ConditionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitCondition(this);
    }
};

ConditionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.ConditionContext = ConditionContext;

FiszczLangParser.prototype.condition = function () {
    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FiszczLangParser.RULE_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 353;
        this.value();
        this.state = 355;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 354;
            this.match(FiszczLangParser.W);
        }

        this.state = 357;
        _la = this._input.LA(1);
        if (
            !(
                ((_la - 33) & ~0x1f) == 0 &&
                ((1 << (_la - 33)) &
                    ((1 << (FiszczLangParser.EQUAL - 33)) |
                        (1 << (FiszczLangParser.LESS_OR_EQUAL - 33)) |
                        (1 << (FiszczLangParser.GREATER_OR_EQUAL - 33)) |
                        (1 << (FiszczLangParser.GREATER_THAN - 33)) |
                        (1 << (FiszczLangParser.LESS_THAN - 33)))) !==
                    0
            )
        ) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 359;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 358;
            this.match(FiszczLangParser.W);
        }

        this.state = 361;
        this.value();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

function Call_operationContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_call_operation;
    return this;
}

Call_operationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Call_operationContext.prototype.constructor = Call_operationContext;

Call_operationContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Call_operationContext.prototype.LESS_THAN = function () {
    return this.getToken(FiszczLangParser.LESS_THAN, 0);
};

Call_operationContext.prototype.GREATER_THAN = function () {
    return this.getToken(FiszczLangParser.GREATER_THAN, 0);
};

Call_operationContext.prototype.value = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext, i);
    }
};

Call_operationContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Call_operationContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterCall_operation(this);
    }
};

Call_operationContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitCall_operation(this);
    }
};

Call_operationContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitCall_operation(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Call_operationContext = Call_operationContext;

FiszczLangParser.prototype.call_operation = function () {
    var localctx = new Call_operationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, FiszczLangParser.RULE_call_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 363;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 364;
        this.match(FiszczLangParser.LESS_THAN);
        this.state = 366;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
            ((_la - 24) & ~0x1f) == 0 &&
            ((1 << (_la - 24)) &
                ((1 << (FiszczLangParser.T__23 - 24)) |
                    (1 << (FiszczLangParser.INTEGER_NUMBER - 24)) |
                    (1 << (FiszczLangParser.REAL_NUMBER - 24)) |
                    (1 << (FiszczLangParser.VARIABLE_NAME - 24)) |
                    (1 << (FiszczLangParser.TEXT - 24)))) !==
                0
        ) {
            this.state = 365;
            this.value();
        }

        this.state = 378;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 368;
                    this.match(FiszczLangParser.W);
                }

                this.state = 371;
                this.match(FiszczLangParser.T__7);
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 372;
                    this.match(FiszczLangParser.W);
                }

                this.state = 375;
                this.value();
            }
            this.state = 380;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
        }

        this.state = 382;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 381;
            this.match(FiszczLangParser.W);
        }

        this.state = 384;
        this.match(FiszczLangParser.GREATER_THAN);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_arithmetic_expression;
    return this;
}

Arithmetic_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Arithmetic_expressionContext.prototype.constructor = Arithmetic_expressionContext;

Arithmetic_expressionContext.prototype.arithmetic_expression = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(Arithmetic_expressionContext);
    } else {
        return this.getTypedRuleContext(Arithmetic_expressionContext, i);
    }
};

Arithmetic_expressionContext.prototype.call_operation = function () {
    return this.getTypedRuleContext(Call_operationContext, 0);
};

Arithmetic_expressionContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

Arithmetic_expressionContext.prototype.element_of_array = function () {
    return this.getTypedRuleContext(Element_of_arrayContext, 0);
};

Arithmetic_expressionContext.prototype.INTEGER_NUMBER = function () {
    return this.getToken(FiszczLangParser.INTEGER_NUMBER, 0);
};

Arithmetic_expressionContext.prototype.REAL_NUMBER = function () {
    return this.getToken(FiszczLangParser.REAL_NUMBER, 0);
};

Arithmetic_expressionContext.prototype.ASTERISK = function () {
    return this.getToken(FiszczLangParser.ASTERISK, 0);
};

Arithmetic_expressionContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Arithmetic_expressionContext.prototype.SLASH = function () {
    return this.getToken(FiszczLangParser.SLASH, 0);
};

Arithmetic_expressionContext.prototype.PLUS = function () {
    return this.getToken(FiszczLangParser.PLUS, 0);
};

Arithmetic_expressionContext.prototype.MINUS = function () {
    return this.getToken(FiszczLangParser.MINUS, 0);
};

Arithmetic_expressionContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterArithmetic_expression(this);
    }
};

Arithmetic_expressionContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitArithmetic_expression(this);
    }
};

Arithmetic_expressionContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitArithmetic_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.prototype.arithmetic_expression = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Arithmetic_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 46;
    this.enterRecursionRule(localctx, 46, FiszczLangParser.RULE_arithmetic_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 66, this._ctx);
        switch (la_) {
            case 1:
                this.state = 387;
                this.match(FiszczLangParser.T__23);
                this.state = 388;
                this.arithmetic_expression(0);
                this.state = 389;
                this.match(FiszczLangParser.T__24);
                break;

            case 2:
                this.state = 391;
                this.call_operation();
                break;

            case 3:
                this.state = 392;
                this.match(FiszczLangParser.VARIABLE_NAME);
                break;

            case 4:
                this.state = 393;
                this.element_of_array();
                break;

            case 5:
                this.state = 394;
                this.match(FiszczLangParser.INTEGER_NUMBER);
                break;

            case 6:
                this.state = 395;
                this.match(FiszczLangParser.REAL_NUMBER);
                break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 436;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 434;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 75, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                        this.state = 398;
                        if (!this.precpred(this._ctx, 9)) {
                            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 9)');
                        }
                        this.state = 400;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 399;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 402;
                        this.match(FiszczLangParser.ASTERISK);
                        this.state = 404;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 403;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 406;
                        this.arithmetic_expression(10);
                        break;

                    case 2:
                        localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                        this.state = 407;
                        if (!this.precpred(this._ctx, 8)) {
                            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 8)');
                        }
                        this.state = 409;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 408;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 411;
                        this.match(FiszczLangParser.SLASH);
                        this.state = 413;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 412;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 415;
                        this.arithmetic_expression(9);
                        break;

                    case 3:
                        localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                        this.state = 416;
                        if (!this.precpred(this._ctx, 7)) {
                            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 7)');
                        }
                        this.state = 418;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 417;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 420;
                        this.match(FiszczLangParser.PLUS);
                        this.state = 422;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 421;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 424;
                        this.arithmetic_expression(8);
                        break;

                    case 4:
                        localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                        this.state = 425;
                        if (!this.precpred(this._ctx, 6)) {
                            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 6)');
                        }
                        this.state = 427;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 426;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 429;
                        this.match(FiszczLangParser.MINUS);
                        this.state = 431;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 430;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 433;
                        this.arithmetic_expression(7);
                        break;
                }
            }
            this.state = 438;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

function AssignmentContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

AssignmentContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

AssignmentContext.prototype.value = function () {
    return this.getTypedRuleContext(ValueContext, 0);
};

AssignmentContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

AssignmentContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterAssignment(this);
    }
};

AssignmentContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitAssignment(this);
    }
};

AssignmentContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.AssignmentContext = AssignmentContext;

FiszczLangParser.prototype.assignment = function () {
    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, FiszczLangParser.RULE_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 439;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 441;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 440;
            this.match(FiszczLangParser.W);
        }

        this.state = 443;
        this.match(FiszczLangParser.EQUAL);
        this.state = 445;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 444;
            this.match(FiszczLangParser.W);
        }

        this.state = 447;
        this.value();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_array_element_assignment;
    return this;
}

Array_element_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Array_element_assignmentContext.prototype.constructor = Array_element_assignmentContext;

Array_element_assignmentContext.prototype.element_of_array = function () {
    return this.getTypedRuleContext(Element_of_arrayContext, 0);
};

Array_element_assignmentContext.prototype.EQUAL = function () {
    return this.getToken(FiszczLangParser.EQUAL, 0);
};

Array_element_assignmentContext.prototype.value = function () {
    return this.getTypedRuleContext(ValueContext, 0);
};

Array_element_assignmentContext.prototype.W = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTokens(FiszczLangParser.W);
    } else {
        return this.getToken(FiszczLangParser.W, i);
    }
};

Array_element_assignmentContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterArray_element_assignment(this);
    }
};

Array_element_assignmentContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitArray_element_assignment(this);
    }
};

Array_element_assignmentContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitArray_element_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.Array_element_assignmentContext = Array_element_assignmentContext;

FiszczLangParser.prototype.array_element_assignment = function () {
    var localctx = new Array_element_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, FiszczLangParser.RULE_array_element_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        this.element_of_array();
        this.state = 451;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 450;
            this.match(FiszczLangParser.W);
        }

        this.state = 453;
        this.match(FiszczLangParser.EQUAL);
        this.state = 455;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 454;
            this.match(FiszczLangParser.W);
        }

        this.state = 457;
        this.value();
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.call_operation = function () {
    return this.getTypedRuleContext(Call_operationContext, 0);
};

ValueContext.prototype.VARIABLE_NAME = function () {
    return this.getToken(FiszczLangParser.VARIABLE_NAME, 0);
};

ValueContext.prototype.INTEGER_NUMBER = function () {
    return this.getToken(FiszczLangParser.INTEGER_NUMBER, 0);
};

ValueContext.prototype.REAL_NUMBER = function () {
    return this.getToken(FiszczLangParser.REAL_NUMBER, 0);
};

ValueContext.prototype.string = function () {
    return this.getTypedRuleContext(StringContext, 0);
};

ValueContext.prototype.element_of_array = function () {
    return this.getTypedRuleContext(Element_of_arrayContext, 0);
};

ValueContext.prototype.arithmetic_expression = function () {
    return this.getTypedRuleContext(Arithmetic_expressionContext, 0);
};

ValueContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterValue(this);
    }
};

ValueContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitValue(this);
    }
};

ValueContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.ValueContext = ValueContext;

FiszczLangParser.prototype.value = function () {
    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, FiszczLangParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 466;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 81, this._ctx);
        switch (la_) {
            case 1:
                this.state = 459;
                this.call_operation();
                break;

            case 2:
                this.state = 460;
                this.match(FiszczLangParser.VARIABLE_NAME);
                break;

            case 3:
                this.state = 461;
                this.match(FiszczLangParser.INTEGER_NUMBER);
                break;

            case 4:
                this.state = 462;
                this.match(FiszczLangParser.REAL_NUMBER);
                break;

            case 5:
                this.state = 463;
                this.string();
                break;

            case 6:
                this.state = 464;
                this.element_of_array();
                break;

            case 7:
                this.state = 465;
                this.arithmetic_expression(0);
                break;
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

function TypeContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterType(this);
    }
};

TypeContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitType(this);
    }
};

TypeContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.TypeContext = TypeContext;

FiszczLangParser.prototype.type = function () {
    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, FiszczLangParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 468;
        _la = this._input.LA(1);
        if (
            !(
                (_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__5) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__10))) !==
                    0
            )
        ) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FiszczLangParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.TEXT = function () {
    return this.getToken(FiszczLangParser.TEXT, 0);
};

StringContext.prototype.enterRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.enterString(this);
    }
};

StringContext.prototype.exitRule = function (listener) {
    if (listener instanceof FiszczLangListener) {
        listener.exitString(this);
    }
};

StringContext.prototype.accept = function (visitor) {
    if (visitor instanceof FiszczLangVisitor) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FiszczLangParser.StringContext = StringContext;

FiszczLangParser.prototype.string = function () {
    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, FiszczLangParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 470;
        this.match(FiszczLangParser.TEXT);
    } catch (re) {
        if (re instanceof antlr4.error.RecognitionException) {
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

FiszczLangParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 23:
            return this.arithmetic_expression_sempred(localctx, predIndex);
        default:
            throw 'No predicate with index:' + ruleIndex;
    }
};

FiszczLangParser.prototype.arithmetic_expression_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 9);
        case 1:
            return this.precpred(this._ctx, 8);
        case 2:
            return this.precpred(this._ctx, 7);
        case 3:
            return this.precpred(this._ctx, 6);
        default:
            throw 'No predicate with index:' + predIndex;
    }
};

exports.FiszczLangParser = FiszczLangParser;
