const jade = require('jade');

var str = jade.renderFile('./views/5.jade', {pretty: true});

console.log(str);