import React from "react";
import jwt_decode from "jwt-decode";
import { Container, Col, Table } from "reactstrap";

class Profile extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log("Decoded", decoded);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  render() {
    return (
      <Container>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              padding: "2rem 0",
              textTransform: "uppercase"
            }}
          >
            Profile
          </h1>
          <Table striped>
            <tbody>
              <tr>
                <td>First name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    );
  }
}

export default Profile;
