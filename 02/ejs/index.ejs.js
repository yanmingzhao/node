/**
 * Created by DELL on 2017/3/7.
 */

var ejs = require('ejs');
var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){
    fs.readFile('./view/index.ejs',function (err,data) {
        var template = data.toString();
        var dictionary = {
            a:6,
            news:[
                {
                    id:1,
                    name:'说你好'
                },
                {
                    id:2,
                    name:'高兴'
                }
            ]
        }
        var html = ejs.render(template,dictionary)
        res.writeHeader(200,{"Content-type":"text/html;UTF8"});
        res.end(html);
    })
}).listen(80,'127.0.0.1');


