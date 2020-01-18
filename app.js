var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('1234');
})

var port = process.env.PORT || 3000;
console.log(port);
app.listen(port);