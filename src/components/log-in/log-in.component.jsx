import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { emailSignInStart } from "../../redux/user/user.actions";
import { selectErrorMessage } from "../../redux/user/user.selectors";

import { useForm } from "react-hook-form";

import FormError, { AsyncError } from "../../components/error/error.component";

import {
  EmailAndPasswordContainer,
  Paragraph,
  InputField,
  Button,
  Question,
  Anchor
} from "./log-in.styles";

const LogIn = ({ emailSignInStart, ErrorMessage }) => {
  const { register, handleSubmit, errors } = useForm();
  const OnSubmit = ({ email, password }) => {
    emailSignInStart(email, password);
  };

  return (
    <EmailAndPasswordContainer>
      <Paragraph>Log in using your email and password!</Paragraph>
      {ErrorMessage ? <AsyncError message={ErrorMessage} /> : null}
      <form onSubmit={handleSubmit(OnSubmit)}>
        <InputField
          label="Email:"
          type="text"
          name="email"
          reference={register({
            required: "Email is Required!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address"
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
            required: "Password is required!",
            minLength: {
              value: 8,
              message: "Password should at least contain 8 characters"
            }
          })}
          autoComplete="current-password"
        />
        {errors.password && <FormError message={errors.password.message} />}
        <Button type="submit">LOG IN</Button>
      </form>
      <Question>
        You don't have an account? <Anchor to="/sign-up">Sign Up</Anchor>
      </Question>
    </EmailAndPasswordContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  ErrorMessage: selectErrorMessage
});

const mapDispatchToProps = dispatch => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
