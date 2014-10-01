var buffer;

buffer = require('fs').readFileSync(process.argv[2]);
if (!buffer) {
    return console.log("There was an error: ", error);
} else { 
    console.log(buffer.toString().split('\n').length - 1);
}




