const http = require('http');
const querystring = require('querystring');

var server = http.createServer(function (req, res) {
    var str = '';
    //data——有一段数据到达(很多次)
    req.on('data', function (data) {
        str += data;
    });
    //end——数据全部到达(一次)
    req.on('end', function () {
        var POST = querystring.parse(str);
        console.log(POST);
    });
    res.write('OK');
    res.end();
});

server.listen(8080);