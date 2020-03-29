package com.course.api.controller;

import java.util.List;
import java.util.Optional;

import com.course.api.dto.RegistrationDTO;
import com.course.exception.MessageException;
import com.course.model.entity.ClassRoom;
import com.course.model.entity.Course;
import com.course.model.entity.Manager;
import com.course.model.entity.Registration;
import com.course.model.entity.Student;
import com.course.service.ClassRoomService;
import com.course.service.CourseService;
import com.course.service.ManagerService;
import com.course.service.RegistrationService;
import com.course.service.StudentService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/registration")
public class RegistrationController {

    private final RegistrationService registrationService;
    private final StudentService studentService;
    private final ManagerService managerService;
    private final CourseService courseService;

    @GetMapping("/all")
    public ResponseEntity<List<Registration>> getAll() {
        List<Registration> registrations = null;
        try {
            registrations = this.registrationService.getRegistration();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(registrations);
    }

    @GetMapping
    public ResponseEntity search(@RequestParam(value = "students") Long id) {
        Registration registration = new Registration();
        Optional<Manager> manager = this.managerService.getbyId(id);
        if (!manager.isPresent()) {
            return ResponseEntity.badRequest().body("Manager Not Found");
        } else {
            registration.setManager(manager.get());
        }
        List<Registration> registrations = this.registrationService.find(registration);
        return ResponseEntity.ok(registrations);
    }

    @PostMapping
    public ResponseEntity save(@RequestBody RegistrationDTO dto) {
        try {
            Registration registration = changeToRegistration(dto);
            this.registrationService.save(registration);
            return ResponseEntity.ok(registration);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private Registration changeToRegistration(RegistrationDTO dto) {
        Registration registration = new Registration();
        registration.setDataRegistration(dto.getDataRegistration());
        registration.setRegistrationFee(dto.getRegistrationFee());
        Manager manager = this.managerService.getbyId(dto.getId_manager())
                .orElseThrow(() -> new MessageException("Manager not found"));
        registration.setManager(manager);
        Student student = this.studentService.getById(dto.getId_student())
                .orElseThrow(() -> new MessageException("Student not found"));
        registration.setStudent(student);
        Course course = this.courseService.getbyId(dto.getId_course())
                .orElseThrow(() -> new MessageException("Course not found"));
        registration.setCourse(course);
        return registration;
    }

}