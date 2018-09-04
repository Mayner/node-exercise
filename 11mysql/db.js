const mysql = require('mysql');

var db = mysql.createConnection({host: 'localhost', user: 'root', password: 'root', database: '20180822'});

// 插入数据
db.query('INSERT INTO user_table (ID, username, password) VALUES (0, "wangwu", "222");', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 更改数据
db.query('UPDATE user_table SET username="abcd", password="1223" WHERE ID=5', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 查询数据
db.query('SELECT * FROM user_table;', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 删除数据
db.query('DELETE FROM user_table WHERE ID=5', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
