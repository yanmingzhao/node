/**
 * Created by DELL on 2017/3/7.
 */
var nunjucks = require('nunjucks');

nunjucks.configure('./view',{autoescape:true});


var key = nunjucks.render('index.html', { name: '小明' });
console.log(key)