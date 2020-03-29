package com.course.model.repository;

import java.util.Optional;

import com.course.model.entity.ClassRoom;


import org.springframework.data.jpa.repository.JpaRepository;

/**
 * ClassesRepository
 */
public interface ClassRoomRepository extends JpaRepository<ClassRoom, Long> {
    
}