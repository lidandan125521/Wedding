const express = require("express");
const pool = require("./pool");
//const cors = require("cors");
//const session = require("express-sexxion");
var app = express();
app.listen(3000);
/*
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001"],
    credentials:true
}));

app.use(session({
    secret:"128位随机字符",    //安全字符串
    resave:false,             //请求保存
    saveUninitialized:true,   //初始化保存
    cookie:{
        maxAge:1000 * 60 * 60 * 24 
    }
}));
*/
app.use(express.static(__dirname+"/public"));

