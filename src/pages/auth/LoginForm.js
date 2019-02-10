import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { login } from "../../SharedComponents/utils/axios";
import { Form, Button } from "reactstrap";

class Reg extends React.PureComponent {
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
    const User = {
      email: email,
      password: password
    };
    console.log(User);
    login(User).then(res => {
      if (res) {
        this.props.history.push(`/main`);
      }
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
        <Field name="email" component={this.renderInput} label="Enter email" />
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
})(Reg);
