package com.course.api.dto;

import lombok.*;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class StudentDTO {

    private String name;
    private String cpf;
    private String rg;
    private String phone;
    private String address;
    private String status;
    private Long id_course;

}