const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const exam = new Schema({

    name:{
        type:String,
        unique: true
    },
    subject:{
        type:String
    },
    lecturer_id:{
        type:String
    },
    key:{
        type:String
    },
    questions:{
        type:[{type:String}]

    }
});
exam.plugin(uniqueValidator);

module.exports = mongoose.model('Exam',exam);