var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/",function(req,res,next){
    res.render('sample_data',{title:'Node JS Ajax CRUD Application'});
});
router.post("/action",function(req,res,next){
   var action = req.body.action;

   if(action == 'fetch'){
     var query = "SELECT * FROM sample_data ORDER BY id DESC";

     database.query(query,function(error,data){
        res.json({
            data:data
        });
     });
   }
});

module.exports = router;