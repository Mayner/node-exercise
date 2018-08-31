const express =require('express');
const cookieParser =require('cookie-parser');

var server = express();
server.listen(8080);

server.use(cookieParser());

server.use('/a', function (req, res) {
    // 设置cookie
    res.cookie('user', 'sky', {path: '/a', maxAge: 30*24*3600*1000});
    // 读取cookie
    console.log(req.cookies);
    res.send('ok');
});