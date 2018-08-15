var express=require('express');
var router=express.Router();
var pass=require("./pass");
var action=require("./action");

router.get('/',[
  function(req,res,next){
    pass['get']['pre'](req,res,next);
  },
  action['home']['inital']
])

module.exports=router;
