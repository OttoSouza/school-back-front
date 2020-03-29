package com.course.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import com.course.model.entity.Professor;
import com.course.model.repository.ProfessorRepository;
import com.course.service.ProfessorService;

import org.springframework.stereotype.Service;

/**
 * ProfessorServiceImpl
 */
@Service
public class ProfessorServiceImpl implements ProfessorService {

    private ProfessorRepository repository;

    public ProfessorServiceImpl(ProfessorRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public Professor save(Professor professor) {
        return this.repository.save(professor);
    }

    @Override
    @Transactional
    public Professor update(Professor professor) {
        Objects.nonNull(professor.getId());
        return this.repository.save(professor);
    }

    @Override
    @Transactional
    public void delete(Professor professor) {
        Objects.nonNull(professor.getId());
        this.repository.delete(professor);

    }

    @Override
    @Transactional
    public Optional<Professor> getById(Long id) {
        return this.repository.findById(id);
    }

    @Override
    @Transactional
    public List<Professor> getAll() {
        return this.repository.findAll();
    }

}