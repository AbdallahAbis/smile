import React from "react";
import { Link } from "react-router-dom";

import { LogoSVG } from "./logo.styles";

const Logo = ({ ...props }) => (
  <Link to="/">
    <LogoSVG {...props} />
  </Link>
);

export default Logo;
