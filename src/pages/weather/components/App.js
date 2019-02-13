import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WeatherTable from "./WeatherTAble";
import LoginForm from "../../auth/LoginForm";
import RegForm from "../../auth/RegisterForm";
import Navbar from "./Navbar";
import HistoryApp from "../../history/components/HistoryApp";
import UserForm from "../../auth/UserForm";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Navbar />
            <Route path="/" exact component={LoginForm} />
            <Route path="/main" exact component={WeatherTable} />
            <Route path="/history" exact component={HistoryApp} />
            <Route path="/profile" exact component={UserForm} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/regist" exact component={RegForm} />
          </>
        </BrowserRouter>
      </>
    );
  }
}
