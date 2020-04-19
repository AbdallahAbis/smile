import React from "react";
import { Link } from "react-router-dom";

import { LogoWhite, LogoBlack } from "./logo.styles";

const Logo = ({ color }) => (
  <React.Fragment>
    {color === "black" ? (
      <Link to="/">
        <LogoBlack />
      </Link>
    ) : (
      <Link to="/">
        <LogoWhite />
      </Link>
    )}
  </React.Fragment>
);

export default Logo;
