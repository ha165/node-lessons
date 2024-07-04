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
    res.render('sample_data', { title: 'Insert Data into MYSQL', action: 'add' })
});
router.post('/add_sample_data', function (req, res, next) {
    var first_name = req.body.fname;
    var last_name = req.body.sname;
    var age = req.body.age;
    var gender = req.body.gender;
    var query = `
     INSERT INTO sample_data(first_name,second_name,age,gender) VALUES ("${first_name}","${last_name}","${age}","${gender}")
    `;
    database.query(query, function (error, data) {
        if (error) {
            throw error;
        } else {
            res.redirect("/sample_data");
        }
    });
});
router.get('/edit/:id', function (req, res, next) {
    var id = req.params.id;

    // Using template literals correctly
    var query = `SELECT * FROM sample_data WHERE id = ${id}`;

    database.query(query, function (error, data) {
        if (error) {
            return res.status(500).send('Database query error');
        }
        // Ensure 'data' is defined and has at least one record
        if (data.length > 0) {
            res.render('sample_data', { title: "Edit Mysql Data", action: 'edit', sampleData: data[0] });
        } else {
            res.status(404).send('Record not found');
        }
    });
});

module.exports = router;
