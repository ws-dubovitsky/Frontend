import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import WeatherTable from "./WeatherTAble";
import LoginForm from "../../auth/LoginForm";
import RegForm from "../../auth/RegisterForm";
import Navbar from "./Navbar";
import HistoryTable from "../../history/components/HistoryHeader";
import Profile from "./Profile";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Navbar />
            <Route path="/" exact component={Landing} />
            <Route path="/main" exact component={WeatherTable} />
            <Route path="/history" exact component={HistoryTable} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/regist" exact component={RegForm} />
          </>
        </BrowserRouter>
      </>
    );
  }
}
