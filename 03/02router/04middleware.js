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
app.get('/admin/login',function (req,res) {
    res.send('管理员登录')
});

app.get('/:username/:id',function (req,res) {
    res.send("用户信息"+req.params.username)
});




app.listen(3000);
