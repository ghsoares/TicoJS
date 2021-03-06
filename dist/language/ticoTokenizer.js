import Tokenizer from "./tokenizer";
export var TokenEnum;
(function (TokenEnum) {
    // Ignored tokens
    TokenEnum[TokenEnum["IgnoreMin"] = 0] = "IgnoreMin";
    TokenEnum[TokenEnum["IgnoreMultilineComment"] = 1] = "IgnoreMultilineComment";
    TokenEnum[TokenEnum["IgnoreComment"] = 2] = "IgnoreComment";
    TokenEnum[TokenEnum["IgnoreWhitespace"] = 3] = "IgnoreWhitespace";
    TokenEnum[TokenEnum["IgnoreMax"] = 4] = "IgnoreMax";
    // Keywords
    TokenEnum[TokenEnum["KeywordMin"] = 5] = "KeywordMin";
    TokenEnum[TokenEnum["KeywordFunction"] = 6] = "KeywordFunction";
    TokenEnum[TokenEnum["KeywordReturn"] = 7] = "KeywordReturn";
    TokenEnum[TokenEnum["KeywordIf"] = 8] = "KeywordIf";
    TokenEnum[TokenEnum["KeywordElse"] = 9] = "KeywordElse";
    TokenEnum[TokenEnum["KeywordElif"] = 10] = "KeywordElif";
    TokenEnum[TokenEnum["KeywordWhile"] = 11] = "KeywordWhile";
    TokenEnum[TokenEnum["KeywordFor"] = 12] = "KeywordFor";
    TokenEnum[TokenEnum["KeywordBreak"] = 13] = "KeywordBreak";
    TokenEnum[TokenEnum["KeywordMax"] = 14] = "KeywordMax";
    // Literals
    TokenEnum[TokenEnum["LiteralMin"] = 15] = "LiteralMin";
    TokenEnum[TokenEnum["LiteralNumber"] = 16] = "LiteralNumber";
    TokenEnum[TokenEnum["LiteralBigInt"] = 17] = "LiteralBigInt";
    TokenEnum[TokenEnum["LiteralString"] = 18] = "LiteralString";
    TokenEnum[TokenEnum["LiteralBoolean"] = 19] = "LiteralBoolean";
    TokenEnum[TokenEnum["LiteralNull"] = 20] = "LiteralNull";
    TokenEnum[TokenEnum["LiteralUndefined"] = 21] = "LiteralUndefined";
    TokenEnum[TokenEnum["LiteralMax"] = 22] = "LiteralMax";
    // Binary operators
    TokenEnum[TokenEnum["BinaryOpMin"] = 23] = "BinaryOpMin";
    TokenEnum[TokenEnum["BinaryOpPlus"] = 24] = "BinaryOpPlus";
    TokenEnum[TokenEnum["BinaryOpMinus"] = 25] = "BinaryOpMinus";
    TokenEnum[TokenEnum["BinaryOpStar"] = 26] = "BinaryOpStar";
    TokenEnum[TokenEnum["BinaryOpStarStar"] = 27] = "BinaryOpStarStar";
    TokenEnum[TokenEnum["BinaryOpSlash"] = 28] = "BinaryOpSlash";
    TokenEnum[TokenEnum["BinaryOpSlashSlash"] = 29] = "BinaryOpSlashSlash";
    TokenEnum[TokenEnum["BinaryOpModulus"] = 30] = "BinaryOpModulus";
    TokenEnum[TokenEnum["BinaryOpModulusModulus"] = 31] = "BinaryOpModulusModulus";
    TokenEnum[TokenEnum["BinaryOpMax"] = 32] = "BinaryOpMax";
    // Conditional Operators
    TokenEnum[TokenEnum["ConditionalOpMin"] = 33] = "ConditionalOpMin";
    TokenEnum[TokenEnum["ConditionalOpGreater"] = 34] = "ConditionalOpGreater";
    TokenEnum[TokenEnum["ConditionalOpLess"] = 35] = "ConditionalOpLess";
    TokenEnum[TokenEnum["ConditionalOpGreaterEqual"] = 36] = "ConditionalOpGreaterEqual";
    TokenEnum[TokenEnum["ConditionalOpLessEqual"] = 37] = "ConditionalOpLessEqual";
    TokenEnum[TokenEnum["ConditionalOpEqual"] = 38] = "ConditionalOpEqual";
    TokenEnum[TokenEnum["ConditionalOpNotEqual"] = 39] = "ConditionalOpNotEqual";
    TokenEnum[TokenEnum["ConditionalAnd"] = 40] = "ConditionalAnd";
    TokenEnum[TokenEnum["ConditionalOr"] = 41] = "ConditionalOr";
    TokenEnum[TokenEnum["ConditionalOpMax"] = 42] = "ConditionalOpMax";
    // Symbols
    TokenEnum[TokenEnum["SymbolMin"] = 43] = "SymbolMin";
    TokenEnum[TokenEnum["SymbolEquals"] = 44] = "SymbolEquals";
    TokenEnum[TokenEnum["SymbolParOpen"] = 45] = "SymbolParOpen";
    TokenEnum[TokenEnum["SymbolParClose"] = 46] = "SymbolParClose";
    TokenEnum[TokenEnum["SymbolCurlyBracketOpen"] = 47] = "SymbolCurlyBracketOpen";
    TokenEnum[TokenEnum["SymbolCurlyBracketClose"] = 48] = "SymbolCurlyBracketClose";
    TokenEnum[TokenEnum["SymbolBracketOpen"] = 49] = "SymbolBracketOpen";
    TokenEnum[TokenEnum["SymbolBracketClose"] = 50] = "SymbolBracketClose";
    TokenEnum[TokenEnum["SymbolComma"] = 51] = "SymbolComma";
    TokenEnum[TokenEnum["SymbolExclamationMark"] = 52] = "SymbolExclamationMark";
    TokenEnum[TokenEnum["SymbolSemicolon"] = 53] = "SymbolSemicolon";
    TokenEnum[TokenEnum["SymbolMax"] = 54] = "SymbolMax";
    // Extra
    TokenEnum[TokenEnum["ExtraMin"] = 55] = "ExtraMin";
    TokenEnum[TokenEnum["ExtraIdentifier"] = 56] = "ExtraIdentifier";
    TokenEnum[TokenEnum["ExtraMax"] = 57] = "ExtraMax";
})(TokenEnum || (TokenEnum = {}));
export default class TicoTokenizer extends Tokenizer {
    constructor() {
        super();
        this.addTokenDefinition(TokenEnum.IgnoreMultilineComment, /#\*(\s|\S)*?\*#/, true);
        this.addTokenDefinition(TokenEnum.IgnoreComment, /#.*/, true);
        this.addTokenDefinition(TokenEnum.IgnoreWhitespace, /[\s\n\r]+/, true);
        this.addKeywords();
        this.addLiterals();
        this.addBinaryOps();
        this.addConditionalOps();
        this.addSymbols();
        this.addExtra();
    }
    addKeywords() {
        const expectedNumTokens = 8;
        if (TokenEnum.KeywordMax - TokenEnum.KeywordMin - 1 !== expectedNumTokens) {
            throw new Error(`New keywords added, update this function`);
        }
        for (let i = TokenEnum.KeywordMin + 1; i < TokenEnum.KeywordMax; i++) {
            let expressions = [];
            switch (i) {
                case TokenEnum.KeywordFunction:
                    {
                        expressions = [/function/];
                    }
                    break;
                case TokenEnum.KeywordReturn:
                    {
                        expressions = [/return/];
                    }
                    break;
                case TokenEnum.KeywordIf:
                    {
                        expressions = [/if/];
                    }
                    break;
                case TokenEnum.KeywordElse:
                    {
                        expressions = [/else/];
                    }
                    break;
                case TokenEnum.KeywordElif:
                    {
                        expressions = [/elif/];
                    }
                    break;
                case TokenEnum.KeywordWhile:
                    {
                        expressions = [/while/];
                    }
                    break;
                case TokenEnum.KeywordFor:
                    {
                        expressions = [/for/];
                    }
                    break;
                case TokenEnum.KeywordBreak:
                    {
                        expressions = [/break/];
                    }
                    break;
                default: throw new Error(`Not implemented`);
            }
            for (const exp of expressions) {
                this.addTokenDefinition(i, exp);
            }
        }
    }
    addLiterals() {
        const expectedNumTokens = 6;
        if (TokenEnum.LiteralMax - TokenEnum.LiteralMin - 1 !== expectedNumTokens) {
            throw new Error(`New literals added, update this function`);
        }
        for (let i = TokenEnum.LiteralMin + 1; i < TokenEnum.LiteralMax; i++) {
            let expressions = [];
            switch (i) {
                case TokenEnum.LiteralNumber:
                    {
                        expressions = [
                            /[+-]?\d+/,
                            /[+-]?\d+\.\d*/
                        ];
                    }
                    break;
                case TokenEnum.LiteralBigInt:
                    {
                        expressions = [
                            /([+-]?\d+)n/,
                            /BigInt\((.+)\)/,
                        ];
                    }
                    break;
                case TokenEnum.LiteralString:
                    {
                        expressions = [
                            /"(.*?)"/,
                            /'(.*?)'/,
                            /`(.*?)`/
                        ];
                    }
                    break;
                case TokenEnum.LiteralBoolean:
                    {
                        expressions = [/true|false/];
                    }
                    break;
                case TokenEnum.LiteralNull:
                    {
                        expressions = [/null/];
                    }
                    break;
                case TokenEnum.LiteralUndefined:
                    {
                        expressions = [/undefined/];
                    }
                    break;
                default: throw new Error(`Not implemented`);
            }
            for (const exp of expressions) {
                this.addTokenDefinition(i, exp);
            }
        }
    }
    addBinaryOps() {
        const expectedNumTokens = 8;
        if (TokenEnum.BinaryOpMax - TokenEnum.BinaryOpMin - 1 !== expectedNumTokens) {
            throw new Error(`New binary operators added, update this function`);
        }
        for (let i = TokenEnum.BinaryOpMin + 1; i < TokenEnum.BinaryOpMax; i++) {
            let expressions = [];
            switch (i) {
                case TokenEnum.BinaryOpPlus:
                    {
                        expressions = [/\+/];
                    }
                    break;
                case TokenEnum.BinaryOpMinus:
                    {
                        expressions = [/-/];
                    }
                    break;
                case TokenEnum.BinaryOpStar:
                    {
                        expressions = [/\*/];
                    }
                    break;
                case TokenEnum.BinaryOpStarStar:
                    {
                        expressions = [/\*\*/];
                    }
                    break;
                case TokenEnum.BinaryOpSlash:
                    {
                        expressions = [/\//];
                    }
                    break;
                case TokenEnum.BinaryOpSlashSlash:
                    {
                        expressions = [/\/\//];
                    }
                    break;
                case TokenEnum.BinaryOpModulus:
                    {
                        expressions = [/%/];
                    }
                    break;
                case TokenEnum.BinaryOpModulusModulus:
                    {
                        expressions = [/%%/];
                    }
                    break;
                default: throw new Error(`Not implemented`);
            }
            for (const exp of expressions) {
                this.addTokenDefinition(i, exp);
            }
        }
    }
    addConditionalOps() {
        const expectedNumTokens = 8;
        if (TokenEnum.ConditionalOpMax - TokenEnum.ConditionalOpMin - 1 !== expectedNumTokens) {
            throw new Error(`New binary operators added, update this function`);
        }
        for (let i = TokenEnum.ConditionalOpMin + 1; i < TokenEnum.ConditionalOpMax; i++) {
            let expressions = [];
            switch (i) {
                case TokenEnum.ConditionalOpGreater:
                    {
                        expressions = [/>/];
                    }
                    break;
                case TokenEnum.ConditionalOpLess:
                    {
                        expressions = [/</];
                    }
                    break;
                case TokenEnum.ConditionalOpGreaterEqual:
                    {
                        expressions = [/>=/];
                    }
                    break;
                case TokenEnum.ConditionalOpLessEqual:
                    {
                        expressions = [/<=/];
                    }
                    break;
                case TokenEnum.ConditionalOpEqual:
                    {
                        expressions = [/==/];
                    }
                    break;
                case TokenEnum.ConditionalOpNotEqual:
                    {
                        expressions = [/!=/];
                    }
                    break;
                case TokenEnum.ConditionalAnd:
                    {
                        expressions = [/&&/];
                    }
                    break;
                case TokenEnum.ConditionalOr:
                    {
                        expressions = [/\|\|/];
                    }
                    break;
                default: throw new Error(`Not implemented`);
            }
            for (const exp of expressions) {
                this.addTokenDefinition(i, exp);
            }
        }
    }
    addSymbols() {
        const expectedNumTokens = 10;
        if (TokenEnum.SymbolMax - TokenEnum.SymbolMin - 1 !== expectedNumTokens) {
            throw new Error(`New symbols added, update this function`);
        }
        for (let i = TokenEnum.SymbolMin + 1; i < TokenEnum.SymbolMax; i++) {
            let expressions = [];
            switch (i) {
                case TokenEnum.SymbolEquals:
                    {
                        expressions = [/=/];
                    }
                    break;
                case TokenEnum.SymbolParOpen:
                    {
                        expressions = [/\(/];
                    }
                    break;
                case TokenEnum.SymbolParClose:
                    {
                        expressions = [/\)/];
                    }
                    break;
                case TokenEnum.SymbolCurlyBracketOpen:
                    {
                        expressions = [/\{/];
                    }
                    break;
                case TokenEnum.SymbolCurlyBracketClose:
                    {
                        expressions = [/\}/];
                    }
                    break;
                case TokenEnum.SymbolBracketOpen:
                    {
                        expressions = [/\[/];
                    }
                    break;
                case TokenEnum.SymbolBracketClose:
                    {
                        expressions = [/\]/];
                    }
                    break;
                case TokenEnum.SymbolComma:
                    {
                        expressions = [/,/];
                    }
                    break;
                case TokenEnum.SymbolExclamationMark:
                    {
                        expressions = [/!/];
                    }
                    break;
                case TokenEnum.SymbolSemicolon:
                    {
                        expressions = [/;/];
                    }
                    break;
                default: throw new Error(`Not implemented`);
            }
            for (const exp of expressions) {
                this.addTokenDefinition(i, exp);
            }
        }
    }
    addExtra() {
        const expectedNumTokens = 1;
        if (TokenEnum.ExtraMax - TokenEnum.ExtraMin - 1 !== expectedNumTokens) {
            throw new Error(`New extra tokens added, update this function`);
        }
        for (let i = TokenEnum.ExtraMin + 1; i < TokenEnum.ExtraMax; i++) {
            let expressions = [];
            switch (i) {
                case TokenEnum.ExtraIdentifier:
                    {
                        expressions = [/[_a-zA-Z]\w*/];
                    }
                    break;
                default: throw new Error(`Not implemented`);
            }
            for (const exp of expressions) {
                this.addTokenDefinition(i, exp);
            }
        }
    }
}
