var express = require('express');
var router = express.Router();

router.get('/photo',function(req,res){
    res.send('photo');
})

router.get('/card',function(req,res){
    res.send('card');
})

module.exports = router;