// 'use strict';
// var fs = require('fs');
// fs.stat('sample.txt', function(err, stat){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('isFile:' + stat.isFile());
//         console.log('isDirectory:' + stat.isDirectory());
//         if(stat.isFile()){
//             console.log('size:' + stat.size);
//             console.log('birth time:' + stat.birthtime);
//             console.log('modified time:' + stat.mtime);

//         }
//     }
// })
//sync
'use strict';
var fs = require('fs');

try {
    var stat = fs.statSync('sample.txt')
    console.log('isFile:' + stat.isFile());
    console.log('isDirectory:' + stat.isDirectory());
    if (stat.isFile()) {
        console.log('size:' + stat.size);
        console.log('birth time:' + stat.birthtime);
        console.log('modified time:' + stat.mtime);

    }
} catch (error) {
    console.log(error)
}
