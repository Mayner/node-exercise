const express =require('express');
const cookieParser =require('cookie-parser');
const cookieSession =require('cookie-session');

var server = express();
server.listen(8080);

server.use(cookieParser());
server.use(cookieSession({
    keys: ['aa', 'bb', 'cc']
}));

server.use('/', function (req, res) {
    console.log(req.session);

    res.send('ok');
});