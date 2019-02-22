import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { Link } from "react-router-dom";
import styled from 'styled-components';
import { login } from '../../utils/axios';
import asyncLocalStorage from '../../utils/localstorage.helper';
import Header from '../../SharedComponents/Header/index';
import MyButton from '../../SharedComponents/Button/index';

const StyledLabel = styled.label`
  font-weight: bold;
  marginright: 10px;
  minwidth: 150px;
  textalign: right;
  padding: 6px 9px;
`;

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.password) {
    errors.password = 'You must enter password';
  }
  return errors;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      margin: '10px 5px',
    }}
  >
    <StyledLabel>{label}</StyledLabel>
    <div
      style={{
        flex: '1',
        maxWidth: '500px',
        display: 'flex',
        flexFlow: 'column nowrap',
        position: 'relative',
      }}
    >
      <input
        style={{
          flex: '1',
          fontSize: '16px',
          padding: '5px 8px',
          border: '1px solid #ccc',
        }}
        {...input}
        autoComplete="off"
        type={type}
      />
      {touched
        && ((error && <span>{error}</span>)
          || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class LoginForm extends React.PureComponent {
  onSubmit = ({ username, password }) => {
    const user = {
      username,
      password,
    };

    login(user)
      .then((res) => {
        console.log('res.data', res.data);
        if (!res) throw new Error('Something wrong');
        return asyncLocalStorage.setItem('usertoken', res.data.token);
      })
      .then(() => this.props.history.push('/'))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Header>Create Account</Header>
        <div>
          <form
            style={{
              margin: '0',
              padding: '0',
              border: '0',
              outline: '0',
              maxWidth: 'inherit',
              boxSizing: 'border-box',
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MyButton className="primary">
                Start
              </MyButton>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default reduxForm({
  form: 'streamCreate12', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(LoginForm);
