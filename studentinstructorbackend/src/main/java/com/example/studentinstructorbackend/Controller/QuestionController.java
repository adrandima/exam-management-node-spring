package com.example.studentinstructorbackend.Controller;

import com.example.studentinstructorbackend.Config;
import com.example.studentinstructorbackend.Model.Exam;
import com.example.studentinstructorbackend.Model.Question;
import com.example.studentinstructorbackend.Repository.ExamRepository;
import com.example.studentinstructorbackend.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("springQuestion")
@CrossOrigin(origins = Config.a_Origin)
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;



    public Question getQuestionById(String _id) {

        Question a = questionRepository.findBy_id(_id);
        return a;
    }


    @RequestMapping(value = "/{questions}", method = RequestMethod.POST)
    public ArrayList<Question> createQuestion(@PathVariable("questions") List questions) {
        System.out.println(questions);
        ArrayList<Question> questionArray = new ArrayList<>();
        for (int i = 0; i < questions.size(); i++) {
            System.out.println(questions.get(i));
            Question questionList = questionRepository.findBy_id((String) questions.get(i));
            System.out.println(questionList.getQuestion());
            questionArray.add(questionList);
        }
        return questionArray;
    }

}
