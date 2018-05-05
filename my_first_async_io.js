function callback(error, data) {
    var file = data.toString().split('\n');
    console.log(file.length-1)
}
var fs = require('fs');
var file = fs.readFile(process.argv[2], callback);