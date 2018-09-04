const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');

var server = express();
server.listen(8080);

// 解析cookie
server.use(cookieParser('sdcoefoh23j230djw9823d223edwd23rdj'));

// 使用session
var arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({
    name: 'sess_id',
    keys: arr,
    maxAge: 20*3600*1000
}));

// 普通post数据解析
server.use(bodyParser.urlencoded({extended: false}));

// 文件上传解析
server.use(multer({dest: './www/upload'}).any());

// 配置模板引擎
// 输出什么东西
server.set('view engine', 'html');
// 模板文件放哪儿
server.set('views', './template');
// 使用哪种模板引擎
server.engine('html', consolidate.ejs);

server.get('/', function (req, res) {
    res.render('index.ejs', {}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

// 读取静态文件数据
server.use(static('./www'));