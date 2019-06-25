package com.example.studentinstructorbackend.Model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Document(collection = "exams")
public class Exam {
    @Id
    private String _id;
    private String name;
    private String subject;
    private String lecturer_id;
    private String key;
    private List<String> questions;

    public Exam(String _id, String name, String subject, String lecturer_id, String key, List<String> questions) {
        this._id = _id;
        this.name = name;
        this.subject = subject;
        this.lecturer_id = lecturer_id;
        this.key = key;
        this.questions = questions;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getLecturer_id() {
        return lecturer_id;
    }

    public void setLecturer_id(String lecturer_id) {
        this.lecturer_id = lecturer_id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public List<String> getQuestions() {
        return questions;
    }

    public void setQuestions(List<String> questions) {
        this.questions = questions;
    }
}
