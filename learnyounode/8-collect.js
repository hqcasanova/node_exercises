var http = require('http');

http.get(process.argv[2], function(response) {
    var dataArray = [];
    
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', function(data) {
        dataArray.push(data);
    });

    response.on('end', function() {
        var result = dataArray.join('');

        console.log(result.length);
        console.log(result);
    });
});