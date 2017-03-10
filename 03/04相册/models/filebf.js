/**
 * Created by DELL on 2017/3/9.
 */
var fs = require('fs')
exports.getAllAlbums = function (cb) {
    fs.readdir('./uploads',function(err,files){
        if(err){
            callback("没有找到uploads文件",null);
        }
        var albums = [];
        (function iterator(i){
            if(i == files.length){
                //遍历结束
                console.log(albums);
                cb&&cb(albums);
                return;
            }
            fs.stat("./uploads/" + files[i],function(err,stats){
                if(err){
                    callback("找不到文件" + files[i] , null);
                }
                if(stats.isDirectory()){
                    albums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    })
}




















