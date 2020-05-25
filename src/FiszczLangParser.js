// Generated from ./src/FiszczLang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FiszczLangListener = require('./FiszczLangListener').FiszczLangListener;
var FiszczLangVisitor = require('./FiszczLangVisitor').FiszczLangVisitor;

var grammarFileName = 'FiszczLang.g4';

var serializedATN = [
    '\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964',
    '\u0003+\u01a0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t',
    '\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004',
    '\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004',
    '\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004',
    '\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t',
    '\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004',
    '\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t',
    '\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0003\u0002\u0003\u0002',
    '\u0006\u0002=\n\u0002\r\u0002\u000e\u0002>\u0003\u0002\u0003\u0002\u0003',
    '\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003',
    '\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003N',
    '\n\u0003\u0003\u0003\u0005\u0003Q\n\u0003\u0003\u0003\u0003\u0003\u0003',
    '\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0005',
    '\u0005[\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006`\n\u0006',
    '\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007e\n\u0007\u0003\b\u0003',
    '\b\u0003\b\u0003\b\u0003\b\u0005\bl\n\b\u0003\t\u0003\t\u0003\t\u0003',
    '\t\u0003\t\u0005\ts\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003',
    '\n\u0003\n\u0005\n|\n\n\u0005\n~\n\n\u0003\u000b\u0003\u000b\u0003\u000b',
    '\u0003\u000b\u0005\u000b\u0084\n\u000b\u0003\u000b\u0003\u000b\u0005',
    '\u000b\u0088\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u008c\n\u000b',
    '\u0003\u000b\u0003\u000b\u0005\u000b\u0090\n\u000b\u0003\u000b\u0007',
    '\u000b\u0093\n\u000b\f\u000b\u000e\u000b\u0096\u000b\u000b\u0003\u000b',
    '\u0005\u000b\u0099\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003',
    '\f\u0003\f\u0005\f\u00a1\n\f\u0003\f\u0003\f\u0005\f\u00a5\n\f\u0003',
    '\f\u0003\f\u0005\f\u00a9\n\f\u0003\f\u0003\f\u0005\f\u00ad\n\f\u0003',
    '\f\u0007\f\u00b0\n\f\f\f\u000e\f\u00b3\u000b\f\u0003\f\u0005\f\u00b6',
    '\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00be\n',
    '\r\u0003\r\u0003\r\u0005\r\u00c2\n\r\u0003\r\u0003\r\u0005\r\u00c6\n',
    '\r\u0003\r\u0003\r\u0005\r\u00ca\n\r\u0003\r\u0007\r\u00cd\n\r\f\r\u000e',
    '\r\u00d0\u000b\r\u0003\r\u0005\r\u00d3\n\r\u0003\r\u0003\r\u0003\u000e',
    '\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e',
    '\u00dd\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00e1\n\u000e\u0003',
    '\u000e\u0005\u000e\u00e4\n\u000e\u0003\u000e\u0003\u000e\u0005\u000e',
    '\u00e8\n\u000e\u0003\u000e\u0007\u000e\u00eb\n\u000e\f\u000e\u000e\u000e',
    '\u00ee\u000b\u000e\u0003\u000e\u0005\u000e\u00f1\n\u000e\u0003\u000e',
    '\u0003\u000e\u0003\u000e\u0006\u000e\u00f6\n\u000e\r\u000e\u000e\u000e',
    '\u00f7\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003',
    '\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003',
    '\u0011\u0003\u0011\u0007\u0011\u0107\n\u0011\f\u0011\u000e\u0011\u010a',
    '\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012',
    '\u0110\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005',
    '\u0013\u0116\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0006\u0013',
    '\u011b\n\u0013\r\u0013\u000e\u0013\u011c\u0003\u0013\u0003\u0013\u0003',
    '\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u0125\n\u0014',
    '\u0003\u0014\u0003\u0014\u0003\u0014\u0006\u0014\u012a\n\u0014\r\u0014',
    '\u000e\u0014\u012b\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0005',
    '\u0015\u0132\n\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016',
    '\u0005\u0016\u0138\n\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u013c',
    '\n\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017',
    '\u0005\u0017\u0143\n\u0017\u0003\u0017\u0005\u0017\u0146\n\u0017\u0003',
    '\u0017\u0003\u0017\u0005\u0017\u014a\n\u0017\u0003\u0017\u0007\u0017',
    '\u014d\n\u0017\f\u0017\u000e\u0017\u0150\u000b\u0017\u0003\u0017\u0005',
    '\u0017\u0153\n\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018',
    '\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018',
    '\u0003\u0018\u0003\u0018\u0005\u0018\u0161\n\u0018\u0003\u0018\u0003',
    '\u0018\u0005\u0018\u0165\n\u0018\u0003\u0018\u0003\u0018\u0005\u0018',
    '\u0169\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u016e',
    '\n\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0172\n\u0018\u0003\u0018',
    '\u0003\u0018\u0003\u0018\u0005\u0018\u0177\n\u0018\u0003\u0018\u0003',
    '\u0018\u0005\u0018\u017b\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018',
    '\u0005\u0018\u0180\n\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0184',
    '\n\u0018\u0003\u0018\u0007\u0018\u0187\n\u0018\f\u0018\u000e\u0018\u018a',
    '\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a',
    '\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b',
    '\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u019a\n\u001b\u0003',
    '\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0002\u0003.',
    '\u001e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a',
    '\u001c\u001e "$&(*,.02468\u0002\t\u0003\u0002\u001c\u001d\u0003\u0002',
    '\u0010\u0011\u0003\u0002\u0012\u0013\u0003\u0002\u0014\u0015\u0003\u0002',
    '\u0016\u0017\u0003\u0002"&\u0004\u0002\u0004\u0007\u000b\f\u0002\u01dc',
    '\u0002<\u0003\u0002\u0002\u0002\u0004M\u0003\u0002\u0002\u0002\u0006',
    'T\u0003\u0002\u0002\u0002\bZ\u0003\u0002\u0002\u0002\n_\u0003\u0002',
    '\u0002\u0002\fd\u0003\u0002\u0002\u0002\u000ef\u0003\u0002\u0002\u0002',
    '\u0010m\u0003\u0002\u0002\u0002\u0012t\u0003\u0002\u0002\u0002\u0014',
    '\u007f\u0003\u0002\u0002\u0002\u0016\u009c\u0003\u0002\u0002\u0002\u0018',
    '\u00b9\u0003\u0002\u0002\u0002\u001a\u00d6\u0003\u0002\u0002\u0002\u001c',
    '\u00fb\u0003\u0002\u0002\u0002\u001e\u00ff\u0003\u0002\u0002\u0002 ',
    '\u0102\u0003\u0002\u0002\u0002"\u010b\u0003\u0002\u0002\u0002$\u0111',
    '\u0003\u0002\u0002\u0002&\u0120\u0003\u0002\u0002\u0002(\u012f\u0003',
    '\u0002\u0002\u0002*\u0135\u0003\u0002\u0002\u0002,\u013f\u0003\u0002',
    '\u0002\u0002.\u0160\u0003\u0002\u0002\u00020\u018b\u0003\u0002\u0002',
    '\u00022\u018f\u0003\u0002\u0002\u00024\u0199\u0003\u0002\u0002\u0002',
    '6\u019b\u0003\u0002\u0002\u00028\u019d\u0003\u0002\u0002\u0002:=\u0005',
    '\u0004\u0003\u0002;=\u0007+\u0002\u0002<:\u0003\u0002\u0002\u0002<;',
    '\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002><\u0003\u0002\u0002',
    '\u0002>?\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\u0007\u0002',
    '\u0002\u0003A\u0003\u0003\u0002\u0002\u0002BN\u0005\u001a\u000e\u0002',
    'CN\u0005\b\u0005\u0002DN\u0005 \u0011\u0002EN\u0005 \u0011\u0002FN\u0005',
    '"\u0012\u0002GN\u0005&\u0014\u0002HN\u0005$\u0013\u0002IN\u00050\u0019',
    '\u0002JN\u00052\u001a\u0002KN\u0005(\u0015\u0002LN\u0005,\u0017\u0002',
    'MB\u0003\u0002\u0002\u0002MC\u0003\u0002\u0002\u0002MD\u0003\u0002\u0002',
    '\u0002ME\u0003\u0002\u0002\u0002MF\u0003\u0002\u0002\u0002MG\u0003\u0002',
    '\u0002\u0002MH\u0003\u0002\u0002\u0002MI\u0003\u0002\u0002\u0002MJ\u0003',
    '\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002',
    'NP\u0003\u0002\u0002\u0002OQ\u0007+\u0002\u0002PO\u0003\u0002\u0002',
    '\u0002PQ\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0007\u0003',
    '\u0002\u0002S\u0005\u0003\u0002\u0002\u0002TU\u00056\u001c\u0002UV\u0007',
    '+\u0002\u0002VW\u0007)\u0002\u0002W\u0007\u0003\u0002\u0002\u0002X[',
    '\u0005\n\u0006\u0002Y[\u0005\f\u0007\u0002ZX\u0003\u0002\u0002\u0002',
    'ZY\u0003\u0002\u0002\u0002[\t\u0003\u0002\u0002\u0002\\`\u0005\u000e',
    '\b\u0002]`\u0005\u0010\t\u0002^`\u0005\u0012\n\u0002_\\\u0003\u0002',
    '\u0002\u0002_]\u0003\u0002\u0002\u0002_^\u0003\u0002\u0002\u0002`\u000b',
    '\u0003\u0002\u0002\u0002ae\u0005\u0014\u000b\u0002be\u0005\u0016\f\u0002',
    'ce\u0005\u0018\r\u0002da\u0003\u0002\u0002\u0002db\u0003\u0002\u0002',
    '\u0002dc\u0003\u0002\u0002\u0002e\r\u0003\u0002\u0002\u0002fg\u0007',
    '\u0004\u0002\u0002gh\u0007+\u0002\u0002hk\u0007)\u0002\u0002ij\u0007',
    '+\u0002\u0002jl\u0005.\u0018\u0002ki\u0003\u0002\u0002\u0002kl\u0003',
    '\u0002\u0002\u0002l\u000f\u0003\u0002\u0002\u0002mn\u0007\u0005\u0002',
    '\u0002no\u0007+\u0002\u0002or\u0007)\u0002\u0002pq\u0007+\u0002\u0002',
    'qs\u0005.\u0018\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002',
    '\u0002s\u0011\u0003\u0002\u0002\u0002tu\u0007\u0006\u0002\u0002uv\u0007',
    '+\u0002\u0002v}\u0007)\u0002\u0002w{\u0007+\u0002\u0002x|\u00058\u001d',
    '\u0002y|\u0007)\u0002\u0002z|\u0005\u001e\u0010\u0002{x\u0003\u0002',
    '\u0002\u0002{y\u0003\u0002\u0002\u0002{z\u0003\u0002\u0002\u0002|~\u0003',
    '\u0002\u0002\u0002}w\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002',
    '~\u0013\u0003\u0002\u0002\u0002\u007f\u0080\u0007\u0007\u0002\u0002',
    '\u0080\u0081\u0007+\u0002\u0002\u0081\u0083\u0007)\u0002\u0002\u0082',
    '\u0084\u0007+\u0002\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0083',
    '\u0084\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085',
    '\u0087\u0007\b\u0002\u0002\u0086\u0088\u0007+\u0002\u0002\u0087\u0086',
    '\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089',
    '\u0003\u0002\u0002\u0002\u0089\u0094\u0007\u001c\u0002\u0002\u008a\u008c',
    '\u0007+\u0002\u0002\u008b\u008a\u0003\u0002\u0002\u0002\u008b\u008c',
    '\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u008f',
    '\u0007\t\u0002\u0002\u008e\u0090\u0007+\u0002\u0002\u008f\u008e\u0003',
    '\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0091\u0003',
    '\u0002\u0002\u0002\u0091\u0093\u0007\u001c\u0002\u0002\u0092\u008b\u0003',
    '\u0002\u0002\u0002\u0093\u0096\u0003\u0002\u0002\u0002\u0094\u0092\u0003',
    '\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0098\u0003',
    '\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u0099\u0007',
    '+\u0002\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0098\u0099\u0003',
    '\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u009b\u0007',
    '\n\u0002\u0002\u009b\u0015\u0003\u0002\u0002\u0002\u009c\u009d\u0007',
    '\u000b\u0002\u0002\u009d\u009e\u0007+\u0002\u0002\u009e\u00a0\u0007',
    ')\u0002\u0002\u009f\u00a1\u0007+\u0002\u0002\u00a0\u009f\u0003\u0002',
    '\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002',
    '\u0002\u0002\u00a2\u00a4\u0007\b\u0002\u0002\u00a3\u00a5\u0007+\u0002',
    '\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002',
    '\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00b1\t\u0002\u0002',
    '\u0002\u00a7\u00a9\u0007+\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002',
    '\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002',
    '\u0002\u00aa\u00ac\u0007\t\u0002\u0002\u00ab\u00ad\u0007+\u0002\u0002',
    '\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002',
    '\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\t\u0002\u0002\u0002',
    '\u00af\u00a8\u0003\u0002\u0002\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002',
    '\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002',
    '\u00b2\u00b5\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002',
    '\u00b4\u00b6\u0007+\u0002\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002',
    '\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002',
    '\u00b7\u00b8\u0007\n\u0002\u0002\u00b8\u0017\u0003\u0002\u0002\u0002',
    '\u00b9\u00ba\u0007\f\u0002\u0002\u00ba\u00bb\u0007+\u0002\u0002\u00bb',
    '\u00bd\u0007)\u0002\u0002\u00bc\u00be\u0007+\u0002\u0002\u00bd\u00bc',
    '\u0003\u0002\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00bf',
    '\u0003\u0002\u0002\u0002\u00bf\u00c1\u0007\b\u0002\u0002\u00c0\u00c2',
    '\u0007+\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c1\u00c2',
    '\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00ce',
    '\u00058\u001d\u0002\u00c4\u00c6\u0007+\u0002\u0002\u00c5\u00c4\u0003',
    '\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003',
    '\u0002\u0002\u0002\u00c7\u00c9\u0007\t\u0002\u0002\u00c8\u00ca\u0007',
    '+\u0002\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003',
    '\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cd\u0005',
    '8\u001d\u0002\u00cc\u00c5\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003',
    '\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003',
    '\u0002\u0002\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003',
    '\u0002\u0002\u0002\u00d1\u00d3\u0007+\u0002\u0002\u00d2\u00d1\u0003',
    '\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003',
    '\u0002\u0002\u0002\u00d4\u00d5\u0007\n\u0002\u0002\u00d5\u0019\u0003',
    '\u0002\u0002\u0002\u00d6\u00d7\u00056\u001c\u0002\u00d7\u00d8\u0007',
    '+\u0002\u0002\u00d8\u00d9\u0007(\u0002\u0002\u00d9\u00da\u0007+\u0002',
    '\u0002\u00da\u00dc\u0007)\u0002\u0002\u00db\u00dd\u0007+\u0002\u0002',
    '\u00dc\u00db\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002',
    '\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00e0\u0007\r\u0002\u0002',
    '\u00df\u00e1\u0007+\u0002\u0002\u00e0\u00df\u0003\u0002\u0002\u0002',
    '\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1\u00e3\u0003\u0002\u0002\u0002',
    '\u00e2\u00e4\u0005\u0006\u0004\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002',
    '\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00ec\u0003\u0002\u0002\u0002',
    '\u00e5\u00e7\u0007\t\u0002\u0002\u00e6\u00e8\u0007+\u0002\u0002\u00e7',
    '\u00e6\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8',
    '\u00e9\u0003\u0002\u0002\u0002\u00e9\u00eb\u0005\u0006\u0004\u0002\u00ea',
    '\u00e5\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec',
    '\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed',
    '\u00f0\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef',
    '\u00f1\u0007+\u0002\u0002\u00f0\u00ef\u0003\u0002\u0002\u0002\u00f0',
    '\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2',
    '\u00f5\u0007\u000e\u0002\u0002\u00f3\u00f6\u0005\u0004\u0003\u0002\u00f4',
    '\u00f6\u0007+\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f5',
    '\u00f4\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7',
    '\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8',
    '\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\u000f\u0002\u0002\u00fa',
    '\u001b\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007\b\u0002\u0002\u00fc',
    '\u00fd\u00054\u001b\u0002\u00fd\u00fe\u0007\n\u0002\u0002\u00fe\u001d',
    '\u0003\u0002\u0002\u0002\u00ff\u0100\u0007)\u0002\u0002\u0100\u0101',
    '\u0005\u001c\u000f\u0002\u0101\u001f\u0003\u0002\u0002\u0002\u0102\u0103',
    '\t\u0003\u0002\u0002\u0103\u0108\u0007+\u0002\u0002\u0104\u0107\u0005',
    '4\u001b\u0002\u0105\u0107\u0007+\u0002\u0002\u0106\u0104\u0003\u0002',
    '\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0107\u010a\u0003\u0002',
    '\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002',
    '\u0002\u0002\u0109!\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002',
    '\u0002\u0002\u010b\u010c\t\u0004\u0002\u0002\u010c\u010f\u0007+\u0002',
    '\u0002\u010d\u0110\u0007)\u0002\u0002\u010e\u0110\u0005\u001e\u0010',
    '\u0002\u010f\u010d\u0003\u0002\u0002\u0002\u010f\u010e\u0003\u0002\u0002',
    '\u0002\u0110#\u0003\u0002\u0002\u0002\u0111\u0112\t\u0005\u0002\u0002',
    '\u0112\u0113\u0007+\u0002\u0002\u0113\u0115\u0005*\u0016\u0002\u0114',
    '\u0116\u0007+\u0002\u0002\u0115\u0114\u0003\u0002\u0002\u0002\u0115',
    '\u0116\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117',
    '\u011a\u0007\u000e\u0002\u0002\u0118\u011b\u0005\u0004\u0003\u0002\u0119',
    '\u011b\u0007+\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011a',
    '\u0119\u0003\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c',
    '\u011a\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002\u0002\u011d',
    '\u011e\u0003\u0002\u0002\u0002\u011e\u011f\u0007\u000f\u0002\u0002\u011f',
    '%\u0003\u0002\u0002\u0002\u0120\u0121\t\u0006\u0002\u0002\u0121\u0122',
    '\u0007+\u0002\u0002\u0122\u0124\u0005*\u0016\u0002\u0123\u0125\u0007',
    '+\u0002\u0002\u0124\u0123\u0003\u0002\u0002\u0002\u0124\u0125\u0003',
    '\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0129\u0007',
    '\u000e\u0002\u0002\u0127\u012a\u0005\u0004\u0003\u0002\u0128\u012a\u0007',
    '+\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u0129\u0128\u0003',
    '\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b\u0129\u0003',
    '\u0002\u0002\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0003',
    "\u0002\u0002\u0002\u012d\u012e\u0007\u000f\u0002\u0002\u012e'\u0003",
    '\u0002\u0002\u0002\u012f\u0131\u0007\u0018\u0002\u0002\u0130\u0132\u0007',
    '+\u0002\u0002\u0131\u0130\u0003\u0002\u0002\u0002\u0131\u0132\u0003',
    '\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0134\u0005',
    '4\u001b\u0002\u0134)\u0003\u0002\u0002\u0002\u0135\u0137\u00054\u001b',
    '\u0002\u0136\u0138\u0007+\u0002\u0002\u0137\u0136\u0003\u0002\u0002',
    '\u0002\u0137\u0138\u0003\u0002\u0002\u0002\u0138\u0139\u0003\u0002\u0002',
    '\u0002\u0139\u013b\t\u0007\u0002\u0002\u013a\u013c\u0007+\u0002\u0002',
    '\u013b\u013a\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002',
    '\u013c\u013d\u0003\u0002\u0002\u0002\u013d\u013e\u00054\u001b\u0002',
    '\u013e+\u0003\u0002\u0002\u0002\u013f\u0140\u0007)\u0002\u0002\u0140',
    '\u0142\u0007&\u0002\u0002\u0141\u0143\u00054\u001b\u0002\u0142\u0141',
    '\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143\u014e',
    '\u0003\u0002\u0002\u0002\u0144\u0146\u0007+\u0002\u0002\u0145\u0144',
    '\u0003\u0002\u0002\u0002\u0145\u0146\u0003\u0002\u0002\u0002\u0146\u0147',
    '\u0003\u0002\u0002\u0002\u0147\u0149\u0007\t\u0002\u0002\u0148\u014a',
    '\u0007+\u0002\u0002\u0149\u0148\u0003\u0002\u0002\u0002\u0149\u014a',
    '\u0003\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b\u014d',
    '\u00054\u001b\u0002\u014c\u0145\u0003\u0002\u0002\u0002\u014d\u0150',
    '\u0003\u0002\u0002\u0002\u014e\u014c\u0003\u0002\u0002\u0002\u014e\u014f',
    '\u0003\u0002\u0002\u0002\u014f\u0152\u0003\u0002\u0002\u0002\u0150\u014e',
    '\u0003\u0002\u0002\u0002\u0151\u0153\u0007+\u0002\u0002\u0152\u0151',
    '\u0003\u0002\u0002\u0002\u0152\u0153\u0003\u0002\u0002\u0002\u0153\u0154',
    '\u0003\u0002\u0002\u0002\u0154\u0155\u0007%\u0002\u0002\u0155-\u0003',
    '\u0002\u0002\u0002\u0156\u0157\b\u0018\u0001\u0002\u0157\u0158\u0007',
    '\u0019\u0002\u0002\u0158\u0159\u0005.\u0018\u0002\u0159\u015a\u0007',
    '\u001a\u0002\u0002\u015a\u0161\u0003\u0002\u0002\u0002\u015b\u0161\u0005',
    ',\u0017\u0002\u015c\u0161\u0007)\u0002\u0002\u015d\u0161\u0005\u001e',
    '\u0010\u0002\u015e\u0161\u0007\u001c\u0002\u0002\u015f\u0161\u0007\u001d',
    '\u0002\u0002\u0160\u0156\u0003\u0002\u0002\u0002\u0160\u015b\u0003\u0002',
    '\u0002\u0002\u0160\u015c\u0003\u0002\u0002\u0002\u0160\u015d\u0003\u0002',
    '\u0002\u0002\u0160\u015e\u0003\u0002\u0002\u0002\u0160\u015f\u0003\u0002',
    '\u0002\u0002\u0161\u0188\u0003\u0002\u0002\u0002\u0162\u0164\f\u000b',
    '\u0002\u0002\u0163\u0165\u0007+\u0002\u0002\u0164\u0163\u0003\u0002',
    '\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165\u0166\u0003\u0002',
    '\u0002\u0002\u0166\u0168\u0007\u001e\u0002\u0002\u0167\u0169\u0007+',
    '\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002\u0168\u0169\u0003\u0002',
    '\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u0187\u0005.',
    '\u0018\f\u016b\u016d\f\n\u0002\u0002\u016c\u016e\u0007+\u0002\u0002',
    '\u016d\u016c\u0003\u0002\u0002\u0002\u016d\u016e\u0003\u0002\u0002\u0002',
    '\u016e\u016f\u0003\u0002\u0002\u0002\u016f\u0171\u0007\u001f\u0002\u0002',
    '\u0170\u0172\u0007+\u0002\u0002\u0171\u0170\u0003\u0002\u0002\u0002',
    '\u0171\u0172\u0003\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002',
    '\u0173\u0187\u0005.\u0018\u000b\u0174\u0176\f\t\u0002\u0002\u0175\u0177',
    '\u0007+\u0002\u0002\u0176\u0175\u0003\u0002\u0002\u0002\u0176\u0177',
    '\u0003\u0002\u0002\u0002\u0177\u0178\u0003\u0002\u0002\u0002\u0178\u017a',
    '\u0007 \u0002\u0002\u0179\u017b\u0007+\u0002\u0002\u017a\u0179\u0003',
    '\u0002\u0002\u0002\u017a\u017b\u0003\u0002\u0002\u0002\u017b\u017c\u0003',
    '\u0002\u0002\u0002\u017c\u0187\u0005.\u0018\n\u017d\u017f\f\b\u0002',
    '\u0002\u017e\u0180\u0007+\u0002\u0002\u017f\u017e\u0003\u0002\u0002',
    '\u0002\u017f\u0180\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002\u0002',
    '\u0002\u0181\u0183\u0007!\u0002\u0002\u0182\u0184\u0007+\u0002\u0002',
    '\u0183\u0182\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002',
    '\u0184\u0185\u0003\u0002\u0002\u0002\u0185\u0187\u0005.\u0018\t\u0186',
    '\u0162\u0003\u0002\u0002\u0002\u0186\u016b\u0003\u0002\u0002\u0002\u0186',
    '\u0174\u0003\u0002\u0002\u0002\u0186\u017d\u0003\u0002\u0002\u0002\u0187',
    '\u018a\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0188',
    '\u0189\u0003\u0002\u0002\u0002\u0189/\u0003\u0002\u0002\u0002\u018a',
    '\u0188\u0003\u0002\u0002\u0002\u018b\u018c\u0007)\u0002\u0002\u018c',
    '\u018d\u0007+\u0002\u0002\u018d\u018e\u00054\u001b\u0002\u018e1\u0003',
    '\u0002\u0002\u0002\u018f\u0190\u0005\u001e\u0010\u0002\u0190\u0191\u0005',
    '4\u001b\u0002\u01913\u0003\u0002\u0002\u0002\u0192\u019a\u0005,\u0017',
    '\u0002\u0193\u019a\u0007)\u0002\u0002\u0194\u019a\u0007\u001c\u0002',
    '\u0002\u0195\u019a\u0007\u001d\u0002\u0002\u0196\u019a\u00058\u001d',
    '\u0002\u0197\u019a\u0005\u001e\u0010\u0002\u0198\u019a\u0005.\u0018',
    '\u0002\u0199\u0192\u0003\u0002\u0002\u0002\u0199\u0193\u0003\u0002\u0002',
    '\u0002\u0199\u0194\u0003\u0002\u0002\u0002\u0199\u0195\u0003\u0002\u0002',
    '\u0002\u0199\u0196\u0003\u0002\u0002\u0002\u0199\u0197\u0003\u0002\u0002',
    '\u0002\u0199\u0198\u0003\u0002\u0002\u0002\u019a5\u0003\u0002\u0002',
    '\u0002\u019b\u019c\t\b\u0002\u0002\u019c7\u0003\u0002\u0002\u0002\u019d',
    '\u019e\u0007*\u0002\u0002\u019e9\u0003\u0002\u0002\u0002D<>MPZ_dkr{',
    '}\u0083\u0087\u008b\u008f\u0094\u0098\u00a0\u00a4\u00a8\u00ac\u00b1',
    '\u00b5\u00bd\u00c1\u00c5\u00c9\u00ce\u00d2\u00dc\u00e0\u00e3\u00e7\u00ec',
    '\u00f0\u00f5\u00f7\u0106\u0108\u010f\u0115\u011a\u011c\u0124\u0129\u012b',
    '\u0131\u0137\u013b\u0142\u0145\u0149\u014e\u0152\u0160\u0164\u0168\u016d',
    '\u0171\u0176\u017a\u017f\u0183\u0186\u0188\u0199',
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
FiszczLangParser.COMMENT = 25;
FiszczLangParser.INTEGER_NUMBER = 26;
FiszczLangParser.REAL_NUMBER = 27;
FiszczLangParser.ASTERISK = 28;
FiszczLangParser.SLASH = 29;
FiszczLangParser.PLUS = 30;
FiszczLangParser.MINUS = 31;
FiszczLangParser.EQUAL = 32;
FiszczLangParser.LESS_OR_EQUAL = 33;
FiszczLangParser.GREATER_OR_EQUAL = 34;
FiszczLangParser.GREATER_THAN = 35;
FiszczLangParser.LESS_THAN = 36;
FiszczLangParser.TYPE = 37;
FiszczLangParser.OPERATION_STRING = 38;
FiszczLangParser.VARIABLE_NAME = 39;
FiszczLangParser.TEXT = 40;
FiszczLangParser.W = 41;

FiszczLangParser.RULE_program = 0;
FiszczLangParser.RULE_instruction = 1;
FiszczLangParser.RULE_parameter = 2;
FiszczLangParser.RULE_definition = 3;
FiszczLangParser.RULE_single_element_definition = 4;
FiszczLangParser.RULE_array_definition = 5;
FiszczLangParser.RULE_int_definition = 6;
FiszczLangParser.RULE_real_definition = 7;
FiszczLangParser.RULE_string_definition = 8;
FiszczLangParser.RULE_int_array_definition = 9;
FiszczLangParser.RULE_real_array_definition = 10;
FiszczLangParser.RULE_string_array_definition = 11;
FiszczLangParser.RULE_new_operation = 12;
FiszczLangParser.RULE_element_number = 13;
FiszczLangParser.RULE_element_of_array = 14;
FiszczLangParser.RULE_print_instruction = 15;
FiszczLangParser.RULE_read_instruction = 16;
FiszczLangParser.RULE_while_instruction = 17;
FiszczLangParser.RULE_if_instruction = 18;
FiszczLangParser.RULE_return_instruction = 19;
FiszczLangParser.RULE_condition = 20;
FiszczLangParser.RULE_call_operation = 21;
FiszczLangParser.RULE_arithmetic_expression = 22;
FiszczLangParser.RULE_assignment = 23;
FiszczLangParser.RULE_array_element_assignment = 24;
FiszczLangParser.RULE_value = 25;
FiszczLangParser.RULE_type = 26;
FiszczLangParser.RULE_string = 27;

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
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 58;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FiszczLangParser.T__1:
                case FiszczLangParser.T__2:
                case FiszczLangParser.T__3:
                case FiszczLangParser.T__4:
                case FiszczLangParser.T__8:
                case FiszczLangParser.T__9:
                case FiszczLangParser.T__13:
                case FiszczLangParser.T__14:
                case FiszczLangParser.T__15:
                case FiszczLangParser.T__16:
                case FiszczLangParser.T__17:
                case FiszczLangParser.T__18:
                case FiszczLangParser.T__19:
                case FiszczLangParser.T__20:
                case FiszczLangParser.T__21:
                case FiszczLangParser.VARIABLE_NAME:
                    this.state = 56;
                    this.instruction();
                    break;
                case FiszczLangParser.W:
                    this.state = 57;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            ((_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__8) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__13) |
                        (1 << FiszczLangParser.T__14) |
                        (1 << FiszczLangParser.T__15) |
                        (1 << FiszczLangParser.T__16) |
                        (1 << FiszczLangParser.T__17) |
                        (1 << FiszczLangParser.T__18) |
                        (1 << FiszczLangParser.T__19) |
                        (1 << FiszczLangParser.T__20) |
                        (1 << FiszczLangParser.T__21))) !==
                    0) ||
            _la === FiszczLangParser.VARIABLE_NAME ||
            _la === FiszczLangParser.W
        );
        this.state = 62;
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
        this.state = 75;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
        switch (la_) {
            case 1:
                this.state = 64;
                this.new_operation();
                break;

            case 2:
                this.state = 65;
                this.definition();
                break;

            case 3:
                this.state = 66;
                this.print_instruction();
                break;

            case 4:
                this.state = 67;
                this.print_instruction();
                break;

            case 5:
                this.state = 68;
                this.read_instruction();
                break;

            case 6:
                this.state = 69;
                this.if_instruction();
                break;

            case 7:
                this.state = 70;
                this.while_instruction();
                break;

            case 8:
                this.state = 71;
                this.assignment();
                break;

            case 9:
                this.state = 72;
                this.array_element_assignment();
                break;

            case 10:
                this.state = 73;
                this.return_instruction();
                break;

            case 11:
                this.state = 74;
                this.call_operation();
                break;
        }
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 77;
            this.match(FiszczLangParser.W);
        }

        this.state = 80;
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
        this.state = 82;
        this.type();
        this.state = 83;
        this.match(FiszczLangParser.W);
        this.state = 84;
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
        this.state = 88;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FiszczLangParser.T__1:
            case FiszczLangParser.T__2:
            case FiszczLangParser.T__3:
                this.state = 86;
                this.single_element_definition();
                break;
            case FiszczLangParser.T__4:
            case FiszczLangParser.T__8:
            case FiszczLangParser.T__9:
                this.state = 87;
                this.array_definition();
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
        this.state = 93;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FiszczLangParser.T__1:
                this.state = 90;
                this.int_definition();
                break;
            case FiszczLangParser.T__2:
                this.state = 91;
                this.real_definition();
                break;
            case FiszczLangParser.T__3:
                this.state = 92;
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
        this.state = 98;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FiszczLangParser.T__4:
                this.state = 95;
                this.int_array_definition();
                break;
            case FiszczLangParser.T__8:
                this.state = 96;
                this.real_array_definition();
                break;
            case FiszczLangParser.T__9:
                this.state = 97;
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(FiszczLangParser.T__1);
        this.state = 101;
        this.match(FiszczLangParser.W);
        this.state = 102;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 105;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 7, this._ctx);
        if (la_ === 1) {
            this.state = 103;
            this.match(FiszczLangParser.W);
            this.state = 104;
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(FiszczLangParser.T__2);
        this.state = 108;
        this.match(FiszczLangParser.W);
        this.state = 109;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 8, this._ctx);
        if (la_ === 1) {
            this.state = 110;
            this.match(FiszczLangParser.W);
            this.state = 111;
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(FiszczLangParser.T__3);
        this.state = 115;
        this.match(FiszczLangParser.W);
        this.state = 116;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 123;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
        if (la_ === 1) {
            this.state = 117;
            this.match(FiszczLangParser.W);
            this.state = 121;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 9, this._ctx);
            switch (la_) {
                case 1:
                    this.state = 118;
                    this.string();
                    break;

                case 2:
                    this.state = 119;
                    this.match(FiszczLangParser.VARIABLE_NAME);
                    break;

                case 3:
                    this.state = 120;
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
    this.enterRule(localctx, 18, FiszczLangParser.RULE_int_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(FiszczLangParser.T__4);
        this.state = 126;
        this.match(FiszczLangParser.W);
        this.state = 127;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 128;
            this.match(FiszczLangParser.W);
        }

        this.state = 131;
        this.match(FiszczLangParser.T__5);
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 132;
            this.match(FiszczLangParser.W);
        }

        this.state = 135;
        this.match(FiszczLangParser.INTEGER_NUMBER);
        this.state = 146;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 136;
                    this.match(FiszczLangParser.W);
                }

                this.state = 139;
                this.match(FiszczLangParser.T__6);
                this.state = 141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 140;
                    this.match(FiszczLangParser.W);
                }

                this.state = 143;
                this.match(FiszczLangParser.INTEGER_NUMBER);
            }
            this.state = 148;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
        }

        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 149;
            this.match(FiszczLangParser.W);
        }

        this.state = 152;
        this.match(FiszczLangParser.T__7);
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
    this.enterRule(localctx, 20, FiszczLangParser.RULE_real_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(FiszczLangParser.T__8);
        this.state = 155;
        this.match(FiszczLangParser.W);
        this.state = 156;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 157;
            this.match(FiszczLangParser.W);
        }

        this.state = 160;
        this.match(FiszczLangParser.T__5);
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 161;
            this.match(FiszczLangParser.W);
        }

        this.state = 164;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.INTEGER_NUMBER || _la === FiszczLangParser.REAL_NUMBER)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 175;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 165;
                    this.match(FiszczLangParser.W);
                }

                this.state = 168;
                this.match(FiszczLangParser.T__6);
                this.state = 170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 169;
                    this.match(FiszczLangParser.W);
                }

                this.state = 172;
                _la = this._input.LA(1);
                if (!(_la === FiszczLangParser.INTEGER_NUMBER || _la === FiszczLangParser.REAL_NUMBER)) {
                    this._errHandler.recoverInline(this);
                } else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
            this.state = 177;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
        }

        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 178;
            this.match(FiszczLangParser.W);
        }

        this.state = 181;
        this.match(FiszczLangParser.T__7);
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
    this.enterRule(localctx, 22, FiszczLangParser.RULE_string_array_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(FiszczLangParser.T__9);
        this.state = 184;
        this.match(FiszczLangParser.W);
        this.state = 185;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 186;
            this.match(FiszczLangParser.W);
        }

        this.state = 189;
        this.match(FiszczLangParser.T__5);
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 190;
            this.match(FiszczLangParser.W);
        }

        this.state = 193;
        this.string();
        this.state = 204;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 195;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 194;
                    this.match(FiszczLangParser.W);
                }

                this.state = 197;
                this.match(FiszczLangParser.T__6);
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 198;
                    this.match(FiszczLangParser.W);
                }

                this.state = 201;
                this.string();
            }
            this.state = 206;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
        }

        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 207;
            this.match(FiszczLangParser.W);
        }

        this.state = 210;
        this.match(FiszczLangParser.T__7);
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
    this.enterRule(localctx, 24, FiszczLangParser.RULE_new_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.type();
        this.state = 213;
        this.match(FiszczLangParser.W);
        this.state = 214;
        this.match(FiszczLangParser.OPERATION_STRING);
        this.state = 215;
        this.match(FiszczLangParser.W);
        this.state = 216;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 217;
            this.match(FiszczLangParser.W);
        }

        this.state = 220;
        this.match(FiszczLangParser.T__10);

        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 30, this._ctx);
        if (la_ === 1) {
            this.state = 221;
            this.match(FiszczLangParser.W);
        }
        this.state = 225;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
            (_la & ~0x1f) == 0 &&
            ((1 << _la) &
                ((1 << FiszczLangParser.T__1) |
                    (1 << FiszczLangParser.T__2) |
                    (1 << FiszczLangParser.T__3) |
                    (1 << FiszczLangParser.T__4) |
                    (1 << FiszczLangParser.T__8) |
                    (1 << FiszczLangParser.T__9))) !==
                0
        ) {
            this.state = 224;
            this.parameter();
        }

        this.state = 234;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === FiszczLangParser.T__6) {
            this.state = 227;
            this.match(FiszczLangParser.T__6);
            this.state = 229;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === FiszczLangParser.W) {
                this.state = 228;
                this.match(FiszczLangParser.W);
            }

            this.state = 231;
            this.parameter();
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 238;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 237;
            this.match(FiszczLangParser.W);
        }

        this.state = 240;
        this.match(FiszczLangParser.T__11);
        this.state = 243;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 243;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FiszczLangParser.T__1:
                case FiszczLangParser.T__2:
                case FiszczLangParser.T__3:
                case FiszczLangParser.T__4:
                case FiszczLangParser.T__8:
                case FiszczLangParser.T__9:
                case FiszczLangParser.T__13:
                case FiszczLangParser.T__14:
                case FiszczLangParser.T__15:
                case FiszczLangParser.T__16:
                case FiszczLangParser.T__17:
                case FiszczLangParser.T__18:
                case FiszczLangParser.T__19:
                case FiszczLangParser.T__20:
                case FiszczLangParser.T__21:
                case FiszczLangParser.VARIABLE_NAME:
                    this.state = 241;
                    this.instruction();
                    break;
                case FiszczLangParser.W:
                    this.state = 242;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 245;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            ((_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__8) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__13) |
                        (1 << FiszczLangParser.T__14) |
                        (1 << FiszczLangParser.T__15) |
                        (1 << FiszczLangParser.T__16) |
                        (1 << FiszczLangParser.T__17) |
                        (1 << FiszczLangParser.T__18) |
                        (1 << FiszczLangParser.T__19) |
                        (1 << FiszczLangParser.T__20) |
                        (1 << FiszczLangParser.T__21))) !==
                    0) ||
            _la === FiszczLangParser.VARIABLE_NAME ||
            _la === FiszczLangParser.W
        );
        this.state = 247;
        this.match(FiszczLangParser.T__12);
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
    this.enterRule(localctx, 26, FiszczLangParser.RULE_element_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(FiszczLangParser.T__5);
        this.state = 250;
        this.value();
        this.state = 251;
        this.match(FiszczLangParser.T__7);
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
    this.enterRule(localctx, 28, FiszczLangParser.RULE_element_of_array);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 254;
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
    this.enterRule(localctx, 30, FiszczLangParser.RULE_print_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.T__13 || _la === FiszczLangParser.T__14)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 257;
        this.match(FiszczLangParser.W);
        this.state = 262;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 260;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FiszczLangParser.T__22:
                    case FiszczLangParser.INTEGER_NUMBER:
                    case FiszczLangParser.REAL_NUMBER:
                    case FiszczLangParser.VARIABLE_NAME:
                    case FiszczLangParser.TEXT:
                        this.state = 258;
                        this.value();
                        break;
                    case FiszczLangParser.W:
                        this.state = 259;
                        this.match(FiszczLangParser.W);
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                }
            }
            this.state = 264;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
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
    this.enterRule(localctx, 32, FiszczLangParser.RULE_read_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.T__15 || _la === FiszczLangParser.T__16)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 266;
        this.match(FiszczLangParser.W);
        this.state = 269;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 39, this._ctx);
        switch (la_) {
            case 1:
                this.state = 267;
                this.match(FiszczLangParser.VARIABLE_NAME);
                break;

            case 2:
                this.state = 268;
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
    this.enterRule(localctx, 34, FiszczLangParser.RULE_while_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.T__17 || _la === FiszczLangParser.T__18)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 272;
        this.match(FiszczLangParser.W);
        this.state = 273;
        this.condition();
        this.state = 275;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 274;
            this.match(FiszczLangParser.W);
        }

        this.state = 277;
        this.match(FiszczLangParser.T__11);
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 280;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FiszczLangParser.T__1:
                case FiszczLangParser.T__2:
                case FiszczLangParser.T__3:
                case FiszczLangParser.T__4:
                case FiszczLangParser.T__8:
                case FiszczLangParser.T__9:
                case FiszczLangParser.T__13:
                case FiszczLangParser.T__14:
                case FiszczLangParser.T__15:
                case FiszczLangParser.T__16:
                case FiszczLangParser.T__17:
                case FiszczLangParser.T__18:
                case FiszczLangParser.T__19:
                case FiszczLangParser.T__20:
                case FiszczLangParser.T__21:
                case FiszczLangParser.VARIABLE_NAME:
                    this.state = 278;
                    this.instruction();
                    break;
                case FiszczLangParser.W:
                    this.state = 279;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 282;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            ((_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__8) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__13) |
                        (1 << FiszczLangParser.T__14) |
                        (1 << FiszczLangParser.T__15) |
                        (1 << FiszczLangParser.T__16) |
                        (1 << FiszczLangParser.T__17) |
                        (1 << FiszczLangParser.T__18) |
                        (1 << FiszczLangParser.T__19) |
                        (1 << FiszczLangParser.T__20) |
                        (1 << FiszczLangParser.T__21))) !==
                    0) ||
            _la === FiszczLangParser.VARIABLE_NAME ||
            _la === FiszczLangParser.W
        );
        this.state = 284;
        this.match(FiszczLangParser.T__12);
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
    this.enterRule(localctx, 36, FiszczLangParser.RULE_if_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        _la = this._input.LA(1);
        if (!(_la === FiszczLangParser.T__19 || _la === FiszczLangParser.T__20)) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 287;
        this.match(FiszczLangParser.W);
        this.state = 288;
        this.condition();
        this.state = 290;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 289;
            this.match(FiszczLangParser.W);
        }

        this.state = 292;
        this.match(FiszczLangParser.T__11);
        this.state = 295;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 295;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FiszczLangParser.T__1:
                case FiszczLangParser.T__2:
                case FiszczLangParser.T__3:
                case FiszczLangParser.T__4:
                case FiszczLangParser.T__8:
                case FiszczLangParser.T__9:
                case FiszczLangParser.T__13:
                case FiszczLangParser.T__14:
                case FiszczLangParser.T__15:
                case FiszczLangParser.T__16:
                case FiszczLangParser.T__17:
                case FiszczLangParser.T__18:
                case FiszczLangParser.T__19:
                case FiszczLangParser.T__20:
                case FiszczLangParser.T__21:
                case FiszczLangParser.VARIABLE_NAME:
                    this.state = 293;
                    this.instruction();
                    break;
                case FiszczLangParser.W:
                    this.state = 294;
                    this.match(FiszczLangParser.W);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 297;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            ((_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__8) |
                        (1 << FiszczLangParser.T__9) |
                        (1 << FiszczLangParser.T__13) |
                        (1 << FiszczLangParser.T__14) |
                        (1 << FiszczLangParser.T__15) |
                        (1 << FiszczLangParser.T__16) |
                        (1 << FiszczLangParser.T__17) |
                        (1 << FiszczLangParser.T__18) |
                        (1 << FiszczLangParser.T__19) |
                        (1 << FiszczLangParser.T__20) |
                        (1 << FiszczLangParser.T__21))) !==
                    0) ||
            _la === FiszczLangParser.VARIABLE_NAME ||
            _la === FiszczLangParser.W
        );
        this.state = 299;
        this.match(FiszczLangParser.T__12);
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
    this.enterRule(localctx, 38, FiszczLangParser.RULE_return_instruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(FiszczLangParser.T__21);
        this.state = 303;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 302;
            this.match(FiszczLangParser.W);
        }

        this.state = 305;
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
    this.enterRule(localctx, 40, FiszczLangParser.RULE_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.value();
        this.state = 309;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 308;
            this.match(FiszczLangParser.W);
        }

        this.state = 311;
        _la = this._input.LA(1);
        if (
            !(
                ((_la - 32) & ~0x1f) == 0 &&
                ((1 << (_la - 32)) &
                    ((1 << (FiszczLangParser.EQUAL - 32)) |
                        (1 << (FiszczLangParser.LESS_OR_EQUAL - 32)) |
                        (1 << (FiszczLangParser.GREATER_OR_EQUAL - 32)) |
                        (1 << (FiszczLangParser.GREATER_THAN - 32)) |
                        (1 << (FiszczLangParser.LESS_THAN - 32)))) !==
                    0
            )
        ) {
            this._errHandler.recoverInline(this);
        } else {
            this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 313;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 312;
            this.match(FiszczLangParser.W);
        }

        this.state = 315;
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
    this.enterRule(localctx, 42, FiszczLangParser.RULE_call_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 318;
        this.match(FiszczLangParser.LESS_THAN);
        this.state = 320;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
            ((_la - 23) & ~0x1f) == 0 &&
            ((1 << (_la - 23)) &
                ((1 << (FiszczLangParser.T__22 - 23)) |
                    (1 << (FiszczLangParser.INTEGER_NUMBER - 23)) |
                    (1 << (FiszczLangParser.REAL_NUMBER - 23)) |
                    (1 << (FiszczLangParser.VARIABLE_NAME - 23)) |
                    (1 << (FiszczLangParser.TEXT - 23)))) !==
                0
        ) {
            this.state = 319;
            this.value();
        }

        this.state = 332;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                this.state = 323;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 322;
                    this.match(FiszczLangParser.W);
                }

                this.state = 325;
                this.match(FiszczLangParser.T__6);
                this.state = 327;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FiszczLangParser.W) {
                    this.state = 326;
                    this.match(FiszczLangParser.W);
                }

                this.state = 329;
                this.value();
            }
            this.state = 334;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
        }

        this.state = 336;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === FiszczLangParser.W) {
            this.state = 335;
            this.match(FiszczLangParser.W);
        }

        this.state = 338;
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
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, FiszczLangParser.RULE_arithmetic_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 54, this._ctx);
        switch (la_) {
            case 1:
                this.state = 341;
                this.match(FiszczLangParser.T__22);
                this.state = 342;
                this.arithmetic_expression(0);
                this.state = 343;
                this.match(FiszczLangParser.T__23);
                break;

            case 2:
                this.state = 345;
                this.call_operation();
                break;

            case 3:
                this.state = 346;
                this.match(FiszczLangParser.VARIABLE_NAME);
                break;

            case 4:
                this.state = 347;
                this.element_of_array();
                break;

            case 5:
                this.state = 348;
                this.match(FiszczLangParser.INTEGER_NUMBER);
                break;

            case 6:
                this.state = 349;
                this.match(FiszczLangParser.REAL_NUMBER);
                break;
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 390;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 388;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 63, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                        this.state = 352;
                        if (!this.precpred(this._ctx, 9)) {
                            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 9)');
                        }
                        this.state = 354;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 353;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 356;
                        this.match(FiszczLangParser.ASTERISK);
                        this.state = 358;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 357;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 360;
                        this.arithmetic_expression(10);
                        break;

                    case 2:
                        localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                        this.state = 361;
                        if (!this.precpred(this._ctx, 8)) {
                            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 8)');
                        }
                        this.state = 363;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 362;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 365;
                        this.match(FiszczLangParser.SLASH);
                        this.state = 367;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 366;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 369;
                        this.arithmetic_expression(9);
                        break;

                    case 3:
                        localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                        this.state = 370;
                        if (!this.precpred(this._ctx, 7)) {
                            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 7)');
                        }
                        this.state = 372;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 371;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 374;
                        this.match(FiszczLangParser.PLUS);
                        this.state = 376;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 375;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 378;
                        this.arithmetic_expression(8);
                        break;

                    case 4:
                        localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FiszczLangParser.RULE_arithmetic_expression);
                        this.state = 379;
                        if (!this.precpred(this._ctx, 6)) {
                            throw new antlr4.error.FailedPredicateException(this, 'this.precpred(this._ctx, 6)');
                        }
                        this.state = 381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 380;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 383;
                        this.match(FiszczLangParser.MINUS);
                        this.state = 385;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FiszczLangParser.W) {
                            this.state = 384;
                            this.match(FiszczLangParser.W);
                        }

                        this.state = 387;
                        this.arithmetic_expression(7);
                        break;
                }
            }
            this.state = 392;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
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

AssignmentContext.prototype.W = function () {
    return this.getToken(FiszczLangParser.W, 0);
};

AssignmentContext.prototype.value = function () {
    return this.getTypedRuleContext(ValueContext, 0);
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
    this.enterRule(localctx, 46, FiszczLangParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 393;
        this.match(FiszczLangParser.VARIABLE_NAME);
        this.state = 394;
        this.match(FiszczLangParser.W);
        this.state = 395;
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

Array_element_assignmentContext.prototype.value = function () {
    return this.getTypedRuleContext(ValueContext, 0);
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
    this.enterRule(localctx, 48, FiszczLangParser.RULE_array_element_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397;
        this.element_of_array();
        this.state = 398;
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
    this.enterRule(localctx, 50, FiszczLangParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 65, this._ctx);
        switch (la_) {
            case 1:
                this.state = 400;
                this.call_operation();
                break;

            case 2:
                this.state = 401;
                this.match(FiszczLangParser.VARIABLE_NAME);
                break;

            case 3:
                this.state = 402;
                this.match(FiszczLangParser.INTEGER_NUMBER);
                break;

            case 4:
                this.state = 403;
                this.match(FiszczLangParser.REAL_NUMBER);
                break;

            case 5:
                this.state = 404;
                this.string();
                break;

            case 6:
                this.state = 405;
                this.element_of_array();
                break;

            case 7:
                this.state = 406;
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
    this.enterRule(localctx, 52, FiszczLangParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 409;
        _la = this._input.LA(1);
        if (
            !(
                (_la & ~0x1f) == 0 &&
                ((1 << _la) &
                    ((1 << FiszczLangParser.T__1) |
                        (1 << FiszczLangParser.T__2) |
                        (1 << FiszczLangParser.T__3) |
                        (1 << FiszczLangParser.T__4) |
                        (1 << FiszczLangParser.T__8) |
                        (1 << FiszczLangParser.T__9))) !==
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
    this.enterRule(localctx, 54, FiszczLangParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
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
        case 22:
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
