package com.course.api.controller;

import java.util.List;
import java.util.Optional;
import com.course.api.dto.ProfessorDTO;
import com.course.exception.MessageException;
import com.course.model.entity.Course;
import com.course.model.entity.Professor;
import com.course.service.CourseService;
import com.course.service.ProfessorService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/professor")
public class ProfessorController {

    private final ProfessorService professorService;
    private final CourseService courseService;

    private Professor changetoProfessor(ProfessorDTO dto) {
        Professor professor = new Professor();
        professor.setName(dto.getName());
        professor.setGraduate(dto.getGraduate());
        Course course = this.courseService.getbyId(dto.getId_course())
                .orElseThrow(() -> new MessageException("Course not found"));
        professor.setCourseProfessor(course);
        return professor;
    }

    @GetMapping("{id}")
    public ResponseEntity getById(@PathVariable("id") Long id) {
        Optional<Professor> professorOptional = this.professorService.getById(id);
        if (!professorOptional.isPresent()) {
            return ResponseEntity.badRequest().body("Professor not found");
        }
        return ResponseEntity.ok(professorOptional);
    }

    @GetMapping
    public ResponseEntity<List<Professor>> getALl() {
        List<Professor> professors = null;
        try {
            professors = this.professorService.getAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(professors);
    }

    @PostMapping()
    public ResponseEntity save(@RequestBody ProfessorDTO dto) {
        try {
            Professor professor = changetoProfessor(dto);
            this.professorService.save(professor);
            return ResponseEntity.ok(professor);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody ProfessorDTO dto) {
        return this.professorService.getById(id).map(entity -> {
            try {
                Professor newProfessor = changetoProfessor(dto);
                newProfessor.setId(id);
                this.professorService.update(newProfessor);
                return ResponseEntity.ok(newProfessor);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }).orElseGet(() -> new ResponseEntity("Course Not found", HttpStatus.BAD_REQUEST));
    }

}