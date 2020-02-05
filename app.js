var express = require('express');
var app = express();
var engine = require('ejs-locals');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var user = require('./router/user');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');

//靜態檔案的路徑
app.use(express.static('public'));

//增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 
app.use(cookieParser());

// 路由
app.get('/',function(req,res){
       res.send('進入首頁!');
   })

app.use('/user',user);

app.get('/search',function(req,res){
    res.render('search');
})
app.post('/searchList',function(req,res){
    console.log(req.body);
    // 轉址
    res.redirect('search');
    // res.render('search');
})

app.post('/searchAJAX',function(req,res){
    console.log(req.body);
    console.log(req.body.list[1]);
    res.send('hello!!')
    // //轉址
    // res.redirect('search');
    // res.render('search');
})

var port = process.env.PORT || 3000;
app.listen(port);