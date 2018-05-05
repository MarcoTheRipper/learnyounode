module.exports = function(dir, extension, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dir, function (err, data) {
        if (err) {
            return callback(err);
        }
        var ext = "."+extension;
        var result = [];
        for (i=0; i<data.length; i++) {
            if (path.extname(data[i]) == ext) {
                result.push(data[i]);
            }
        }
        callback (null, result);
    });
}