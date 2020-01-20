var express = require('express');
var app = express();

//靜態檔案的路徑
app.use(express.static('public'));

var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');
})
app.get('/user',function(req,res){
    res.render('user');
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