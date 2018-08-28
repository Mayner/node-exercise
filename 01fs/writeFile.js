const fs = require('fs');

fs.writeFile('./www/a.txt', '我是写入的文件', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('写入成功');
    }
});