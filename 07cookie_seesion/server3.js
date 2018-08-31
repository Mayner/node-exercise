const express =require('express');
const cookieParser =require('cookie-parser');

var server = express();
server.listen(8080);

server.use(cookieParser('asddwsx09321e2dsae12d'));

server.use('/', function (req, res) {
    // 清除cookie
    res.clearCookie('user');

    res.send('ok');
});