import React from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Col, Table } from 'reactstrap';
import styled from 'styled-components';
import { fetchUserForm } from '../../Store/actions';

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem 0;
  text-transform: uppercase;
`;

class UserForm extends React.PureComponent {
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    this.props.fetchUserForm(
      decoded.first_name,
      decoded.last_name,
      decoded.email,
    );
  }

  render() {
    return (
      <Container>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Title>User info</Title>
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
  mapDispatchToProps,
)(UserForm);
