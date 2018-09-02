const ejs = require('ejs');

ejs.renderFile('./views/1.ejs', {name: 'mayner'}, function (err, data) {
    console.log(data);
});