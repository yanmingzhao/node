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
app.get('/:username/:id',function (req,res,next) {
    var username = req.params.username;
    if(username=='aa'){
        console.log('1')
        res.send("用户信息"+username)
    }else{
        next();
    }
});
app.get('/:username/:id',function (req,res) {
    res.send('请先注册')
});
app.get('/admin/login',function (req,res) {
    res.send('管理员登录')
});






app.listen(3000);
