const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');

var server = express();
server.listen(8080);

// 解析cookie
server.use(cookieParser('alsdewhldsjoiewnjdo23332dw23dadjoi'));

// 使用session
var arr = [];
for (var i =0; i < 100000; i++) {
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({
    name: 'sess_id',
    keys: arr,
    maxAge: 20*3600*1000
}));

// post数据
server.use(bodyParser.urlencoded({extended: false}));   // 普通post数据处理
server.use(multer({dest: './www/upload'}).any());       // 文件上传处理

// 处理用户请求
server.use('/', function (req, res, next) {
    console.log(req.query, req.body, req.files, req.cookies, req.session);
});

// 读取静态文件数据的路径
server.use(expressStatic('./www'));