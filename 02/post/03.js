/**
 * Created by DELL on 2017/3/6.
 */

var http = require("http");
var formidable= require('formidable');
var querystring = require('querystring');
var sd = require('silly-datetime');
var path = require('path');
var fs = require('fs');

var server = http.createServer(function (req,res) {
    //访问的地址是url，且必须是post请求
    if(req.url =='/dopost'&&req.method .toLocaleLowerCase()=="post"){
        var form = new formidable.IncomingForm();
        form.uploadDir = './uploader';
        
        form.parse(req,function (err,fields,files) {
            console.log(fields,files);
            var time = sd.format(new Date(),'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random()*89999+10000);
            var extname = path.extname(files.file.name)


            var oldpath = __dirname+'/'+files.file.path;

            var newpath = __dirname+"/uploader/"+time+ran+extname;

            fs.rename(oldpath,newpath,function(err){
                if(err){
          ;          throw Error('文件修改失败')
                }
                res.writeHeader(200,{'Content-type':'text/plain'});

                res.end('成功')
            })
        })
    }else if(req.url =='/'){
        fs.readFile('../static/formpost.html',function (err,data) {
            if(err){
                throw Error('对不起文件读取失败');
                return;
            }
            console.log('首页表单加载成功')
            res.end(data);
        })
    }else{
        res.writeHeader(404,{'Content-type':'text/plain'});

        res.end('404')
    }
})
server.listen(80,'127.0.0.1');
