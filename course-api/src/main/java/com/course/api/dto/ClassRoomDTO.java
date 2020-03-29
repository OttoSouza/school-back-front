package com.course.api.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import lombok.*;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ClassRoomDTO {
    private String name;
    private String turn;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime startHour;
    private LocalTime endHour;
    private Integer vacancies; 
    private Long id_course;
}