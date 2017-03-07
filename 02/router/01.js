/**
 * Created by DELL on 2017/3/6.
 */
var http = require("http");
var router = require('./router');

var server = http.createServer(function (req,res) {
    if(req.url=='/'){
        router.showIndex(req,res);
    }else if(req.url.substr(0,9)=='/student/'){
        router.showStudent(req,res);
    }else{
        router.show404(req,res);
    }
    res.end('成功')
})

server.listen(80,"127.0.0.1");