import React from "react";
import StudentsRegister from "../../components/students_components/register";
import CoursesRegister from "../../components/courses_components/register";
import TeamRegister from "../../components/team_courses/register";
import ProffessorRegister from "../../components/professor_components/register";
import "../../styles/styles.css"
const Register = () => (
  <div>
    <div className="space">
      <CoursesRegister />
    </div>
    <div className="space">
      <StudentsRegister />
    </div>
    <div className="space">
      <TeamRegister />
    </div>
    <div className="space">
      <ProffessorRegister />
    </div>
  </div>
);

export default Register;
