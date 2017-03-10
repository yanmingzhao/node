/**
 * Created by DELL on 2017/3/8.
 */

var express = require('express');
var nunjucks = require('nunjucks');

var app = express();

nunjucks.configure('views',{
    autoescape:true,
    express:app
})

app.get('/',function (req,res) {
    res.render('index',{files:['01.jpg','02.jpg','03.jpg','04.jpg']});
})
app.get('/user',function (req,res) {
    res.send('用户页面')
})
app.get(/^\/student\/([\d]{10})$/,function(req,res){
     res.send('学生信息，学号'+req.params[0])
})

app.get('/teacher/:gonghao',function(req,res){
    res.send('老师，工号'+req.params.gonghao)
})

app.listen(3000);
