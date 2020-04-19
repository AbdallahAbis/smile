import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 20rem);
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ color }) => color};
  margin: 0 10rem;
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
