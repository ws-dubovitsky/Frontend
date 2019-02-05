import React from "react";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";

export default class WeatherTable extends React.PureComponent {
  state = {
    place: {}
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
              data={this.state.weather}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
