package com.course.model.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.*;

@Entity
@Table(name = "classes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassRoom implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String turn;

    @Convert(converter = Jsr310JpaConverters.LocalDateConverter.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy  ")
    private LocalDate startDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy ")
    private LocalDate endDate;

    @Convert(converter = Jsr310JpaConverters.LocalTimeConverter.class)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm ")
    private LocalTime startHour;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
    @Convert(converter = Jsr310JpaConverters.LocalTimeConverter.class)
    private LocalTime endHour;

    private Integer vacancies;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Course courseClassRoom;

}