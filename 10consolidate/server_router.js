const express = require('express');

var server = express();

// 目录1：/user/
var userRouter = express.Router();

userRouter.get('/1.html', function (req, res) {         // 访问地址：http://xxx.com/user/1.html
    res.send('user1.html');
});
userRouter.get('/2.html', function (req, res) {         // 访问地址：http://xxx.com/user/2.html
    res.send('user2.html');
});

server.use('/user', userRouter);

// 目录2：/article/
var articleRouter = express.Router(); 

articleRouter.get('/101.html', function (req, res) {
    res.send('article101.html');
});
articleRouter.get('/102.html', function (req, res) {
    res.send('article102.html');
});

server.use('/article', articleRouter);

server.listen(8080);