var express = require('express');

var router = express.Router();

var database = require('../connect')

router.get('/', function (res, req, next) {
    var query = "SELECT * FROM sample_data O";
});
module.exports = router;
