require('fs').readFile(process.argv[2], 'utf8', function(error, string) {
  if (error)
    return console.log("There was an error: ", error);

  console.log(string.split('\n').length - 1);   //Data is a buffer
});