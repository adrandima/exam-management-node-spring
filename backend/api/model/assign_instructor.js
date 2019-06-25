const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let assign_instructor = new Schema({

    instructor:{
        type:String
    },
    subject:{
        type:String
    },

});

module.exports = mongoose.model('Subject_Instructor',assign_instructor);