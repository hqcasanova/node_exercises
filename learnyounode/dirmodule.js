module.exports = function(dirName, extension, callback) {
    require('fs').readdir(dirName, function(error, list) {
        var path = require('path'),
            data = [],
            numFiles,
            i = 0;

        if (error) {
            return callback(error);
        }
        
        numFiles = list.length;
        for (i; i < numFiles; i += 1) {
            file = list[i];
            if (path.extname(file).substr(1) === extension) {
                data.push(file);
            }
        }
        callback(null, data);
  });
}