import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import WeatherTable from "./WeatherTAble";
// import HistoryItem from "../../history/components/HistoryItem";
import LoginForm from "../../auth/LoginForm";
import RegForm from "../../auth/RegForm";
// import Info from "../../auth/info";



import Navbar from "./Navbar";
import HistoryList from "../../history/components/HistoryList";
// import HistoryCollapse from "../../history/components/HistoryCollapse";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Navbar />
            <Route path="/" exact component={Landing} />
            <Route path="/main" exact component={WeatherTable} />
            <Route path="/history" exact component={HistoryList} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/regist" exact component={RegForm} />
          </>
        </BrowserRouter>
      </>
    );
  }
}
