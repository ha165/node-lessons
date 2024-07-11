var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/",function(req,res,next){
    response.render('sample_data',{title:'Node JS Ajax CRUD Application'});
});