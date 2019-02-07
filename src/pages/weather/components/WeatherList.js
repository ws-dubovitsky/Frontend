import React from "react";
import { connect } from "react-redux";
import WeatherRow from "./WeatherRow";
import { Table } from "reactstrap";
import WeatherHeader from "./WeatherHeader";

class WeatherList extends React.PureComponent {
  render() {
    const { sortBy, sortOrder, onSorted } = this.props;
    return (
      <>
      {this.props.weather.list.length > 0 ? (
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
        {this.props.weather.list.map(obj => (
          <WeatherRow key={obj.dt} row={obj} />
        ))}
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
