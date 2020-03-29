package com.course.service;

import java.util.List;
import java.util.Optional;

import com.course.model.entity.Student;



/**
 * StudentService
 */
public interface StudentService {

    Student save(Student student);

    Student update(Student student);

    void delete(Student student);

    Optional<Student> getById(Long id);

    List<Student> getAll();
}