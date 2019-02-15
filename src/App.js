import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import LoginForm from "./pages/auth/login/index";
import RegisterForm from "./pages/auth/register/index";
// import Navbar from "./Navbar";
import AppProtected from "./pages/AppProtected";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/regist" exact component={RegisterForm} />
            <Route exact component={AppProtected} />
          </Switch>
        
      </BrowserRouter>
    );
  }
}
