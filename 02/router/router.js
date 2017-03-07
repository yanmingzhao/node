/**
 * Created by DELL on 2017/3/6.
 */



var showIndex = function(req,res){
   res.writeHeader(200,{"Content-type":"text/html;charset=UTF8"});
   res.end('首页')
}

var showStudent = function(req,res){
    var id = req.url.substr(9,6);
    res.writeHeader(200,{"Content-type":"text/html;charset=UTF8"});
    res.end('学生页面'+id);
}
var show404 = function(req,res){
    res.writeHeader(400,{"Content-type":"text/html;charset=UTF8"});
    res.end('404')
};
exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;