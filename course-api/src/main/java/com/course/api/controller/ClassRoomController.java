package com.course.api.controller;

import java.time.LocalDate;
import java.util.List;

import com.course.api.dto.ClassRoomDTO;
import com.course.exception.MessageException;
import com.course.model.entity.ClassRoom;
import com.course.model.entity.Course;
import com.course.service.ClassRoomService;
import com.course.service.CourseService;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import io.swagger.annotations.Api;
import lombok.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/classes")
public class ClassRoomController {

    private final ClassRoomService classService;
    private final CourseService courseService;

    @GetMapping 
    public ResponseEntity<List<ClassRoom>> getAll() {
        List<ClassRoom> classRoom = null;
        try {
            classRoom = this.classService.getAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(classRoom);
    }

    @PostMapping()
    public ResponseEntity save(@RequestBody ClassRoomDTO dto) {
        try {
            ClassRoom classRoom = changetoClassRoom(dto);
            this.classService.save(classRoom);
            return ResponseEntity.ok(classRoom);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    private ClassRoom changetoClassRoom(ClassRoomDTO dto) {
        ClassRoom classRoom = new ClassRoom();
        classRoom.setName(dto.getName());
        classRoom.setTurn(dto.getTurn());
        classRoom.setStartDate(dto.getStartDate());
        classRoom.setEndDate(dto.getEndDate());
        classRoom.setStartHour(dto.getStartHour());
        classRoom.setEndHour(dto.getEndHour());
        classRoom.setVacancies(dto.getVacancies());
        Course course = this.courseService.getbyId(dto.getId_course()).orElseThrow(() -> new MessageException("Course not found"));
        classRoom.setCourseClassRoom(course);
        return classRoom;
    }
}