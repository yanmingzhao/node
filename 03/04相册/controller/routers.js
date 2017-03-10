/**
 * Created by DELL on 2017/3/9.
 */
var file = require('../models/file');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var sd = require('silly-datetime');

exports.showIndex = function (req,res,next) {
    /*res.render('index.nunj',{
        albums:file.getAllAlbums()
    });*/
    file.getAllAlbums(function(err,albums){
        if(err){
            next();
            return;
        }
        res.render('index.nunj',{albums:albums,currentRouter:'/index'})
    })
};
exports.showAlbum = function (req,res,next) {
    var albumName = req.params.albumName;
    file.getAllimagesByalbumName(albumName,function(err,imagesArray){
        if(err){
            next();
            return;
        }
        console.log(req.query)
        console.log(req.body)
        res.render('album.nunj',{
            albumName:albumName,
            images:imagesArray,
            currentRouter:'/index'
        })
    })
};
exports.showUp = function (req,res) {
    file.getAllAlbums(function(err,albums){
        if(err){
            next();
            return;
        }
        res.render('upload.nunj',{dirs:albums,currentRouter:'/upload'})
    })
};
exports.doPost= function (req,res,next) {
    var form = new formidable.IncomingForm();
    //先传到中转文件夹，因为将来还要把它放入到某个目录当中进行归类。
    form.uploadDir =path.normalize(__dirname+'/../'+'/temp/');
    //绝对路径处理地址。
    console.log(path.normalize(__dirname+'/../'+'/temp/'))
    form.parse(req,function (err,fields,files) {
        //res.send({fields:fields,files:files});
        //处理错误
        if(err){
            next();//错误走404页面
            return;
        }
        //判断文件尺寸
        var size = files.file.size;
        if(size>1024*1024){
            fs.unlink(files.file.path,function () {
                res.send('图片尺寸应该小于 1M')
            });
            return;
        }
        //修改文件路径
        var oldpath  = files.file.path;
        var times = sd.format(new Date(),'YYYYMMDDHHmmss');
        var rnd   = parseInt(Math.random()*89999+10000);
        var extname = path.extname(files.file.name);
        var newpath  = path.normalize(__dirname+'/../uploads/'+fields.dir+'/'+times+rnd+extname);
        //改名
        fs.rename(oldpath,newpath,function(err){
            if(err){
                next();
                return;
            }
            res.send('成功')
        })
    })
}