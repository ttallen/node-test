var express = require('express');
var router = express.Router();

router.get('/photo',function(req,res){
    // console.log(req.cookies);
    console.log(req.session);
    req.session.username = 'bob';
    req.session.email = 'email';
    res.cookie('name','allen',{
        maxAge: 10000,
        httpOnly: true
    })
    res.render('user');
})

router.get('/card',function(req,res){
    res.send('card');
})

module.exports = router;