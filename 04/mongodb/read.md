mongo 使用数据库

mongod开机

mongoimport 导入数据

nongod --dbpath **c:\mongo** 这是指定mongodb 数据库开机和设置数据库存放的位置


这个数据库可以拷走，别处可用

要保证开机状态的CMD窗口不动。新打开一个CMD命令。连接数据库请输入mongo。会自动进入

查看当前所有数据库 db
查看所有数据库 show dbs
新建数据库 use  xxx 并使用

新插入一条数据
db.student.insert({"name":"xiaoming","age":12})
student 为一个集合

show collections 为展示所有集合

查看
db.student.find()
将展示所有

mongodb允许数据类型不一样
它们的ID是随机的。可以保证世界上所有的id唯一
$lt/$lte/$gt/$gte/$ne，依次等价于</<=/>/>=/!=

   --下面的示例返回符合条件age >= 18 && age <= 40的文档。
    > db.test.find({"age":{"$gte":18, "$lte":40}})
 --下面的示例返回条件符合name != "stephen1"
 > db.test.find({"name":{"$ne":"stephen1"}})

 --和SQL不同的是，MongoDB的in list中的数据可以是不同类型。这种情况可用于不同类型的别名场景。
     > db.test.find({"name":{"$in":["stephen",123]}})
     { "_id" : ObjectId("4fd58ecbb9ac507e96276f1a"), "name" : "stephen", "age" : 35,"genda" : "male", "email" : "stephen@hotmail.com" }

     --$nin等同于SQL中的not in，同时也是$in的取反。如：
     > db.test.find({"name":{"$nin":["stephen2","stephen1"]}})
     { "_id" : ObjectId("4fd58ecbb9ac507e96276f1a"), "name" : "stephen", "age" : 35,"genda" : "male", "email" : "stephen@hotmail.com" }

     --$or等同于SQL中的or，$or所针对的条件被放到一个数组中，每个数组元素表示or的一个条件。
     --下面的示例等同于name = "stephen1" or age = 35
     > db.test.find({"$or": [{"name":"stephen1"}, {"age":35}]})
     { "_id" : ObjectId("4fd58ecbb9ac507e96276f1a"), "name" : "stephen", "age" : 35,"genda" : "male", "email" : "stephen@hotmail.com" }

     --下面的示例演示了如何混合使用$or和$in。
     > db.test.find({"$or": [{"name":{"$in":["stephen","stephen1"]}}, {"age":36}]})
     { "_id" : ObjectId("4fd58ecbb9ac507e96276f1a"), "name" : "stephen", "age" : 35,"genda" : "male", "email" : "stephen@hotmail.com" }

     --$not表示取反，等同于SQL中的not。
     > db.test.find({"name": {"$not": {"$in":["stephen2","stephen1"]}}})
     { "_id" : ObjectId("4fd58ecbb9ac507e96276f1a"), "name" : "stephen", "age" : 35,"genda" : "male", "email" : "stephen@hotmail.com" }

