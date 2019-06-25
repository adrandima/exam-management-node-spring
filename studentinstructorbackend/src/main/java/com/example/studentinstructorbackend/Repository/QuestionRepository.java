package com.example.studentinstructorbackend.Repository;


import com.example.studentinstructorbackend.Model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question,String> {
    Question findBy_id(String _id);
}
