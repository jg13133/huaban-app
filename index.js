//创建web服务器
const ppa=5001;
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
//创建监听服务器
var app=express();
app.listen(app,()=>{
    console.log("服务器创建成功"+ppa+'...');
    console.log(new Date().toLocaleString());
})
//使用中间件
app.use(cors());
//app.use(bodyParser.urlencoded({}))  //把application/x-www-form-urlencoded格式的请求主体数据解析出来放入req.body属性
app.use(bodyParser.json()); //把application/json格式的请求主体数据解析出来放入req.body属性