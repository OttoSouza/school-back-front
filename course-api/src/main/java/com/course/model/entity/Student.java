package com.course.model.entity;
import java.io.Serializable;

import javax.persistence.*;

import com.course.model.enums.StatusStudent;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;
@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Student implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String cpf;
    private String rg;
    private String phone;
    private String address;
    @Enumerated(value = EnumType.STRING)
    private StatusStudent statusStudent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Course courseStudents;

}