let natural = require("natural")
let StemmerUK = require('./lib/stemmers/porter_stemmer_uk');
let TokenizerUK = require('./lib/tokenizers/aggressive_tokenizer_uk');


const tokenize = ({ text, locale }) => {

    locale = locale || "en"

    let tokenizer = (locale == "en")
                            ? new natural.AggressiveTokenizer()
                            : (locale == "ru")
                                ? new natural.AggressiveTokenizerRu()
                                : (locale == "uk")
                                    ? new TokenizerUK()
                                    : new natural.AggressiveTokenizer();                            

    return tokenizer.tokenize(text)                              

}


module.exports = tokenize