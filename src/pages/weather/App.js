import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginForm from "../../pages/auth/login/index";
import RegisterForm from "../../pages/auth/register/index";

import Navbar from "./Navbar";

import AppProtected from "./AppProtected";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Route path="/" exact component={LoginForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/regist" exact component={RegisterForm} />
          <Route exact component={AppProtected} />
        </>
      </BrowserRouter>
    );
  }
}
