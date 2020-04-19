import React from "react";

import { Button, ButtonReversed } from "./custom-button.styles";

const CustomButton = ({ children, reversed, ...props }) =>
  reversed ? (
    <ButtonReversed {...props}>{children}</ButtonReversed>
  ) : (
    <Button {...props}>{children}</Button>
  );

export default CustomButton;
