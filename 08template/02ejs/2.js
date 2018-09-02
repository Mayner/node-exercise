const ejs = require('ejs');

ejs.renderFile('./views/2.ejs', {json: {arr: [
    {user: 'mayner', pass: '123'},
    {user: 'zhangsan', pass: '321'},
    {user: 'lisi', pass: '666'}
]}}, function (err, data) {
    console.log(data);
});