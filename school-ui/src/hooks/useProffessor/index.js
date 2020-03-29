import { useState, useEffect } from "react";
import courses_services from "../../services/courses_services";
import proffessor_service from "../../services/proffesor_services";

export default function useProffessor(initialState) {
  const [values, setValues] = useState(initialState);
  const [apiCourses] = useState(new courses_services());
  const [apiProffessor] = useState(new proffessor_service());
  const [courses, setCourses] = useState([]);
  const [proffessors, setProffessors] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (submitting) {
      createProffessor();
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

    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchProffessors = async () => {
      await apiProffessor
        .getAll()
        .then(response => {
          setProffessors(response.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    };

    fetchProffessors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createProffessor = async () => {
    const { name, graduate, id_course } = values;
    const proffessor = { name, graduate, id_course };
    await apiProffessor
      .save(proffessor)
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

  return {handleChange, handleSubmit, values, courses, proffessors, loading };
}
