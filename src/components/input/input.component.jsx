import React from "react";

import { Container, Label, InputField, TextArea } from "./input.styles";

const Input = ({ label, type, autoComplete, ...props }) => (
  <Container {...props}>
    <Label htmlFor="">{label}</Label>
    {type !== "textArea" ? (
      <InputField type={type} autoComplete={autoComplete} />
    ) : (
      <TextArea />
    )}
  </Container>
);

export default Input;
