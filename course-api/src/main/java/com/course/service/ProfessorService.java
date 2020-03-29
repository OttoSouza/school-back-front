package com.course.service;

import java.util.List;
import java.util.Optional;

import com.course.model.entity.Professor;

/**
 * ProfessorService
 */
public interface ProfessorService {

    Professor save(Professor professor);

    Professor update(Professor professor);

    void delete(Professor professor);

    Optional<Professor> getById(Long id);

    List<Professor> getAll();
}