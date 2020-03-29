import { useState, useEffect } from "react";
import student_services from "../../services/students.services";
import courses_services from "../../services/courses_services";
import enroll_services from "../../services/enroll_services";

export default function useEnroll(initialState) {
  const [values, setValues] = useState(initialState);
  const [err, setErros] = useState({});
  const [apiStudent] = useState(new student_services());
  const [apiCourses] = useState(new courses_services());
  const [apiEnroll] = useState(new enroll_services());
  const [courses, setCourses] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      await apiCourses
        .getAll()
        .then(response => {
          setCourses(response.data);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    };

    const fetchStudents = async () => {
      await apiStudent
        .getAll()
        .then(response => {
          console.log(response.data);
          setStudents(response.data);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    };
    fetchStudents();
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createEnroll = async () => {
    const {
      dataRegistration,
      registrationFee,
      id_manager,
      id_student,
      id_course
    } = values;

    const enroll = {
      dataRegistration,
      registrationFee,
      id_manager,
      id_student,
      id_course
    };
    await apiEnroll
      .save(enroll)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return { values, courses, students, createEnroll, handleChange };
}
