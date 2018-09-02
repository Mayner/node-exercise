const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');

var server = express();
server.listen(8080);

var objMulter = multer({dest: './www/upload'});
server.use(objMulter.any());

server.post('/', function (req, res) {
    console.log(req.files);
    // 获取原始文件扩展名后与原始文件名组成新文件名
    var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    // 重命名临时文件
    fs.rename(req.files[0].path, newName, function (err) {
        if(err) {
            console.log('失败');
        } else {
            console.log('成功');
        }
    });
});