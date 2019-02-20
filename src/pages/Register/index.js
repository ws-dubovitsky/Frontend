import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { register } from "../../utils/axios";
import styled from "styled-components";

const Form = styled.form`
  width: 600px;
  margin: 0 auto;
  padding: 0 100px 0 100px;
`;
const Title = styled.h1`
  textalign: center;
  fontsize: 1.5rem;
  padding: 2rem 0;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-decoration: uppercase;
  padding-left: 0;
`;
const StyledLink = styled(Link)`
  color: #000 !important;
  text-decoration: none !important;
  text-transform: uppercase;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-self: center;
  text-transform: uppercase;
`;

class RegisterForm extends React.PureComponent {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={type} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = ({
    username,
    firstname,
    lastname,
    email,
    password,
    confirm_password
  }) => {
    const data = {
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      confirm_password: confirm_password
    };
    // console.log(data);
    register(data).then(res => {
      this.props.history.push(`/login`);
    });
  };

  render() {
    return (
      <Form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Title>Register New Account</Title>
        <Field
          name="username"
          component={this.renderInput}
          label="Enter User name"
        />
        <Field
          name="firstname"
          component={this.renderInput}
          label="Enter First Name"
        />
        <Field
          name="lastname"
          component={this.renderInput}
          label="Enter Last Name"
        />
        <Field
          name="email"
          type="email"
          component={this.renderInput}
          label="Enter Email"
        />
        <Field
          name="password"
          component={this.renderInput}
          type="password"
          label="Enter Password"
        />
        <Field
          name="confirm_password"
          component={this.renderInput}
          type="password"
          label="Confirm Password"
        />
        <div>
          <Ul>
            <li>
              <Button
                color="secondary"
                style={{
                  textTransform: "uppercase"
                }}
              >
                Register
              </Button>
            </li>
            <Li>
              <StyledLink to="/login">Sign up</StyledLink>
            </Li>
          </Ul>
        </div>
      </Form>
    );
  }
}

const validate = ({
  username,
  firstname,
  lastname,
  email,
  password,
  confirm_password
}) => {
  const errors = {};
  if (!username) {
    errors.username = "You must enter user name";
  } else if (username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!firstname) {
    errors.firstname = "You must enter first name";
  }
  if (!lastname) {
    errors.lastname = "You must enter last name";
  }
  if (!email) {
    errors.email = "You must enter email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "You must enter password";
  }
  if (!password) {
    errors.password = "You must enter password";
  }
  if (!confirm_password) {
    errors.confirm_password = "You must enter confirm password";
  }
  if (confirm_password !== password) {
    errors.confirm_password = "Passwords don't match";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate12",
  validate
})(RegisterForm);
