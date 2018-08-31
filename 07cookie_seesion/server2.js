const express =require('express');
const cookieParser =require('cookie-parser');

var server = express();
server.listen(8080);

server.use(cookieParser('asddwsx09321e2dsae12d'));  // 加签名秘钥

server.use('/', function (req, res) {
    // 设置cookie
    res.cookie('user', 'sky', {signed: true});
    
    req.secret = 'asddwsx09321e2dsae12d'    // 此句可不写
    console.log('无签名cookie: ', req.cookies);
    console.log('签名cookie: ', req.signedCookies);
    res.send('ok');
});