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

var port = process.env.PORT || 3000;
app.listen(port);