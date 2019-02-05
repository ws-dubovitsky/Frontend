import React from "react";
import { connect } from "react-redux";
import WeatherRow from "./WeatherRow";

class WeatherList extends React.PureComponent {
  render() {
    console.log(this.props.weather.list.map(item => item.main));
    return (
      <>
        {this.props.weather.list.map(obj => (
          <WeatherRow key={obj.dt} row={obj} />
        ))}
      </>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
