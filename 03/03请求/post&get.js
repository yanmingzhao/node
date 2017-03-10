/**
 * Created by DELL on 2017/3/8.
 */

var express = require('express');
var fs      = require('fs');
var nunjucks = require('nunjucks');

var app = express();

nunjucks.configure('views',{
    autoescape:true,
    express:app
});
//不精确的匹配。

app.get('/',function (req,res) {
    console.log('aa')
    console.log(req.query);
    res.send('可以了')
})

//根据当前的网址，读取Public文件夹的文件
//如果有这个文件就渲染这个文件
//如果没有这个文件，那么next();

app.use('/static',express.static('./static'));

app.get('/student',function (req,res) {
    res.end('你好可以了');
})
app.get('/student/:id',function (req,res) {
    res.end(req.params.id);
})





app.listen(3000)

