package com.course.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import com.course.exception.MessageException;
import com.course.model.entity.Manager;
import com.course.model.repository.ManagerRepository;
import com.course.service.ManagerService;

import org.springframework.stereotype.Service;

/**
 * ManagerServiceImpl
 */
@Service
public class ManagerServiceImpl implements ManagerService {

    private ManagerRepository repository;

    public ManagerServiceImpl(ManagerRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public Manager save(Manager manager) {
        validadeUsername(manager.getUsername());
        return this.repository.save(manager);
    }

    @Override
    @Transactional
    public Manager update(Manager manager) {
        Objects.nonNull(manager.getId());   
        return this.repository.save(manager);
    }

    @Override
    @Transactional
    public void delete(Manager manager) {
        // TODO CREATE ONE DAY: MANAGER DELETE
    }

    @Override
    @Transactional
    public Optional<Manager> getbyId(Long id) {
        return this.repository.findById(id);
    }

    @Override
    @Transactional
    public List<Manager> getAll() {
        return this.repository.findAll();
    }

    @Override
    @Transactional
    public Manager authenticate(String username, String password) {
        Optional<Manager> managerOptional = this.repository.findByUsername(username);
        if (!managerOptional.isPresent()) {
            throw new MessageException("Manager not found");
        }
        if (!managerOptional.get().getPassword().equals(password)) {
            throw new MessageException("Invalid Password");
        }
        return managerOptional.get();
    }

    @Override
    @Transactional
    public void validadeUsername(String username) {
        if (this.repository.existsByUsername(username)) {
            throw new MessageException("Username already been registered");
        }
    }

}