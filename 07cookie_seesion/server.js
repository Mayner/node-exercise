const express =require('express');

var server = express();
server.listen(8080);

server.use('/a', function (req, res) {
    // 设置cookie
    res.cookie('user', 'sky', {path: '/a', maxAge: 30*24*3600*1000});
    res.send('ok');
});