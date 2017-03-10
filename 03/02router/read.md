#中间件
如果我的get post回调函数中，没有next参数时候，那么只会匹配第一个路由。就是会往下匹配，如果想往下匹配的话，需要写next()。。 **也就是说中间件的顺序很重要。**
**路由就叫做中间件。**
也就是说路由写法就是具体的往上写，配置参数往下写（抽象的）。
其实中间件就是逻辑拆开，方便于管理逻辑运算。它就是在卡水流的意思 。
##app.use(path,function(){})
它能匹配的事情比较多，第一个参数匹配之后，其它的都能够执行。

它可将层级无限下分。
//不精确的匹配。

    app.use('/admin',function (req,res,next) {
        res.write(req.originalUrl+'\n')  // /admin/dasf/adfasfas/adf
        res.write(req.baseUrl+'\n') // /admin
        res.write(req.path+'\n')    // /dasf/adfasfas/adf
        res.end('你好')             // /你好
    });

app.use 可以做比如thinkjs里面的 ::before(){}来处理。

