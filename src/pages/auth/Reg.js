import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

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

  onSubmit = formValues => {
    return formValues;
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
          <button
            style={{ textTransform: "uppercase" }}
            className="ui button primary"
          >
            вход
          </button>
          <Link to="/regist" style={{ textTransform: "uppercase" }}>
            Регистрация
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
})(Reg);
