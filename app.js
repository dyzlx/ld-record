var express=require("express");
var app=express();

app.use('/',require('./controllers/routes'));

var server=app.listen(3000,function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log('Example app listening at the ://%s:%s',host,port);
})
