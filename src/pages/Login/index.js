import React from "react";
import { Field, reduxForm } from "redux-form";
// import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import styled from "styled-components";
import { login } from "../../utils/axios";
import asyncLocalStorage from "../../utils/localstorage.helper";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.password) {
    errors.password = "You must enter password";
  }
  // if (!values.email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div
    style={{
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "center",
      margin: "10px 5px"
    }}
  >
    <label
      style={{
        fontWeight: "bold",
        marginRight: "10px",
        minWidth: "150px",
        textAlign: "right",
        padding: "6px 9px"
      }}
    >
      {label}
    </label>
    <div
      style={{
        flex: "1",
        maxWidth: "500px",
        display: "flex",
        flexFlow: "column nowrap",
        position: "relative"
      }}
    >
      <input
        style={{
          flex: "1",
          fontSize: "16px",
          padding: "5px 8px",
          border: "1px solid #ccc"
        }}
        {...input}
        autoComplete="off"
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class LoginForm extends React.PureComponent {
  onSubmit = ({ username, password }) => {
    const user = {
      username: username,
      password: password
    };

    console.log(user);

    login(user)
      .then(res => {
        console.log("res.data", res.data);
        if (!res) throw new Error("Something wrong");
        return asyncLocalStorage.setItem("usertoken", res.data.token);
      })
      .then(() => {
        console.log("this.props", this.props);
        return this.props.history.push(`/`);
      })
      .catch(err => {
        // console.log(err);
      });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <h1
          style={{
            display: "flex",
            padding: "1.5rem",
            borderBottom: "1px solid #E8E8E8"
          }}
        >
          Create Account
        </h1>
        <div>
        <form
          style={{
            margin: "0",
            padding: "0",
            border: "0",
            outline: "0",
            maxWidth: "inherit",
            boxSizing: "border-box"
          }}
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="username"
            type="text"
            component={renderField}
            label="username"
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Password"
          />
          <Field
            name="checkbox"
            component={renderField}
            type="checkbox"
            label="Confirm"
          />
          <div style={{display:"flex", justifyContent:"center"}}>
          <Button className="primary" className="primary">
            Start
          </Button>
          </div>
        </form>
      </div>
      </>
    );
  }
}

export default reduxForm({
  form: "streamCreate12", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(LoginForm);
