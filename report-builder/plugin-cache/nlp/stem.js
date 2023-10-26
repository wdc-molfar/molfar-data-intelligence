let natural = require("natural")
let StemmerUK = require('./lib/stemmers/porter_stemmer_uk');

const stem = ({ text, locale }) => {

    locale = locale || "en"

    let stemmer = (locale == "en")
                            ? natural.PorterStemmer
                            : (locale == "ru")
                                ? natural.PorterStemmerRu
                                : (locale == "uk")
                                    ? StemmerUK
                                    : natural.PorterStemmer;

    
    return stemmer.tokenizeAndStem(text)                                

}

module.exports = stem

