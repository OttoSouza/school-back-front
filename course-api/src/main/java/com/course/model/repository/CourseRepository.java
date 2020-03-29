package com.course.model.repository;

import com.course.model.entity.Course;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * CourseRepository
 */
public interface CourseRepository extends JpaRepository<Course, Long>{

    
}