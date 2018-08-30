const jade = require('jade');

var str = jade.renderFile('./views/2.jade', {pretty: true});

console.log(str);