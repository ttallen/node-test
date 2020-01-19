var express = require('express');
var app = express();

app.get('/user/:name/',function(req,res){
    var myName = req.params.name;
    var limit = req.query.limit;
    var q = req.query.q;
    res.send('<html><head></head><body><p>' 
            + myName 
            + '要搜尋關鍵字' 
            + q 
            + '且是找前' 
            + limit 
            + '筆的資料</p></body></html>');
})

app.use(function(req,res,next){
    console.log('進入!');
    // aa();
    next();
})

app.use(function(req,res,next){
    res.status(404).send('您的頁面找不到');
})

app.use(function(err,req,res,next){
    res.status(500).send('程式有些問題,請稍後嘗試');
})

var port = process.env.PORT || 3000;
app.listen(port);