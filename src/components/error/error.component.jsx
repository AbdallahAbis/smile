import React from "react";

import {
  FormContainer,
  AsyncContainer,
  FormMessage,
  AsyncMessage
} from "./error.styles";

const FormError = ({ message }) => (
  <FormContainer>
    <FormMessage>{message}</FormMessage>
  </FormContainer>
);

export const AsyncError = ({ message }) => {
  return (
    <AsyncContainer>
      <AsyncMessage>{message}</AsyncMessage>
    </AsyncContainer>
  );
};

export default FormError;
