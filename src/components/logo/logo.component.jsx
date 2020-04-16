import React from "react";

import { LogoWhite, LogoBlack } from "./logo.styles";

const Logo = ({ color }) => (
  <React.Fragment>
    {color === "white" ? <LogoWhite /> : <LogoBlack />}
  </React.Fragment>
);

export default Logo;
