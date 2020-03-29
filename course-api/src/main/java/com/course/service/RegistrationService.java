package com.course.service;

import java.util.List;
import java.util.Optional;

import com.course.model.entity.Registration;

/**
 * RegistrationService
 */
public interface RegistrationService {

    Registration save(Registration registration);

    Registration update(Registration registration);

    void delete(Registration registration);

    List<Registration> find(Registration registration);

    List<Registration> getRegistration();

    Optional<Registration> getById(Long id);

    void validate(Registration registration);
}