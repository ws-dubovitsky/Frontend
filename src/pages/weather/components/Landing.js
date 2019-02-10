import React from "react";
import { Container, Col } from "reactstrap";

export default class Landing extends React.PureComponent {
  render() {
    return (
      <Container>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "3rem",
              backgroundColor: "#f7f7f7",
              color: "777",
              width: "50rem",
              padding: "1rem",
              marginTop: "2rem"
            }}
          >
            welcome
          </h1>
        </Col>
      </Container>
    );
  }
}
