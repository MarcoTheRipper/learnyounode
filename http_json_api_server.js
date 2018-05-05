var http = require('http');
var urlparse = require('url');

var server = http.createServer((request, response) => {
    if (request.method === "GET") {
    var body = "";
    var url = urlparse.parse(request.url);
    var query = url.query.split("=")[1];
    var date = new Date(query);
    
    if (url.pathname === "/api/parsetime") {
        var responses = {};
        response.writeHead(200, { 'content-type': 'application/json' });
        responses["hour"] = date.getHours();
        responses["minute"] = date.getMinutes();
        responses["second"] = date.getSeconds();
        response.end(JSON.stringify(responses));
        
    } else if (url.pathname === "/api/unixtime") {
        var responses = {};
        response.writeHead(200, { 'content-type': 'application/json' });
        responses["unixtime"] = date.getTime();
        response.end(JSON.stringify(responses));
        
    } else {
        response.writeHead(404, { 'content-type': 'text/plain' });
        response.write("UNKNOWN");
        response.end();
    }
    } else {
        response.writeHead(404, { 'content-type': 'text/plain' });
        response.write("Unsupported");
        response.end();
    }
})

server.listen(process.argv[2]);