// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const studentRoute = require('./route/studentRoutes');
const assignmentRoute = require('../api/route/assignmentRoute');
const questionRoute = require('../api/route/questionRoute');
const examRoute = require('../api/route/examRoute');
const instructorSubjectRoute = require('../api/route/instructor_subjectRoute');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(cors());
app.use("/uploads" ,express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/student', studentRoute);
app.use('/assignment', assignmentRoute);
app.use('/question', questionRoute);
app.use('/exam', examRoute);
app.use('/instructor_subject',instructorSubjectRoute);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});