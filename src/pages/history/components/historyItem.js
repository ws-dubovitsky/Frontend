import React from "react";
import HistoryItem from "./HistoryItem";

export default class HistoryList extends React.PureComponent {
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
          <HistoryItem ceil={this.props.row.dt_txt} />
        </Button>
        <Collapse style={{ marginBottom: "1rem" }} isOpen={this.state.collapse}>
          <Card>
            <br />
            <CardBody style={{ textAlign: "center" }}>
              <HistoryItem
                ceil={`Temperature: ${Math.floor(
                  this.props.row.main.temp - 273
                )} C`}
              />
              <br />
              <HistoryItem
                ceil={`Weather condition: ${
                  this.props.row.weather[0].description
                }`}
              />
            </CardBody>
          </Card>
        </Collapse>
      </>
    );
  }
}
