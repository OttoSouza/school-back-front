package com.course.service;

import java.util.List;
import java.util.Optional;

import com.course.model.entity.ClassRoom;


/**
 * ClassesService
 */
public interface ClassRoomService {

    ClassRoom save(ClassRoom classRoom);

    ClassRoom update(ClassRoom classRoom);

    void delete(ClassRoom classRoom);

    Optional<ClassRoom> getbyId(Long id);

    List<ClassRoom> getAll();

    void validadeClass(Integer vacancies);
}