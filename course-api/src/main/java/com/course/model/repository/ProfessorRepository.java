package com.course.model.repository;

import com.course.model.entity.Professor;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * ProfessorRepository
 */
public interface ProfessorRepository extends JpaRepository<Professor,Long>{

    
}