const express = require('express');
const examRoutes = express.Router();

let Exam = require('../model/exam');


examRoutes.post('/addExam',(req,res)=>{
    let exam = new Exam(req.body);
    console.log(exam.name);
    exam.save({name:exam.name}).then(ex =>{
        res.status(200).send({data:ex});
    }).catch(err=>{
        console.error(err);
        res.send(404);
    })
});



examRoutes.get('/getAllExam',(req,res)=>{
    Exam.find().then(ex =>{
        res.status(200).send({data:ex});
    }).catch(err=>{
        console.error(err);
        res.send(404);
    })
});


examRoutes.put('/update/:id',(req,res)=>{

    Exam.findByIdAndUpdate({name:req.params.id},req.body,(err,response)=>{
        if(err){
            res.json({message:"PUT error"});
        }
        res.json(response);
    });
});

examRoutes.get('/getDetail/:subject',(req, res)=> {
    Exam.find({subject:req.params.subject}).then( detail=>{
        res.status(200).send(detail);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(404);
    });

});

examRoutes.get('/getDetailById/:_id',(req, res)=> {
    Exam.find({_id:req.params._id}).then( detail=>{
        console.log(detail);
        res.status(200).send({data:detail});
    }).catch(err=>{
        console.error(err);
        res.sendStatus(404);
    });

});



examRoutes.delete('/delete/:id',(req,res)=>{
    Exam.remove({_id:req.params.id}).exec().then(()=>{
        res.sendStatus(200);
    }).catch(err=>{
        console.error(err);
        res.sendStatus(500);
    });
});


module.exports = examRoutes;