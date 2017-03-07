/**
 * Created by DELL on 2017/3/6.
 */

var http = require("http");
var querystring = require('querystring');


var server = http.createServer(function (req,res) {
    //访问的地址是url，且必须是post请求
    if(req.url =='/dopost'&&req.method .toLocaleLowerCase()=="post"){
        //post 请求接收的公式，它是一段一段的接收。
        var alldata = '';
        req.addListener('data',function (chunk) {
            alldata+=chunk;
            console.log(chunk);
        });
        req.addListener('end',function () {
            var datastring = alldata.toString();
            res.end("success");

            var dataobj = querystring.parse(datastring);
            console.log(dataobj);
            console.log(dataobj.name);
            console.log(dataobj.sex);
        })



    }
})
server.listen(80,'127.0.0.1');
