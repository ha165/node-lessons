
var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function (request, response, next) {

  response.render('sample_data', { title: 'Node JS Ajax CRUD Application' });

});

router.post("/action", function (request, response, next) {

  var action = request.body.action;

  if (action == 'fetch') {
    var query = "SELECT * FROM sample_data ORDER BY id DESC";

    database.query(query, function (error, data) {

      response.json({
        data: data
      });

    });
  }

  if (action == 'Add') {
    var first_name = request.body.first_name;

    var second_name = request.body.second_name;

    var age = request.body.age;

    var gender = request.body.gender;

    var query = `
		INSERT INTO sample_data 
		(first_name, second_name, age, gender) 
		VALUES ("${first_name}", "${second_name}", "${age}", "${gender}")
		`;

    database.query(query, function (error, data) {

      response.json({
        message: 'Data Added'
      });

    });
  }

});

module.exports = router;
