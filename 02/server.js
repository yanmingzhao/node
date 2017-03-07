var http = require('http');
http.createServer(function (req,res) {
    res.end('你好服务器终于好啦')
}).listen(8080,'127.0.0.1');