package com.course.api.dto;

import lombok.*;

/**
 * ManagerDTO
 */
@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ManagerDTO {

    private String username;
    private String password;
}