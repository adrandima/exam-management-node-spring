// loginRoutes.js

const express = require('express');
const loginRoutes = express.Router();

let Login = require('../model/login');

// Defined store route
loginRoutes.route('/add').post(function (req, res) {
    let login = new Login(req.body);
    login.save()
        .then(login => {
            res.status(200).json('login details added successfully');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
loginRoutes.route('/').get(function (req, res) {
    Login.find(function(err, login){
        if(err){
            console.log(err);
        }
        else {
            res.json(login);
        }
    });
});

//  Defined update route
loginRoutes.route('/update/:id').post(function (req, res) {
    Login.findById(req.params.id, function(err, login) {
        if (!login)
            res.status(404).send("data is not found");
        else {
            login.password = req.body.password;
            login.save().then(login => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});


module.exports = loginRoutes;