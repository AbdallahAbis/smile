import React from "react";

import { Container, Label, InputField, TextArea } from "./input.styles";

const Input = ({ label, type, autoComplete, reference, ...props }) => (
  <Container>
    <Label htmlFor="">{label}</Label>
    {type !== "textArea" ? (
      <InputField
        type={type}
        ref={reference}
        {...props}
        autoComplete={autoComplete}
      />
    ) : (
      <TextArea />
    )}
  </Container>
);

export default Input;
