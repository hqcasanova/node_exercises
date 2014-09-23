require('fs').readdir(process.argv[2], function(error, list) {
  var path = require('path'),
      numFiles,
      file,
      i = 0;

  if (error) {
      return console.log("There was an error: ", error);
  }
  numFiles = list.length;
  for (i; i < numFiles; i += 1) {
      file = list[i];
      if (path.extname(file).substr(1) === process.argv[3]) {
          console.log(file);
      }

  }
});