var server = require('http').createServer(function (request, response) {
  require('fs').createReadStream(process.argv[3]).pipe(response);
});
server.listen(process.argv[2]);