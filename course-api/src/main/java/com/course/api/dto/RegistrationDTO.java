package com.course.api.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.*;

/**
 * RegistrationDTO
 */
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class RegistrationDTO {

    private LocalDate dataRegistration;    
    private BigDecimal registrationFee;
    private String status;
    private Long id_manager;
    private Long id_student;
    private Long id_course;


}