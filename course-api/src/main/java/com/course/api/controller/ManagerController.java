package com.course.api.controller;

import java.util.List;
import java.util.Optional;
import com.course.api.dto.ManagerDTO;
import com.course.model.entity.Manager;
import com.course.service.ManagerService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;


import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/manager")
public class ManagerController {

    private final ManagerService service;

    @GetMapping("{id}")
    public ResponseEntity getById(@PathVariable("id") Long id) {
        Optional<Manager> managerOptional = this.service.getbyId(id);
        if (!managerOptional.isPresent()) {
            return ResponseEntity.badRequest().body("Manager Not Found");
        }
        return ResponseEntity.ok(managerOptional);
    }

    @GetMapping
    public ResponseEntity<List<Manager>> getAll() {
        List<Manager> list = null;
        try {
            list = this.service.getAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(list);
    }

    @PostMapping("/auth")
    public ResponseEntity authenticate(@RequestBody ManagerDTO dto) {
        try {
            Manager managerAuth = this.service.authenticate(dto.getUsername(), dto.getPassword());
            return ResponseEntity.ok(managerAuth);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity save(@RequestBody ManagerDTO dto) {
        try {
            Manager manager = changetoManager(dto);
            manager = this.service.save(manager);
            return ResponseEntity.ok(manager);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("{id}")
    public ResponseEntity update(@PathVariable("id") Long id, @RequestBody ManagerDTO dto) {
        return this.service.getbyId(id).map(entity -> {
            try {
                Manager manager = changetoManager(dto);
                manager.setId(id);
                this.service.update(manager);
                return ResponseEntity.ok(manager);
            } catch (Exception e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }).orElseGet(() -> new ResponseEntity("Manager not found", HttpStatus.BAD_REQUEST));
    }

    private Manager changetoManager(ManagerDTO dto) {
        Manager manager = new Manager();
        manager.setUsername(dto.getUsername());
        manager.setPassword(dto.getPassword());
        return manager;
    }
}