var dir = process.argv[2];
var extension = process.argv[3];
var mymodule = require('./make_it_modular_module.js');

mymodule(dir, extension, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach(function (file) {
            console.log(file);
        })
    }
});