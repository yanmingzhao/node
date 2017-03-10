/**
 * Created by DELL on 2017/3/9.
 */

var express = require('express');
var nunjucks = require('nunjucks');

var route = require('./controller');

var app = express();

//设置模板引擎为nunjucks
nunjucks.configure('views',{
    'autoescape':true,
    'express':app
});

//路由中间件
    //把static文件夹共享出来 也就是 静态文件夹读取
app.use('/static',express.static('./static'));
app.use('/uploads',express.static('./uploads'));
    //首页
app.get('/',route.showIndex);
app.get('/:albumName',route.showAlbum);
app.get('/upload',route.showUp);
app.post('/upload',route.doPost);
app.use(function (req,res) {
    res.render('err.nunj');
});
app.listen(3000)





