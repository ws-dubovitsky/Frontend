import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import axios from "axios";
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
    const login = {
      email: email,
      password: password
    };
    console.log(login);
    return axios
      .post("http://localhost:3001/users/login", login)
      .then(res => {
        localStorage.setItem("usertoken", res.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
    // event.preventDefault();
  };

  render() {
    return (
      <>
        <Form
          style={{
            width: "600px",
            margin: "0 auto",
            padding: "60px",
            paddingLeft: "100px",
            paddingRight: "100px"
          }}
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="email"
            component={this.renderInput}
            label="Enter email"
          />
          <Field
            name="password"
            component={this.renderInput}
            label="Enter Password"
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
                  style={{ textTransform: "uppercase" }}
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
                <Link to="/regist" style={{ color: "#000", textDecoration:"none" }}>
                  Регистрация
                </Link>
              </li>
            </ul>
          </div>
        </Form>
      </>
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
