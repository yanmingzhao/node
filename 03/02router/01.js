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

app.get('/',function (req,res) {
    res.render('index.nunj',{files:['01.jpg','02.jpg','03.jpg','04.jpg']});
});




app.listen(3000);
