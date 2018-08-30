const jade = require('jade');

var str = jade.renderFile('./views/4.jade', {pretty: true,
    style:{width:'300px', height:'200px'},
    attr:['btn']
});

console.log(str);