/**
 * Created by DELL on 2017/3/8.
 */
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
//表单可以提交到自己，在form 表单里面将action 写为#。这为restful路由设计，有宏观和微观概念。  get读取学生信息  add添加学生 delete删除学生信息 有50种形式

app.get('/',function (req,res) {
    res.render('form.nunj');
});
//网页是不可以有这么多形式的，APP和桌面端是可以有这么多形式的。简单就是一个路径，就是http method不同，对这个页面有不同的操作。
app.delete('/student/:id',function(){
    res.send('删除一条信息');
});
app.post('/',function (req,res) {
    //将数据添加进入数据库
    res.send('成功')
});
app.listen(3000);
