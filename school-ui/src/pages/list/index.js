import React from "react";
import StudentsList from "../../components/students_components/list";
import CoursesList from "../../components/courses_components/list";
import TeamList from "../../components/team_courses/list";
import ProffessorList from "../../components/professor_components/list";
import "../../styles/styles.css";
const ListSchool = () => (
  <>
    <div className="space">
      {" "}
      <CoursesList />{" "}
    </div>
    <div className="space">
      {" "}
      <StudentsList />{" "}
    </div>
    <div className="space">
      {" "}
      <TeamList />
    </div>
    <div className="space">
      {" "}
      <ProffessorList />
    </div>
    
  </>
);

export default ListSchool;
