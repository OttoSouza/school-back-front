package com.course.api.dto;

import lombok.*;

/**
 * ProfessorDTO
 */
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ProfessorDTO {

    private String name;
    private String graduate;
    private Long id_course;
    
}