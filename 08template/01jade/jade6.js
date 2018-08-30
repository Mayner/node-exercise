const jade = require('jade');

var str = jade.renderFile('./views/6.jade', {pretty: true, a: 2, b: 5});

console.log(str);