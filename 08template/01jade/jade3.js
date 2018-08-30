const jade = require('jade');

var str = jade.renderFile('./views/3.jade', {pretty: true, name: 'mayner', a: 1, b: 2});

console.log(str);
var str1 = jade.renderFile('./views/3.jade', {pretty: true, name: 'mayner', a: 1, b: 2,
    style:{width:'300px', height:'200px'},
    attr:['btn','active']
});

console.log(str1);