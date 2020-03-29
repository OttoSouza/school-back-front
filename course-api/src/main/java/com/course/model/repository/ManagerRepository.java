package com.course.model.repository;

import java.util.Optional;

import com.course.model.entity.Manager;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * InnerManagerRepository
 */
public interface ManagerRepository extends JpaRepository<Manager, Long> {
    boolean existsByUsername(String username);
    Optional<Manager> findByUsername(String username);
}