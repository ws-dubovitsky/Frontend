import React from "react";
import { Form, InputGroup } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
/* global google */

class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged = () => {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChanged(place);

    this.props.fetchWeather(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    );
  };

  render() {
    return (
      <Form>
        <InputGroup>
          <input
            className="form-control"
            ref={this.autocompleteInput}
            id="autocomplete"
            placeholder="Enter a location"
            type="text"
          />
        </InputGroup>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
