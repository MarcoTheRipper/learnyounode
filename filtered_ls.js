function callback(err, data) {
    var extension = "."+process.argv[3];
    for (i=0; i<data.length; i++) {
        if (path.extname(data[i]) == extension) {
            console.log(data[i])
        }
    }
}

var dir = process.argv[2];
var fs = require('fs');
var path = require('path');

fs.readdir(dir, callback);