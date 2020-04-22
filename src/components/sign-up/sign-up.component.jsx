import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useForm } from "react-hook-form";

import { signUpStart } from "../../redux/user/user.actions";
import { selectErrorMessage } from "../../redux/user/user.selectors";

import FormError, { AsyncError } from "../../components/error/error.component";

import {
  EmailAndPasswordContainer,
  Paragraph,
  InputField,
  Button,
  Question,
  Anchor
} from "./sign-up.styles";

const SignUp = ({ signUpStart, ErrorMessage }) => {
  const { register, handleSubmit, errors, getValues } = useForm();

  const OnSubmit = data => {
    const { email, password, displayName } = data;
    signUpStart(email, password, displayName);
  };
  return (
    <EmailAndPasswordContainer>
      {ErrorMessage ? <AsyncError message={ErrorMessage} /> : null}
      <Paragraph>Sign up using your email and password!</Paragraph>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <InputField
          label="Full Name:"
          name="displayName"
          reference={register({
            required: "Full Name is Required!"
          })}
          type="text"
        />
        {errors.displayName && (
          <FormError message={errors.displayName.message} />
        )}
        <InputField
          label="Email:"
          type="text"
          name="email"
          reference={register({
            required: "Email is Required!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid Email address"
            }
          })}
          autoComplete="username"
        />
        {errors.email && <FormError message={errors.email.message} />}
        <InputField
          label="Password:"
          type="password"
          name="password"
          reference={register({
            required: "Password is Required!",
            minLength: {
              value: 8,
              message: "Password should at least 8 characters"
            }
          })}
          autoComplete="new-password"
        />
        {errors.password && <FormError message={errors.password.message} />}
        <InputField
          label="Confirm Password:"
          type="password"
          name="confirmPassword"
          reference={register({
            required: "Please confirm password!",
            validate: {
              matchesPreviousPassword: value => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
              }
            }
          })}
          autoComplete="new-password"
        />
        {errors.confirmPassword && (
          <FormError message={errors.confirmPassword.message} />
        )}
        <Button>SIGN UP</Button>
      </form>
      <Question>
        You already have an account? <Anchor to="/log-in">Log In</Anchor>
      </Question>
    </EmailAndPasswordContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  ErrorMessage: selectErrorMessage
});

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
