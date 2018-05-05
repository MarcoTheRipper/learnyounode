var net = require('net');
var server = net.createServer(function (socket) {
        dash="-"
        space = " "
        colon=":"
        newline="\n"
       var date = new Date();
       var year = date.getFullYear()+dash
       var month = zerofill(date.getMonth()+1)+dash
       var day = zerofill(date.getDate())+space
       var hour= date.getHours()+colon
       var minute = date.getMinutes()+newline
       socket.write(String(year+month+day+hour+minute));
     })
server.listen(process.argv[2])


function zerofill(num) {
    if(num.toString().length==1) {
        return "0"+num
    } else {
        return num
    }
}