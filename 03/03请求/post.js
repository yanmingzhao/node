/**
 * Created by DELL on 2017/3/9.
 */
/**
 * Created by DELL on 2017/3/8.
 */

var express = require('express');
var fs      = require('fs');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');


var app = express();


nunjucks.configure('views',{
    autoescape:true,
    express:app
});
//不精确的匹配。
//parse applation
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function (req,res) {
    console.log(req.ip);
    console.log(req.refresh);
    console.log(req.route);
    res.render('form.nunj');
});

app.post('/',function (req,res) {
    console.log(JSON.stringify(req.body,null,2))
    res.end(JSON.stringify(req.body));
});

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

