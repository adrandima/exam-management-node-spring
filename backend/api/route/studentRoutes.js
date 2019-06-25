// studentRoutes.js

const express = require('express');
const studentRoutes = express.Router();

// Require Student model in our routes module
let Student = require('../model/student');

// Defined store route
studentRoutes.route('/add').post(function (req, res) {
    let student = new Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student': 'student in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
studentRoutes.route('/').get(function (req, res) {
    Student.find(function(err, student){
        if(err){
            console.log(err);
        }
        else {
            res.json(student);
        }
    });
});

// Defined edit route
studentRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Student.findById(id, function (err, student){
        res.json(student);
    });
});

//  Defined update route
studentRoutes.route('/update/:id').post(function (req, res) {
    Student.findById(req.params.id, function(err, student) {
        if (!student)
            res.status(404).send("data is not found");
        else {
            student.student_name = req.body.student_name;
            student.student_nic = req.body.student_nic;
            student.student_faculty = req.body.student_faculty;
            student.student_id_number = req.body.student_id_number;

            student.save().then(student => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
studentRoutes.route('/delete/:id').get(function (req, res) {
    Student.findByIdAndRemove({_id: req.params.id}, function(err, student){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = studentRoutes;