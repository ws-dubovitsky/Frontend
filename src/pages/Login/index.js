import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { login } from "../../utils/axios";
import asyncLocalStorage from "../../utils/localstorage.helper"
import { Button } from "reactstrap";
import styled from "styled-components";

const Form = styled.form`
  width: 600px;
  margin: 0 auto;
  padding: 0 100px 0 100px;
  padding-right: 100px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem 0;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-decoration: uppercase;
  padding-left: 0;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-self: center;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  text-transform: uppercase;
  padding: 0.2rem 1rem;
`;

class LoginForm extends React.PureComponent {
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

  onSubmit = ({ username, password }) => {
    const user = {
      username: username,
      password: password
    };

    login(user)
      .then(res => {
        // console.log("res.data", res.data);
        if(!res) throw new Error('Something wrong')
        return asyncLocalStorage.setItem("usertoken", res.data.token);
      })
      .then(() => {
        // console.log('asyncLocalStorage.getItem("usertoken")', asyncLocalStorage.getItem("usertoken"))
        return this.props.history.push(`/dashboard`);
      })
      .catch(err => {
        // console.log(err);
      });
  };

  render() {
    return (
      <Form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Title>Authorization</Title>
        <Field
          name="username"
          component={this.renderInput}
          label="Enter User Name"
        />
        <Field
          name="password"
          component={this.renderInput}
          type="password"
          label="Enter Password"
        />
        <div>
          <Ul>
            <li>
              <StyledButton className="primary">sing up</StyledButton>
            </li>
            <Li>
              <StyledLink to="/register">sign in</StyledLink>
            </Li>
          </Ul>
        </div>
      </Form>
    );
  }
}

const validate = ({ username, password }) => {
  const errors = {};
  if (!username) {
    errors.username = "You must enter user name";
  }
  if (!password) {
    errors.password = "You must enter password";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate12",
  validate
})(LoginForm);
