const express = require('express');
const expressStatic = require('express-static');

var server = express();
server.listen(8080);
var dbUser = {
    'mayner': '123',
    'zhangsan': '456',
    'lisi': '666'
};
server.use('/login', function (req, res) {
    const user = req.query['user'];
    const password = req.query['password'];
    if (dbUser[user] == null) {
        res.send({ok: false, msg: '此用户不存在'});
    } else if (dbUser[user] != password) {
        res.send({ok: false, msg: '密码错误'});
    } else {
        res.send({ok: true, msg: '登录成功'});
    }
});

server.use(expressStatic('./www'));