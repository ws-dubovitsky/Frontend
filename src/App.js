import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AppProtected from "./pages/AppProtected";
import RegisterForm from "./pages/Register";
import LoginComponent from "./pages/Login";

export default class App extends React.Component {
 
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route
            exact
            path="/login"
            render={({history}) => <LoginComponent history={history}/>}
          />
          <Route
            exact
            path="/register"
            render={({history}) => <RegisterForm history={history}/>}
          />
           <Route
            path="/"
            component={AppProtected}
          />
        </Switch>
      </BrowserRouter>
    ) 
  }
}
