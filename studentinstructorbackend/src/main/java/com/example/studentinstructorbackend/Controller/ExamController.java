package com.example.studentinstructorbackend.Controller;

import com.example.studentinstructorbackend.Config;
import com.example.studentinstructorbackend.Model.Exam;
import com.example.studentinstructorbackend.Model.Question;
import com.example.studentinstructorbackend.Repository.ExamRepository;
import com.example.studentinstructorbackend.Repository.QuestionRepository;
import com.mongodb.util.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Array;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("springExam")
@CrossOrigin(origins = Config.a_Origin)
public class ExamController {

    @Autowired
    private ExamRepository examRepository;


    @Autowired
    private QuestionController questionController;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Exam getCardById(@PathVariable("cardNumber") String _id) {

        return examRepository.findBy_id(_id);
    }



    @RequestMapping(value = "/{questions}", method = RequestMethod.POST)
    public ArrayList<Question> getExam(@PathVariable("questions") List questions) {
        System.out.println(questions);
        ArrayList<Question> questionArray = new ArrayList<>();
        for (int i = 0; i < questions.size(); i++) {
            System.out.println(questions.get(i));
            Question questionList = questionController.getQuestionById((String) questions.get(i));
            System.out.println(questionList.getQuestion());
            questionArray.add(questionList);
        }
        return questionArray;
    }


}
