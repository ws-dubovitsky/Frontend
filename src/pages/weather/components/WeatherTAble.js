import React from "react";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";
import { get } from "lodash";

export default class WeatherTable extends React.PureComponent {
  state = {
    place: {},
    weather: [],
    sortBy: "dt",
    sortOrder: "asc"
  };

  onSorted = arg => {
    const cloneWeather = JSON.parse(JSON.stringify(this.state.weather));
    const { sortBy, sortOrder } = this.state;
    this.setState({
      weather: cloneWeather.sort(function(a, b) {
        if (get(a, sortBy) < get(b, sortBy)) {
          return sortOrder === "asc" ? 1 : -1;
        }
        if (get(a, sortBy) > get(b, sortBy)) {
          return sortOrder === "asc" ? -1 : 1;
        }
        return 0;
      }),
      sortBy: arg,
      sortOrder: sortBy === arg && sortOrder === "asc" ? "desc" : "asc"
    });
  };

  showPlaceDetails = place => {
    this.setState({
      place: place
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar onPlaceChanged={this.showPlaceDetails} />
          </Col>
        </Row>
        <Row>
          <Col>
            <WeatherList
              sortOrder={this.state.sortOrder}
              sortBy={this.state.sortBy}
              onSorted={this.onSorted}
              data={this.state.weather}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
