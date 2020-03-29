import { useState, useEffect } from "react";
import team_services from "../../services/team_services";
import courses_services from "../../services/courses_services";

export default function useTeam(initialState) {
  const [values, setValues] = useState(initialState);
  const [erro, setErro] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [teamApi] = useState(new team_services());
  const [coursesApi] = useState(new courses_services());
  const [allCourses, setAllCourses] = useState([]);
  const [allTeam, setAllTeam] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      await coursesApi.getAll().then(response => {
        setAllCourses(response.data);
      });
    };

    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchTeam = async () => {
      await teamApi
        .getAll()
        .then(response => {
          setAllTeam(response.data);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    };
    fetchTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (submitting) {
      createTeam();
      setSubmitting(false);
    } else {
      setSubmitting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitting]);

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const createTeam = async () => {
    const {
      name,
      turn,
      startDate,
      endDate,
      startHour,
      endHour,
      vacancies,
      id_course
    } = values;

    const team = {
      name,
      turn,
      startDate,
      endDate,
      startHour,
      endHour,
      vacancies,
      id_course
    };
    await teamApi
      .save(team)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
  };

  return {
    handleSubmit,
    handleChange,
    values,
    allCourses,
    createTeam,
    allTeam
  };
}
