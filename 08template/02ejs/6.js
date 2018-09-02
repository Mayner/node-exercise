const ejs = require('ejs');

ejs.renderFile('./views/6.ejs', {type: 'user'}, function (err, data) {
    console.log(data);
});