const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const common = require('./libs/common');

var server = express();
server.listen(8080);

// 连接数据库
const db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', database: 'blog'});

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

server.get('/', function (req, res, next) {
    db.query('SELECT * FROM banner_table;', function (err, data) {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.banners = data;
            next();
        }
    });
});

server.get('/', function (req, res, next) {
    db.query('SELECT ID,title,summary FROM article_table', function (err, data) {
        if (err) {
            res.status(500).send('database error').end();
        } else {
            res.articles = data;
            next();
        }
    });
});

server.get('/', function (req, res) {
    res.render('index.ejs', {banners: res.banners, articles: res.articles});
});

server.get('/article', function (req, res) {
    var id = req.query.id;
    if (id) {
        if (req.query.act == 'like') {
            db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${id}`, function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(500).send('database error').end();
                } else {
                    db.query(`SELECT * FROM article_table WHERE ID=${id}`, function (err, data) {
                        if (err) {
                            res.status(500).send('database error').end();
                        } else {
                            if (data.length == 0) {
                                res.status(404).send('您请求的文章找不到').end();
                            } else {
                                var article_data = data[0];
                                article_data.sDate = common.time2date(article_data.post_time);
                                article_data.content = article_data.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');
                                res.render('conText.ejs', {article_data: article_data});
                            }
                        }
                    });
                }
            });
        } else {
            db.query(`SELECT * FROM article_table WHERE ID=${id}`, function (err, data) {
                if (err) {
                    res.status(500).send('database error').end();
                } else {
                    if (data.length == 0) {
                        res.status(404).send('您请求的文章找不到').end();
                    } else {
                        var article_data = data[0];
                        article_data.sDate = common.time2date(article_data.post_time);
                        article_data.content = article_data.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');
                        res.render('conText.ejs', {article_data: article_data});
                    }
                }
            });
        }
    } else {
        res.status(404).send('您请求的文章找不到').end();
    }
});

// 读取静态文件数据
server.use(static('./www'));