const express = require('express');
const instructor_subjectRoutes = express.Router();

let Subject_instractor = require('../model/assign_instructor');


instructor_subjectRoutes.post('/add',(req,res)=>{
    let su_ins = new Subject_instractor(req.body);
    console.log(su_ins);
    su_ins.save().then(q =>{
        res.status(200).send({data:q});
    }).catch(err=>{
        console.error(err);
        res.send(404);
    })
});


instructor_subjectRoutes.get('/getSubjects/:instructor',(req,res)=>{
    const id = req.params.instructor;
    Subject_instractor.find({instructor:id}).then(subject =>{
        res.status(200).send({data:subject});
    }).catch(err=>{
        console.error(err);
        res.send(404);
    })
});

instructor_subjectRoutes.get('/edit/:id',(req, res)=> {
    let id = req.params.id;
    Subject_instractor.find(id, function (err, q){
        res.status(200).send({data:q});
    });
});




instructor_subjectRoutes.get('/getAllSubject',(req,res)=>{
    Subject_instractor.find().then(qu =>{
        res.status(200).send({data:qu});
    }).catch(err=>{
        console.error(err);
        res.send(404);
    })
});
module.exports = instructor_subjectRoutes;