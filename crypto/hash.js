const crypto = require('crypto');
const hash = crypto.createHash('md5');
hash.update('Hello, world!')
hash.update('Hello, nodejs!')

// console.log(hash.digest('hex'))
var r = hash.digest('hex')//整理16进制
console.log(`md5 hash : ${r}`)