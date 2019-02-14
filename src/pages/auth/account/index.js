import React from "react";
import jwt_decode from "jwt-decode";
import { fetchUserForm } from "../../../Store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Col, Table } from "reactstrap";

class UserForm extends React.PureComponent {
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.props.fetchUserForm(
      decoded.first_name,
      decoded.last_name,
      decoded.email
    );
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
            User info
          </h1>
          <Table striped>
            <tbody>
              <tr>
                <td>First name</td>
                <td>{this.props.userForm.list.first_name}</td>
              </tr>
              <tr>
                <td>Last name</td>
                <td>{this.props.userForm.list.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.props.userForm.list.email}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Container>
    );
  }
}

function mapStateToProps({ userForm }) {
  return { userForm };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUserForm }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
