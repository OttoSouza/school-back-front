package com.course.model.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.*;

import com.course.model.enums.StatusRegistration;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import lombok.*;
@Entity
@Table(name = "registrations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Registration implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Convert(converter = Jsr310JpaConverters.LocalDateConverter.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy  ")
    private LocalDate dataRegistration;

    private BigDecimal registrationFee;
    
    @Enumerated(value = EnumType.STRING)
    private StatusRegistration statusRegistration;

    @ManyToOne
    @JoinColumn(name="id_manager")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Manager manager;

    @OneToOne
    @JoinColumn(name="id_student")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Student student;

    @ManyToOne
    @JoinColumn(name="id_course")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Course course;
    
}