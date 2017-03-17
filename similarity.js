/**
 * Created by markbannan on 3/3/2017.
 */
var natural = require('natural');
var natural = require('natural'), TfIdf = natural.TfIdf, tfidf = new TfIdf();
var fs = require('fs');


var path = 'corps/';
//var path = process.argv[2];

var listFiles = fs.readdirSync(path);
var docList = [];


for (var i = 0; i < listFiles.length; i++) {
    //console.log(listFiles[i]);
    content = fs.readFileSync(path + listFiles[i], 'utf8');
    docList.push(content.substr(0,content.indexOf(":")));
    natural.PorterStemmer.attach();
    stemmedContent = content.tokenizeAndStem();
    tfidf.addDocument(stemmedContent);
    content = '';
}

//searchTerm = "I want to build a video for a project I'm working on".tokenizeAndStem();
searchTerm = "We are evaluating the costs and benefits of our last project".tokenizeAndStem();
//searchTerm = "Cost advantage benefit".tokenizeAndStem();
//searchTerm = "videos".tokenizeAndStem();
console.log('Search Terms: ' + searchTerm);

var ranking = [];
tfidf.tfidfs(searchTerm, function(i, measure) {
    ranking.push([i, measure]);
    console.log('document #' + i + ' is ' + measure)
});

function sortMultiDimensional(a,b)
{
    // for instance, this will sort the array using the second element
    return ((a[1] > b[1]) ? -1 : ((a[1] < b[1]) ? 1 : 0));
}

delArray = ranking.sort(sortMultiDimensional);
var newDelArray = [];
for(var i = 0; i < delArray.length; i++) {
    if (delArray[i][1] > 0) {
        newDelArray.push(docList[delArray[i][0]]);
    }
}

console.log(ranking.sort(sortMultiDimensional));
console.log(newDelArray);
