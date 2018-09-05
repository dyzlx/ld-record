var express=require("express");
var app=express();
var path=require('path');

app.set('views',path.join(__dirname,'./views'));
app.set('view engine','jade');

app.use('/',require('./controllers/routes'));

app.use('/static', express.static("./dist/static"));

var server=app.listen(3030,function(){
  var host=server.address().address;
  var port=server.address().port;
  console.log('Example app listening at the ://%s:%s',host,port);
})
