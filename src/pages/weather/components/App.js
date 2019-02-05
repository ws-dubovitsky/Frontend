import React from "react";
import WeatherTable from "./WeatherTAble";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <WeatherTable />
      </>
    );
  }
}
