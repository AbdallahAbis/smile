import styled from "styled-components";
import { NavLink } from "react-router-dom";

import variables from "../../assets/styles/variables.scss";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ color }) => color};
  background: ${({ background }) => variables[background]};
  z-index: 5000;
  padding: 0 10rem;
`;
export const OptionsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Option = styled(NavLink)`
  text-decoration: none;
  color: currentColor;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;
