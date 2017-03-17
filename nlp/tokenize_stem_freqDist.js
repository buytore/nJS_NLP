/**
 * Tokenize, stopword removal, stemming and frequency distribution.
 */

/**
 * MODULES.
 */
var nlp = require('nlp-toolkit');
var fs = require('fs');
var es = require('event-stream');


/**
 * NLP.
 */
fs.createReadStream('./texts/pride_prejudice.txt')
.pipe(es.split())
.pipe(nlp.tokenizer())
.pipe(nlp.stopwords())
.pipe(nlp.stemmer())
.pipe(nlp.frequency())
.on('data', function (fDist) {
  console.log(fDist);
})
.on('error', function (err) {
  console.error(err);
});