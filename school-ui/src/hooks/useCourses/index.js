import { useState, useEffect } from "react";
import courses_servises from "../../services/courses_services";

export default function useCouses(initialState) {
  const [values, setvalues] = useState(initialState);
  const [api] = useState(new courses_servises());
  const [erros, seterros] = useState({});
  const [courses, setCourses] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleChange = event => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (submitting) {
      const noErr = Object.keys(erros).length === 0;
      if (noErr) {
        createCourses();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erros]);

  useEffect(() => {
    onLoadCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLoadCourses = async () => {
    await api
      .getAll()
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  const validadeFields = values => {
    let erros = {};
    if (!values.name) {
      erros.name = "Name is required";
    }
    if (values.workload <= 0 || !values.workload) {
      erros.workload = "Workload required";
    }
    if (values.amount <= 0 || !values.amount) {
      erros.amount = "Amount required";
    }
    return erros;
  };

  const createCourses = async () => {
    const { name, workload, amount } = values;
    const courses = { name, workload, amount };

    await api
      .save(courses)
      .then(response => {
        localStorage.setItem("courses", JSON.stringify(response.data));
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const getErr = validadeFields(values);
    seterros(getErr);
    setSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    erros,
    submitting,
    courses,
    loading
  };
}
