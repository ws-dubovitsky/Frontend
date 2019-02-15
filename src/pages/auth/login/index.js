import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { login } from "../../../utils/axios";
import { Form, Button } from "reactstrap";

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

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = ({ email, password }) => {
    const user = {
      email: email,
      password: password
    };

    login(user)
      .then(res => {
        localStorage.setItem("usertoken", res.data);
        return res.data;
      })
      .then(res => {
        if (res) {
          this.props.history.push(`/main`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Form
        style={{
          width: "600px",
          margin: "0 auto",
          padding: "0 100px 0 100px",
          paddingRight: "100px"
        }}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <h1
          style={{ textAlign: "center", fontSize: "1.5rem", padding: "2rem 0" }}
        >
          Авторизация
        </h1>
        <Field
          name="email"
          component={this.renderInput}
          label="Enter email"
          validate={email}
        />
        <Field
          name="password"
          component={this.renderInput}
          label="Enter password"
        />
        <div>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyle: "none",
              textDecoration: "uppercase",
              paddingLeft: "0"
            }}
          >
            <li>
              <Button
                style={{ textTransform: "uppercase", padding: "0.2rem 1rem" }}
                className="primary"
              >
                вход
              </Button>
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                textTransform: "uppercase"
              }}
            >
              <Link
                to="/regist"
                style={{ color: "#000", textDecoration: "none" }}
              >
                Регистрация
              </Link>
            </li>
          </ul>
        </div>
      </Form>
    );
  }
}

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const validate = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.title = "You must enter a email";
  }
  if (!password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate12",
  validate
})(LoginForm);
