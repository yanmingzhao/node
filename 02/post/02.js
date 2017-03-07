/**
 * Created by DELL on 2017/3/6.
 */

var http = require("http");
var formidable= require('formidable');
var querystring = require('querystring');

var server = http.createServer(function (req,res) {
    //访问的地址是url，且必须是post请求
    if(req.url =='/dopost'&&req.method .toLocaleLowerCase()=="post"){
        var form = new formidable.IncomingForm();
        form.uploadDir = './uploader';

        form.parse(req,function (err,fields,files) {
            console.log(fields,files);

            res.writeheader(200,{'Content-type':'text/plain'});

            res.end('成功')
        })
    }
})
server.listen(80,'127.0.0.1');
