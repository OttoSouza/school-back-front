package com.course.service;

import java.util.List;
import java.util.Optional;

import com.course.model.entity.Course;

/**
 * CourseService
 */
public interface CourseService {

    Course save(Course course);

    Course update(Course course);

    void delete(Course course);

    Optional<Course> getbyId(Long id);

    List<Course> getAll();
    
}