var bl = require('bl');
var url = process.argv[2];
var http = require('http');

http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }))
});