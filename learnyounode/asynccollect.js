var http = require('http'),
    urls = process.argv.slice(2, process.argv.length),
    numberReq,
    dataResponses = [];

numberReq = urls.length;
 
urls.map(function(currentUrl, index, array) {
    http.get(currentUrl,function(response) {
        var dataStr = '';

        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', function(data) {
            dataStr += data;
        });
        response.on('end', function() {
            dataResponses[index] = dataStr;
            numberReq--;
   
            if (numberReq === 0) {
                dataResponses.map(function(result) {
                    console.log(result);
                });
            } 
        });
    });
});