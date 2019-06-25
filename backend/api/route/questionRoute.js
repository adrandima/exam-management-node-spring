const express = require('express');
const questionRoutes = express.Router();

let Question = require('../model/question');


questionRoutes.post('/addQuestion',(req,res)=>{
    let question = new Question(req.body);
    console.log(question);
    question.save().then(question =>{
        res.status(200).send({data:question});
    }).catch(err=>{
        console.error(err);
        res.send(404);
    })
});





questionRoutes.get('/getAllQuestions',(req,res)=>{
    Question.find().then(qu =>{
        res.status(200).send({data:qu});
    }).catch(err=>{
        console.error(err);
        res.send(404);
    })
});


questionRoutes.put('/update/:id',(req,res)=>{
    //const user = new UserModel(req.body);
    Question.findByIdAndUpdate({_id:req.params.id},req.body,(err,response)=>{
        if(err){
            res.json({message:"PUT error"});
        }
        res.json(response);
    });
});

questionRoutes.get('/edit/:id',(req, res)=> {
    let id = req.params.id;
    Question.findById(id, function (err, question){
        res.status(200).send({data:question});
    });
});




questionRoutes.delete('/delete/:id',(req,res)=>{
    Question.remove({_id:req.params.id}).exec().then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});
module.exports = questionRoutes;