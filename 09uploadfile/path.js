const path = require('path');

var str = 'D:\\myself\\node\\node-exercise\\09uploadfile\\b.txt';

// 解析路径
var obj = path.parse(str);
console.log(obj);

/* 打印出来的结果：
{ root: 'D:\\',
  dir: 'D:\\myself\\node\\node-exercise\\09uploadfile',
  base: 'b.txt',
  ext: '.txt',
  name: 'b' 
}
*/