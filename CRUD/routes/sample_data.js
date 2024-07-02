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

router.get('/add', function (req, res, next) {
    response.render("sample_data", { title: 'Insert Data into MYSQL', action: 'add' })
});
module.exports = router;
