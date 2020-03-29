import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { TextField, Typography, Button, Snackbar } from "@material-ui/core";
import useFormValidation from "../../hooks/useLoginValidation";
import Alert from "@material-ui/lab/Alert";
import 'react-toastify/dist/ReactToastify.min.css'; 
const INITIAL_STATE = {
  username: "",
  password: ""
};

function Login() {
  const {
    handleChange,
    handleSubmit,
    values,
    isSubmitting,
    apiErros,
    open,
    handleClose
  } = useFormValidation(INITIAL_STATE);

  useEffect(() => {
    localStorage.removeItem('manager');
  },[])

  return (
    <Container>
      <Typography>Sing in</Typography>
      <TextField
        type="text"
        variant="outlined"
        margin="normal"
        label="Username"
        name="username"
        value={values.username}
        onChange={handleChange}
        fullWidth
      />
      
      <TextField
        type="password"
        variant="outlined"
        margin="normal"
        label="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        fullWidth
      />
      {apiErros && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {apiErros}
          </Alert>
        </Snackbar>

      )}      
      <Button disabled={isSubmitting} onClick={handleSubmit}>
        Login
      </Button>
    </Container>
  );
}
export default Login;
