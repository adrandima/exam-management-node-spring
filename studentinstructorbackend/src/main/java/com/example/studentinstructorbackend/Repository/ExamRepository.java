package com.example.studentinstructorbackend.Repository;

import com.example.studentinstructorbackend.Model.Exam;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExamRepository extends MongoRepository<Exam,String> {
    Exam findBy_id(String _id);
}
