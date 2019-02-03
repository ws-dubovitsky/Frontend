import { Table } from "reactstrap";
import React from "react";
import { connect } from "react-redux";
import WeatherRow from "./WeatherRow";
import WeatherHeader from "./WeatherHeader";
import "./WeatherList.css";

import _ from "lodash";
import { WeatherAPIRequest } from "../utils/axios";

class WeatherList extends React.PureComponent {
  //
  // rendered(){
  //
  //   const weatherList = _.map(this.props.weather, "data.list");
  //   // const date = _.map(weatherList[0], "dt_txt");
  //   // const a  =  weatherList[0].map(date => date.dt_txt);
  //   // const temp = weatherList[0].map(date => Math.floor(date.main.temp - 273));
  //   // const des = weatherList[0].map(date => date.weather[0].description);
  //   return (
  //     <Table bordered>
  //       <tr>
  //         <td>{a}</td>
  //       </tr>
  //     </Table>
  //   );
  // };

  // rendered(cityData) {
  //   const temps = _.map(cityData.list.map(weather => weather.main.temp),
  //     temp => temp - 273.15
  //   );
  //   // const pressures = cityData.list.map(weather => weather.main.pressure);
  //   // const humidities = cityData.list.map(weather => weather.main.humidity);

  //   return { temps };
  // }

  render() {
    const cloneWeather = JSON.parse(JSON.stringify(this.props.weather));
    // const weatherList = _.map(this.props.weather, "data.list");
    const a = cloneWeather.map(date => date.data.list);

    console.log("CLONE", a.map(item => item[0].main));
    // console.log(this.props);

    const { sortBy, sortOrder, data, onSorted } = this.props;
    return (
      <>
        {data.length > 0 ? (
          <Table bordered>
            <thead>
              <tr>
                <WeatherHeader
                  param="dt"
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  onSorted={onSorted}
                >
                  Date
                </WeatherHeader>
                <WeatherHeader
                  param="main.temp"
                  onSorted={onSorted}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                >
                  Temperature
                </WeatherHeader>
                <WeatherHeader
                  param="weather[0].description"
                  onSorted={onSorted}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                >
                  Weather condition
                </WeatherHeader>
              </tr>
            </thead>
            <tbody>
              {/* {weather.map(obj => <WeatherRow key={obj.data.list.dt} row={obj.data.list} />)} */}
            </tbody>
          </Table>
        ) : null}
      </>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
