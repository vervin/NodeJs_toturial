const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'key');

hmac.update('Hello, world!')
hmac.update('Hello, nodejs!')


var r = hmac.digest('hex')
console.log('hmac' +r)
