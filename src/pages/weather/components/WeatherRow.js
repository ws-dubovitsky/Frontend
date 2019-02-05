import React from "react";
import WeatherCeil from "./WeatherCeil";
import { Collapse, Button, CardBody, Card } from "reactstrap";

export default class WeatherRow extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <>
        <Button
          outline
          color="secondary"
          onClick={this.toggle}
          style={{
            marginBottom: "1rem"
          }}
        >
          <WeatherCeil ceil={this.props.row.dt_txt} />
        </Button>
        <Collapse style={{ marginBottom: "1rem" }} isOpen={this.state.collapse}>
          <Card>
            <br />
            <CardBody style={{ textAlign: "center" }}>
              <WeatherCeil
                ceil={`Temperature: ${Math.floor(
                  this.props.row.main.temp - 273
                )} C`}
              />
              <br />
              <WeatherCeil
                ceil={`Weather condition: ${
                  this.props.row.weather[0].description
                }`}
              />
            </CardBody>
          </Card>
        </Collapse>

        {/* <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}
