// lecturer.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Lecturer = new Schema({
    lecturer_name: {
        type: String
    },
    lecturer_nic: {
        type: String
    },
    lecturer_faculty: {
        type: String
    },
    lecturer_id_number: {
        type: String
    }
},{
    collection: 'lecturer'
});

module.exports = mongoose.model('Lecturer', Lecturer);