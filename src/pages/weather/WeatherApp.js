import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./components/SearchBar";
import WeatherList from "./components/WeatherList";
import {onSorted, clearWeatherData} from "../../Store/actions";
// import { get } from "lodash";

class WeatherTable extends React.PureComponent {
  // state = {
  //   sortBy: "dt",
  //   sortOrder: "asc"
  // };

  onSorted = arg => {
    this.props.onSorted(arg);
    console.log('arg', arg)
    console.log('this.props', this.props)
    // const cloneWeather = JSON.parse(JSON.stringify(this.props.weather.list));
    // const { sortBy, sortOrder } = this.state;
    // this.setState({
    //   weather: cloneWeather.sort(function(a, b) {
    //     if (get(a, sortBy) < get(b, sortBy)) {
    //       return sortOrder === "asc" ? 1 : -1;
    //     }
    //     if (get(a, sortBy) > get(b, sortBy)) {
    //       return sortOrder === "asc" ? -1 : 1;
    //     }
    //     return 0;
    //   }),
    //   sortBy: arg,
    //   sortOrder: sortBy === arg && sortOrder === "asc" ? "desc" : "asc"
    // });
  };

  componentWillUnmount() {
    console.log('unmount');
    this.props.clearWeatherData();
  }

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
              sortOrder={this.props.weather.sortOrder}
              sortBy={this.props.weather.sortBy}
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onSorted, clearWeatherData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherTable);
