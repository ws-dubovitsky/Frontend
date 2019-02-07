import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { fetchUser } from "../../Store/actions";

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

  onSubmit = formValues => {
    console.log(formValues);
    fetchUser(formValues);

    // event.preventDefault();
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
          <Field name="login" component={this.renderInput} label="Login" />
          <Field
            name="password"
            component={this.renderInput}
            label="password"
          />
          <Field
            name="confirmPassword"
            component={this.renderInput}
            label="confirm password"
          />

          <Link
            to="/regist/info"
            type="button"
            style={{
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#fff"
            }}
          >
            Отправить
          </Link>
        </form>
      </>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate12",
  validate
})(RegForm);
