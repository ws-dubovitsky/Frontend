import React from "react";
import { Button } from "reactstrap";

export default class Btn extends React.PureComponent {
  render() {
    return (
      <Button
        outline
        color="secondary"
        onClick={this.props.toggle}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: "1rem",
          marginTop: "1rem"
        }}
      >
        {this.props.city} {this.props.date}
      </Button>
    );
  }
}
