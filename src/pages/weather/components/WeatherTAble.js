import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";
import { get } from "lodash";

class WeatherTable extends React.PureComponent {
  state = {
    sortBy: "dt",
    sortOrder: "asc"
  };

  onSorted = arg => {
    const cloneWeather = JSON.parse(JSON.stringify(this.props.weather.list));
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

  render() {
    console.log(this.props.weather);
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "justify",
              flexDirection: "column",
              flexWrap: "wrap"
            }}
          >
            <WeatherList
              style={{ display: "flex" }}
              sortOrder={this.state.sortOrder}
              sortBy={this.state.sortBy}
              onSorted={this.onSorted}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherTable);
