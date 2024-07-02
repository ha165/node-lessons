var express = require('express');

var router = express.Router();

var database = require('../connect')

router.get('/', function (req, res, next) {
    var query = "SELECT * FROM sample_data ORDER BY id DESC";

    database.query(query, function (error, data) {
        if (error) {
            throw error;
        }
        else {
            res.render('sample_data', { title: 'Node js CRUD applicatin', action: 'list', sampleData: data });
        }
    });
});
module.exports = router;
