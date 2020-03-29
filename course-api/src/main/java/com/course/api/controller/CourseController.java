package com.course.api.controller;
import java.util.List;
import com.course.api.dto.CourseDTO;
import com.course.model.entity.Course;
import com.course.service.CourseService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import lombok.*;

/**
 * CourseController
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/course")
public class CourseController {

    private final CourseService courseService;

    @GetMapping
    public ResponseEntity<List<Course>> getAll() {
        List<Course> courses = null;
        try {
            courses = this.courseService.getAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(courses);
    }

    @PostMapping
    public ResponseEntity save(@RequestBody CourseDTO dto) {
        try {
            Course course = changetoCourse(dto);
            this.courseService.save(course);
            return ResponseEntity.ok(course);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    private Course changetoCourse(CourseDTO dto) {
        Course course = new Course();
        course.setName(dto.getName());
        course.setWorkload(dto.getWorkload());
        course.setAmount(dto.getAmount());
    
        return course;
    }
}
