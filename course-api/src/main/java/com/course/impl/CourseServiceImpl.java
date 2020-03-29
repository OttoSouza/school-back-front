package com.course.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import com.course.model.entity.Course;
import com.course.model.enums.StatusCourse;
import com.course.model.repository.CourseRepository;
import com.course.service.CourseService;

import org.springframework.stereotype.Service;

/**
 * CourseServiceImpl
 */
@Service
public class CourseServiceImpl implements CourseService {

    private CourseRepository repository;

    public CourseServiceImpl(CourseRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public Course save(Course course) {
        course.setCourseStatus(StatusCourse.NOT_CONCLUED);
        return this.repository.save(course);
    }

    @Override
    @Transactional
    public Course update(Course course) {
        Objects.nonNull(course.getId());
        return this.repository.save(course);
    }

    @Override
    @Transactional
    public void delete(Course course) {
        Objects.nonNull(course.getId());
        this.repository.delete(course);

    }

    @Override
    @Transactional
    public Optional<Course> getbyId(Long id) {
        return this.repository.findById(id);
    }

    @Override
    @Transactional
    public List<Course> getAll() {
        return this.repository.findAll();
    }

}