var natural = require('natural'),
    stemmer = natural.PorterStemmer;

var stem = stemmer.stem('video');
console.log("video => " + stem);
stem = stemmer.stem('videographer');
console.log("videographer => " + stem);
stem = stemmer.stem('Videography');
console.log("Videography => " + stem);
stem = stemmer.stem('videotape');
console.log("videotape => " + stem);


console.log(natural.JaroWinklerDistance("project","projection"));
console.log(natural.JaroWinklerDistance("videography", "movie"));
console.log(natural.JaroWinklerDistance('not', 'same'));

console.log(natural.PorterStemmer.stem("activities"));



//tfidf.addDocument('this document is about node.');
//tfidf.addDocument('this document is about ruby.');
//tfidf.addDocument('this document is about ruby and node.');
//tfidf.addDocument('this document is about node. it has node examples');
//console.log('Docs with the word -- examples  ------------------------');
//console.log(tfidf.tfidf('examples', 3));

//console.log("JaroWinkler Distance: " + natural.JaroWinklerDistance('execution', 'intention'));
//console.log("Levenshtein Distance: " + natural.LevenshteinDistance('execution', 'intention'));
//console.log("Dice Coefficient: " + natural.DiceCoefficient('execution', 'intention'));