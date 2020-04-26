import styled from "styled-components";
import { NavLink } from "react-router-dom";

import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media.js";

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
  //MediaQueries
  @media ${device.phone} {
    height: 8rem;
    padding: 0 5rem;
    background: ${variables.white};
    color: ${variables.black};
  }
`;
export const OptionsContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  @media ${device.phone} {
    position: absolute;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.55);
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: ${variables.white};
    color: ${variables.black};
    flex-direction: column;
    padding-top: 50%;
    padding-bottom: 70%;
    overflow: hidden;
    font-size: 2rem;
    transform: translate(-200%, 0);
    transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1);

    &.true {
      display: flex;
      transform: none;
      opacity: 1;
    }
  }
`;
export const Option = styled(NavLink)`
  text-decoration: none;
  color: currentColor;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;
