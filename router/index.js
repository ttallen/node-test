var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index',{
        userName: req.session.username,
        email: req.session.email
    });
})
router.post('/',function(req,res){
    req.session.username = req.body.username;
    req.session.email = req.body.email;
    res.redirect('/');
})

module.exports = router;