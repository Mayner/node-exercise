const fs = require('fs');

fs.readFile('./www/index.html', function (err, data) {
    if (err) {
        console.log('404');
    } else {
        console.log(data.toString());
    }
});