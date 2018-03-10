'use strict'


//读取文本文件
var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data)

        fs.writeFile('copied.txt', data, function (err) {
            if (err) {
                console.log(err);
            }else{
                console.log("ok");
            }

        })
    }
})




//读取二进制文件
// fs.readFile('sample.jpg', function(err, data){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(data);
//        console.log(data.length + 'bytes')
//        var text = data.toString('utf-8');
//        console.log(text)
//        var buf = Buffer.from(text, 'utf-8')
//        console.log(buf)

//    }
// })