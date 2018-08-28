const http = require('http');
const urlLib = require('url');

var server = http.createServer(function (req, res) {
    var obj = urlLib.parse(req.url, true);  // 不传true,则obj.query不被解析成对象
    var url = obj.pathname;
    var GET = obj.query;
    console.log(url, GET);

    res.write('ok');
    res.end();
});

server.listen(8080);