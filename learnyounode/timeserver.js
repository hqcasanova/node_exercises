var server = require('net').createServer(function(socket) {
    var date = new Date();
    var mins = date.getMinutes(),
        hours = date.getHours(),
        day = date.getDate(),
        month = date.getMonth() + 1,    // starts at 0
        year = date.getFullYear();
    
    console.log(date);

    if (month < 10) {
        month = "0" + month;
    }
    console.log(month);

    socket.end(year + "-" + month + "-" + day + " " + hours + ":" + mins + "\n");
});
 
server.listen(process.argv[2]);