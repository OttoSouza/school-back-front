package com.course.api.controller;

import java.util.List;
import java.util.Optional;
import com.course.api.dto.StudentDTO;
import com.course.exception.MessageException;
import com.course.model.entity.Course;
import com.course.model.entity.Student;
import com.course.service.CourseService;
import com.course.service.StudentService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;
    private final CourseService courseService;

    @GetMapping("{id}")
    public ResponseEntity getById(@PathVariable("id") Long id) {
        Optional<Student> studentOptional = this.studentService.getById(id);
        if (!studentOptional.isPresent()) {
            return ResponseEntity.badRequest().body("Student not found");
        }
        return ResponseEntity.ok(studentOptional);
    }

    @GetMapping
    public ResponseEntity getAll() {
        List<Student> students = null;
        try {
            students = this.studentService.getAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(students);
    }

    @PostMapping()
    public ResponseEntity save(@RequestBody StudentDTO dto) {
        try {
            Student student = changeToStudent(dto);
            student = this.studentService.save(student);
            return ResponseEntity.ok(student);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    // @PostMapping("{id}")
    // public ResponseEntity save(@PathVariable("id") Long id, @RequestBody StudentDTO dto) {
    //     return this.courseService.getbyId(id).map(entity -> {
    //         try {
    //             Student student = changeToStudent(dto);
    //             student.setCourseStudents(entity);
    //             this.studentService.save(student);
    //             return ResponseEntity.ok(student);
    //         } catch (Exception e) {
    //             return ResponseEntity.badRequest().body(e.getMessage());
    //         }

    //     }).orElseGet(() -> new ResponseEntity("Course Not Found", HttpStatus.BAD_REQUEST));
    // }

    @PutMapping("{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody StudentDTO dto) {
        return this.studentService.getById(id).map(entity -> {
            try {
                Student newStudent = changeToStudent(dto);
                newStudent.setId(id);
                studentService.update(newStudent);
                return ResponseEntity.ok(newStudent);

            } catch (Exception e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }).orElseGet(() -> new ResponseEntity("Student not Found", HttpStatus.BAD_REQUEST));
    }

    private Student changeToStudent(StudentDTO dto) {
        Student student = new Student();
        student.setName(dto.getName());
        student.setCpf(dto.getCpf());
        student.setRg(dto.getRg());
        student.setPhone(dto.getPhone());
        student.setAddress(dto.getAddress());
        Course course = this.courseService.getbyId(dto.getId_course()).orElseThrow(() -> new MessageException("Course not found"));
        student.setCourseStudents(course);
        return student;
    }

}