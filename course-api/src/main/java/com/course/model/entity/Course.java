package com.course.model.entity;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import javax.persistence.*;
import com.course.model.enums.StatusCourse;
import lombok.*;

@Entity
@Table(name="courses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;    
    private Integer workload;
    private BigDecimal amount;

    @Enumerated(value = EnumType.STRING)
    private StatusCourse courseStatus;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "courseStudents")
    private List<Student> student;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "courseProfessor")
    private List<Professor> professor;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "courseClassRoom")
    private List<ClassRoom> classRoom;

}