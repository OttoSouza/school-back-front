package com.course.service;

import java.util.List;
import java.util.Optional;

import com.course.model.entity.Manager;

/**
 * ManagerService
 */
public interface ManagerService {

    Manager save(Manager manager);

    Manager update(Manager manager);

    void delete(Manager manager);

    Optional<Manager> getbyId(Long id);

    List<Manager> getAll();

    Manager authenticate(String username, String password);

    void validadeUsername(String username);
}