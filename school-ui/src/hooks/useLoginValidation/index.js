import { useState, useEffect } from "react";
import manager_service from "../../services/manager_service";
import { useHistory } from "react-router-dom";

export default function useLoginValidation(initialState) {
  const [values, setValues] = useState(initialState);
  const [erros, setErros] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [apiErros, setApiErros] = useState(null);
  const [api] = useState(new manager_service());
  const [open, setOpen] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (isSubmitting) {
      const noErros = Object.keys(erros).length === 0;
      if (noErros) {
        authManager();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erros]);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const validadeManager = values => {
    let erros = {};
    if (!values.username) {
      erros.username = "Username is required";
    }
    if (!values.password) {
      erros.password = "Password is required";
    }
    return erros;
  };

  // const handleBlur = values => {
  //   const validadeErros = validadeManager(values);
  //   setErros(validadeErros);
  // };

  const authManager = async () => {
    const { username, password } = values;
    const auth = { username, password };
    await api
      .authentication(auth)
      .then(response => {
        localStorage.setItem("manager", JSON.stringify(response.data));
        history.push("/home");
      })
      .catch(err => {
        setApiErros(err.response.data);
        console.log(err.response.data);
      });
  };
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validadeErros = validadeManager(values);
    setErros(validadeErros);
    setOpen(true);
    setSubmitting(true);
  };

  return {
    handleChange,
    validadeManager,
    handleSubmit,
    values,
    isSubmitting,
    erros,
    apiErros,
    open,
    handleClose
  };
}
