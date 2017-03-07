/**
 * Created by DELL on 2017/3/7.
 */
var ejs = require('ejs')
var string = "好高光啊 买了台iphone<%= a %>s"

var data = {
    a:6
}
var html = ejs.render(string,data);
console.log(html);
