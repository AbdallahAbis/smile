import React from "react";

import { Button, LinkButton, ButtonReversed } from "./custom-button.styles";

const CustomButton = ({ children, reversed, link, ...props }) =>
  reversed ? (
    <ButtonReversed {...props}>{children}</ButtonReversed>
  ) : link ? (
    <LinkButton {...props}>{children}</LinkButton>
  ) : (
    <Button {...props}>{children}</Button>
  );

export default CustomButton;
