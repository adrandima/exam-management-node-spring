const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let question = new Schema({
    mark:{
        type:String
    },
    question:{
        type:String
    },
    answer1:{
        type:String
    },
    answer2:{
        type:String
    },
    answer3:{
        type:String
    },
    answer4:{
        type:String
    },
    actual_answer:{
        type:String
    }
});

module.exports = mongoose.model('Question',question);