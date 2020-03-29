package com.course.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import com.course.exception.MessageException;
import com.course.model.entity.ClassRoom;
import com.course.model.repository.ClassRoomRepository;
import com.course.service.ClassRoomService;

import org.springframework.stereotype.Service;

/**
 * ClassesServiceImpl
 */

@Service
public class ClassRoomServiceImpl implements ClassRoomService {

    private ClassRoomRepository repository;

    public ClassRoomServiceImpl(ClassRoomRepository repository) {
        this.repository = repository;
    }

    @Override
    @Transactional
    public ClassRoom save(ClassRoom classes) {
        validadeClass(classes.getVacancies());
        return this.repository.save(classes);
    }

    @Override
    @Transactional
    public ClassRoom update(ClassRoom classes) {
        Objects.nonNull(classes.getId());
        return this.repository.save(classes);
    }

    @Override
    @Transactional
    public void delete(ClassRoom classes) {
        Objects.nonNull(classes.getId());
        this.repository.delete(classes);
    }

    @Override
    @Transactional
    public Optional<ClassRoom> getbyId(Long id) {
        return this.repository.findById(id);
    }

    @Override
    @Transactional
    public List<ClassRoom> getAll() {
        return this.repository.findAll();
    }

    @Override
    public void validadeClass(Integer vacancies) {
        if (vacancies < 0 || vacancies > 40) {
            throw new MessageException("Vacancies less than 0 or greater than 40");
        }
    }

}