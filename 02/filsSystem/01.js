/**
 * Created by DELL on 2017/3/7.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var nunjucks = require('nunjucks');

nunjucks.configure('./view',{autoescape:true});



http.createServer(function (req,res) {

    //路由设计
        //1.静态路由设置 static目录
        //2.添加文件页面 /form页面
        //3.404页面
        //4.展示资源
    var oldpathname = url.parse(req.url).pathname;
    var pathname = oldpathname;
    //如果为根路由设置读取一个页面
    if(pathname.indexOf(".") == -1){
        pathname += "/index.html";
    }

    var extname = path.extname(pathname);

    //var fileURL = "./" + path.normalize(pathname);
    var regstatic = /^\/static/;


    //console.log(pathname);

    if(req.url == '/'){
        read(__dirname+'/view/form.html',extname,res,function(){
            console.log('添加文件成功')
        })
    }else if(req.url=='/show'){
        read(__dirname+'/view/show.html',extname,res,function(){
            console.log('展示页面')
        })
    }else if(regstatic.test(req.url)){
        var newextname = path.extname(oldpathname);
        if(newextname){
            //处理文件
            read(__dirname+oldpathname,extname,res,function(){
                console.log('读取成功')
            });
        }else{
            console.log(__dirname+oldpathname)
            fs.readdir(__dirname+oldpathname,function(err,files){
                var wenjianjia = [];
                var newpath = __dirname+oldpathname;
                iterator(newpath,0,files,wenjianjia,function(wenjianjia){
                    //处理模板
                    var key = nunjucks.render('show.html',{files:wenjianjia});
                    res.writeHeader(200,{'Content-type':'text/html;charset=UTF8'});
                    res.end(key)
                });
            })
        }
    }else{
        console.log('404');
        res.writeHeader(404,{'Content-type':'text/plain'});
        res.end('404')
    }

}).listen(80,'127.0.0.1');


/**
 * @param filepath 文件路径
 * @param extname  文件扩展名
 * @param res      响应
 * @param cb       回调函数，自己可以写其它逻辑
 */
function read(filepath,extname,res,cb){
    console.log(filepath)
    fs.readFile(filepath,function (err,data) {
        if(err){
            throw Error('文件读取失败')
            res.end('对不起，没有这个文件')
            return;
        }
        cb&&cb();
        mime(extname,data,res);
    })
};
/**
 * @param extname 文件扩展名
 * @param elsedata 读取的文件数据
 */
//读取展示
function mime(extname,elsedata,res){
    fs.readFile(__dirname+'/mime.json',function (err,data) {
        if(err){
            throw Error('对不起，mime文件读取失败')
            return;
        }
        var mimejson = JSON.parse(data);
        var mimename = mimejson[extname]||'text/plain';
        res.writeHead(200,{"Content-Type":mimename})
        res.end(elsedata);
    })
}
/**
 * @param newpath   读取文件夹地址
 * @param i         自增标记
 * @param files     文件
 * @param wenjianjia 数组 文件夹及文件
 */
function iterator(newpath,i,files,wenjianjia,cb){
    if(i==files.length){
        console.log(wenjianjia);
        cb&&cb(wenjianjia);
        return;
    }
    console.log(newpath+"/"+files[i])
    fs.readdir(newpath+"/"+files[i],function(err,stats){
        console.log(stats)
        if(stats.isDirectory()){
            winjianjia.push({type:'direcotry',name:filse[i]})
        }else{
            winjianjia.push({type:'file',name:files[i],path:newpath+"/"+files[i]})
        }
        iterator(i+1);
    })
}
