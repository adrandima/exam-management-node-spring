// student.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    student_name: {
        type: String
    },
    student_nic: {
        type: String
    },
    student_faculty: {
        type: String
    },
    student_id_number: {
        type: String
    }
},{
    collection: 'student'
});

module.exports = mongoose.model('Student', Student);