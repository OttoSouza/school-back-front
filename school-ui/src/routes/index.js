import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/login";
import Home from "../pages/home";
import Register from "../pages/registers";
import Header from "../components/appbar";
import ListSchool from "../pages/list";
import Enroll from "../pages/enroll";

// import { Container } from './styles';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Header>
          <Route path="/home" component={Home} />
          <Route path="/enroll" component={Enroll} />
          <Route path="/register" component={Register} />
          <Route path="/list" component={ListSchool} />
        </Header>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
