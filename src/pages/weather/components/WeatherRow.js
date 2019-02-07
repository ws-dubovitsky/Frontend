import React from "react";
import WeatherCeil from "./WeatherCeil";
// import { Collapse, Button, CardBody, Card } from "reactstrap";

export default class WeatherRow extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = { collapse: false };
  // }

  // toggle = () => {
  //   this.setState({ collapse: !this.state.collapse });
  // };

  render() {
    return (
      <tr>
        <WeatherCeil ceil={this.props.row.dt_txt} />
        <WeatherCeil ceil={Math.floor(this.props.row.main.temp - 273)} />
        <WeatherCeil ceil={this.props.row.weather[0].description} />
      </tr>
    );
  }
}
