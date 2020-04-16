import React from "react";

import { Button } from "./custom-button.styles";

const CustomButton = ({ children, type, ...props }) => (
  <Button {...props} type={type}>
    {children}
  </Button>
);

export default CustomButton;
