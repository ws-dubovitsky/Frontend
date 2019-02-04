import React from "react";
import WeatherTable from "./WeatherTAble";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/weather" exact component={WeatherTable} />
        </div>
      </BrowserRouter>
    );
  }
}
