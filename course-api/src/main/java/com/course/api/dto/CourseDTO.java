package com.course.api.dto;

import java.math.BigDecimal;

import lombok.*;

/**
 * CourseDTO
 */
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class CourseDTO {

    private String name;
    private BigDecimal amount;
    private Integer workload;
    private String status;
    private Long id_classroom;
}