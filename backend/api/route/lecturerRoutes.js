// lecturerRoutes.js
const express = require('express');
const lecturerRoutes = express.Router();

let Lecturer = require('../model/lecturer');

lecturerRoutes.route('/add').post(function (req, res) {
    let lecturer = new Lecturer(req.body);
    lecturer.save()
        .then(lecturer => {
            res.status(200).json({'lecturer': 'lecturer in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

lecturerRoutes.route('/').get(function (req, res) {
    lecturer.find(function(err, lecturer){
        if(err){
            console.log(err);
        }
        else {
            res.json(lecturer);
        }
    });
});

lecturerRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Lecturer.findById(id, function (err, lecturer){
        res.json(lecturer);
    });
});

lecturerRoutes.route('/update/:id').post(function (req, res) {
    Lecturer.findById(req.params.id, function(err, lecturer) {
        if (!lecturer)
            res.status(404).send("data is not found");
        else {
            lecturer.lecturer_name = req.body.lecturer_name;
            lecturer.lecturer_nic = req.body.lecturer_nic;
            lecturer.lecturer_faculty = req.body.lecturer_faculty;
            lecturer.lecturer_id_number = req.body.lecturer_id_number;

            student.save().then(lecturer => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

lecturerRoutes.route('/delete/:id').get(function (req, res) {
    Lecturer.findByIdAndRemove({_id: req.params.id}, function(err, lecturer){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = lecturerRoutes;