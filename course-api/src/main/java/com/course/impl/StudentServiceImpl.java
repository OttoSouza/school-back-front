package com.course.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import com.course.model.entity.Student;
import com.course.model.enums.StatusStudent;
import com.course.model.repository.StudentRepository;
import com.course.service.StudentService;

import org.springframework.stereotype.Service;

/**
 * StudentServiceImpl
 */
@Service
public class StudentServiceImpl implements StudentService {
    private StudentRepository repository;

    public StudentServiceImpl(StudentRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public Student save(Student student) {
        student.setStatusStudent(StatusStudent.STUDYING);
        return this.repository.save(student);
    }

    @Override
    @Transactional
    public Student update(Student student) {
        Objects.nonNull(student.getId());
        return this.repository.save(student);
    }

    @Override
    @Transactional
    public void delete(Student student) {
        Objects.nonNull(student.getId());
        this.repository.delete(student);
    }

    @Override
    @Transactional
    public List<Student> getAll() {
        return this.repository.findAll();
    }

    @Override
    @Transactional
    public Optional<Student> getById(Long id) {
        return this.repository.findById(id);
    }

}