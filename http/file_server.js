'use strict';

// a simple http server

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.');
var defPage = ['index.html', 'index.htm', 'default.html'];
console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response) {
    var
        pathname = url.parse(request.url).pathname, // '/static/bootstrap.css'
        filepath = path.join(root, pathname); // '/srv/www/static/bootstrap.css'
    fs.stat(filepath, function (err, stats) {
        var findCount = 0;

        function back404() {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }

        function setIndex(indexParams) {
            if (findCount == defPage.length) {
                back404();
            } else {
                var nowPage = indexParams[findCount];
                var temPage = path.join(filepath, nowPage);
                fs.stat(temPage, function (temErr, sts) {
                    if (!temErr && sts.isFile()) {
                        console.log('200 ' + request.url);
                        response.writeHead(200);
                        fs.createReadStream(temPage).pipe(response);
                        console.log('is directory,back ' + temPage);
                    } else {
                        console.log('find next');
                        findCount++;
                        setIndex(defPage);
                    }
                })
            }
        }
        if (!err && stats.isFile()) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else if (!err && stats.isDirectory()) {
            findCount = 0;
            setIndex(defPage);
        } else {
            back404();
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');