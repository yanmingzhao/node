/**
 * Created by DELL on 2017/3/8.
 */

var express = require('express');
var nunjucks = require('nunjucks');

var app = express();

nunjucks.configure('views',{
    autoescape:true,
    express:app
});
//不精确的匹配。
app.use('/admin',function (req,res,next) {
    res.write(req.originalUrl+'\n')
    res.write(req.baseUrl+'\n')
    res.write(req.path+'\n')
    res.end('你好')
});







app.listen(3000);
