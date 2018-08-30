const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./views/1.jade', {pretty: true});

console.log(str);

fs.writeFile('./build/1.html', str, function (err) {
    if (err) {
        console.log('写入失败', err);
    } else {
        console.log('写入成功');
    }
});