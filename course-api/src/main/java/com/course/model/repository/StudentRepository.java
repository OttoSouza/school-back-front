package com.course.model.repository;

import com.course.model.entity.Student;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * StudentRepository
 */
public interface StudentRepository extends JpaRepository<Student, Long> {

    
}