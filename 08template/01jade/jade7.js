const jade = require('jade');

var str = jade.renderFile('./views/7.jade', {pretty: true,
    arr: ['asd', 'sdsd', 'asdadadasd'],
    content: "<h2>你好</h2><p>大家好，才是真的好！</p>"
});

console.log(str);