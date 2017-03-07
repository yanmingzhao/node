/**
 * Created by DELL on 2017/3/6.
 */

var fs = require('fs');
fs.readFile(__dirname+"/1.txt",function (err,data) {
    if(err){
        throw err;
        return;
    };
    console.log(data.toString("utf-8"));
});

