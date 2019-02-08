import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "reactstrap";
// import { Link } from "react-router-dom";

import axios from "axios";

// import { fetchUser } from "../../Store/actions";

class RegForm extends React.PureComponent {
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

  onSubmit = ({ first_name, last_name, email, password }) => {
    const data = {
      first_name: first_name,
      last__name: last_name,
      email: email,
      password: password
    };
    console.log(data);

    // event.preventDefault();
    axios.post("http://localhost:3001/users/register", data);
  };

  render() {
    return (
      <>
        <form
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
            name="first_name"
            component={this.renderInput}
            label="Entet First name"
          />
          <Field
            name="last_name"
            component={this.renderInput}
            label="Enter Last name"
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
            label="Enter password"
          />

          <Button
            color="secondary"
            style={{
              textTransform: "uppercase"
            }}
          >
            Отправить
          </Button>
        </form>
      </>
    );
  }
}

const validate = ({ first_name, last_name, email, password }) => {
  const errors = {};
  if (!first_name) {
    errors.firstName = "You must enter first";
  }
  if (!last_name) {
    errors.LastName = "You must enter last name";
  }
  if (!email) {
    errors.email = "You must enter a email";
  }
  if (!password) {
    errors.password = "Password isCorrect";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate12",
  validate
})(RegForm);
