var dirmodule = require('./dirmodule.js');

dirmodule(process.argv[2], process.argv[3], function(error, list) {
    var numFiles = list.length,
        i = 0;
        
    if (error) {
        return console.log("There was an error: ", error);
    }
    for (i; i < numFiles; i += 1) {
        console.log(list[i]);
    }
});



