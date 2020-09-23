var webmake = require('webmake');
var minify = require('@node-minify/core');
var uglify = require('@node-minify/uglify-es');

webmake('src/carota.js', { output: 'carota-debug.js' }, function(result) {
    if (!result) {
        console.log('All good');
    } else {
        console.log(result);
    }
});

minify({
    compressor: uglify,
    input: 'carota-debug.js',
    output: 'carota-min.js',
    callback: function(err, min){
        if (err) {
            console.log(err);
        }
    }
});
