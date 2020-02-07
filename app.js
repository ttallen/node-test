var express = require('express');
var app = express();
var engine = require('ejs-locals');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var user = require('./router/user');
var index = require('./router/index');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');

//靜態檔案的路徑
app.use(express.static('public'));

//增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge: 10000
    }
  }));
// 路由
app.use('/',index);

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