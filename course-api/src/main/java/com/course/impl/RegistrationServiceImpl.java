package com.course.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import com.course.exception.MessageException;
import com.course.model.entity.Registration;
import com.course.model.enums.StatusRegistration;
import com.course.model.repository.RegistrationRepository;
import com.course.service.RegistrationService;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    RegistrationRepository repository;

    public RegistrationServiceImpl(RegistrationRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public Registration save(Registration registration) {
        validate(registration);
        registration.setStatusRegistration(StatusRegistration.PENDING);
        return this.repository.save(registration);
    }

    @Override
    @Transactional
    public Registration update(Registration registration) {
        Objects.nonNull(registration.getId());
        validate(registration);
        return this.repository.save(registration);
    }

    @Override
    @Transactional
    public void delete(Registration registration) {
        Objects.nonNull(registration.getId());
        this.repository.save(registration);
    }

    @Override
    public List<Registration> find(Registration registration) {
        Example example = Example.of(registration,
                ExampleMatcher.matching().withIgnoreCase().withStringMatcher(StringMatcher.CONTAINING));
        return repository.findAll(example);
    }

    @Override
    public List<Registration> getRegistration() {
        return this.repository.findAll();
    }

    @Override
    @Transactional
    public Optional<Registration> getById(Long id) {
        return this.repository.findById(id);
    }

    @Override
    @Transactional
    public void validate(Registration registration) {
        if (registration.getManager() == null) {
            throw new MessageException("Enter a valid Manager");
        }
    }

}