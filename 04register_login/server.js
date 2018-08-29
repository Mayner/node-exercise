const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var dbUser = {};  // {"blue": "123456", "mayner": "666666"}

var server = http.createServer(function (req, res) {
    // 解析数据
    var str = '';
    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function () {
        var obj = urlLib.parse(req.url, true);
        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
        console.log(url, GET, POST);
        
        // 区分接口、文件
        if (url == '/user') {
            // 访问接口
            switch (POST.act) {
                case 'reg':
                    // 检查用户名是否存在
                    if (dbUser[POST.user]) {
                        res.write('{"ok": false, "msg": "此用户已存在"}');
                    } else {
                        // 数据存入dbUser
                        dbUser[POST.user] = POST.password;
                        res.write('{"ok": true, "msg": "注册成功"}');
                    }
                    break;
                case 'login':
                    // 检查用户名是否存在
                    if (dbUser[POST.user] == null) {
                        res.write('{"ok": false, "msg": "此用户不存在"}');
                    // 检查用户名密码
                    } else if (dbUser[POST.user] !== POST.password) {
                        res.write('{"ok": false, "msg": "用户名或密码错误"}');
                    } else {
                        res.write('{"ok": true,"msg":"登录成功"}');
                    }
                    break;
                default:
                    res.write('{"ok": false, "msg": "未知的act"}');
                    break;
            }
            res.end();
        } else {
            // 读取文件
            var file_name = './www' + url;
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }
                res.end();
            });
        }
    });
});

server.listen(8080);