import { useState, useEffect } from "react";
import student_service from "../../services/students.services";
import courses_services from "../../services/courses_services";

export default function useStudents(initialState) {
  const [values, setValues] = useState(initialState);
  const [err, setErros] = useState({});
  const [apiStudent] = useState(new student_service());
  const [apiCourses] = useState(new courses_services());
  const [courses, setCourses] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (submitting) {
      createStudents();
      setSubmitting(false);
    } else {
      setSubmitting(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitting]);

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

  const createStudents = async () => {
    const { name, cpf, rg, phone, address, id_course } = values;
    const student = { name, cpf, rg, phone, address, id_course };
    await apiStudent
      .save(student)
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

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  };

  return { handleSubmit, handleChange, values, courses, students};
}
