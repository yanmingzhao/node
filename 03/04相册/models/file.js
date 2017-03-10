/**
 * Created by DELL on 2017/3/9.
 */
var fs = require('fs')
exports.getAllAlbums = function (cb) {
    fs.readdir('./uploads',function(err,files){
        if(err){
            cb('读取目录失败./uploads',null);
            return;
        }
        var albums = [];
        (function iterator(i){
            if(i == files.length){
                //遍历结束
                console.log(albums);
                cb&&cb(null,albums);
                return;
            }
            fs.stat("./uploads/" + files[i],function(err,stats){
                if(err){
                    cb("找不到文件" + files[i] , null);
                    return;
                }
                if(stats.isDirectory()){
                    albums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    })
};


exports.getAllimagesByalbumName = function (albumname,cb) {
    fs.readdir('./uploads/'+albumname,function(err,files){
        if(err){
            cb('读取目录失败./uploads',null);
            return;
        };
        var albums = [];
        (function iterator(i){
            if(i == files.length){
                console.log(albums)
                cb&&cb(null,albums);
                return;
            }
            fs.stat("./uploads/"+albumname + '/' + files[i],function(err,stats){
                if(err){
                    cb("找不到文件" + files[i] , null);
                    return;
                }
                if(stats.isFile()){
                    albums.push({name:files[i],path:"/uploads/"+albumname + '/' + files[i]});
                }
                iterator(i + 1);
            });
        })(0);









    })
}


















