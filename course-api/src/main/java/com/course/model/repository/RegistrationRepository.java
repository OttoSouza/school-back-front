package com.course.model.repository;

import com.course.model.entity.Registration;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * RegistrationRepository
 */
public interface RegistrationRepository extends JpaRepository<Registration, Long> {

    
}