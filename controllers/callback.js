
var renderTitleH1 = function(title){
    var tagBody = document.querySelector('body');
    tagBody.innerHTML = `<h1>${title}</h1>`
}

// var main = function(title){
//     var tagBody = document.querySelector('body');
//     tagBody.innerHTML = `<h1>${title}</h1>`
// }

// main('khải');

var main = function(callback){
    callback('khải');
}


// main(renderTitleH1);