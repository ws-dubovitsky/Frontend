import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import WeatherTable from "./WeatherTAble";
// import HistoryItem from "../../history/components/HistoryItem";

import Reg from "../../auth/Reg";
import RegForm from "../../auth/RegForm";
import Info from "../../auth/info";

import Navbar from "./Navbar";
// import HistoryCollapse from "../../history/components/HistoryCollapse";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Navbar />
            <Route path="/logout" exact component={Reg} />
            <Route path="/regist" exact component={RegForm} />
            <Route path="/regist/info" exact component={Info} />
            <Route path="/main" exact component={WeatherTable} />
            {/* <Route path="/history" exact component={HistoryCollapse}  /> */}
           
          </>
        </BrowserRouter>
      </>
    );
  }
}
