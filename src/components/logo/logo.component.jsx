import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "./logo.styles";

const Logo = ({ ...props }) => (
  <Link to="/">
    <Logo {...props} />
  </Link>
);

export default Logo;
