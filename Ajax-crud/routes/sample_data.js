var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function (req, res, next) {
  res.render('sample_data', { title: 'Node JS Ajax CRUD Application' });
});
router.post("/action", function (req, res, next) {
  var action = req.body.action;

  if (action == 'fetch') {
    var query = "SELECT * FROM sample_data ORDER BY id DESC";

    database.query(query, function (error, data) {
      res.json({
        data: data
      });
    });
  }
  if (action == 'add') {
    var first_name = req.body.first_name;
    var second_name = req.body.second_name;
    var age = req.body.age;
    var gender = req.body.gender;

    var query = `
     INSERT INTO sample_data(first_name,second_name,age,gender) VALUES ("${first_name}","${second_name}","${age}","${gender}")
    `;
    database.query(query,function(error,data){
      res.json({
        message : 'Added'
      })
    });
  }
});

module.exports = router;