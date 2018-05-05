var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var server = http.createServer((request, response) => {
    var body = "";
    
    
    request.on('data', function (chunk) {
        body += chunk.toString();
    }).pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
    
    response.writeHead(200, { 'content-type': 'text/plain' });
})

server.listen(process.argv[2]);