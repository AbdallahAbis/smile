import styled from "styled-components";
import { Link } from "react-router-dom";
import variables from "../../assets/styles/variables.scss";

import { ReactComponent as NotFoundSVG } from "../../assets/icons/404/404-error.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-family: ${variables.viga};
  font-size: 12rem;
  margin-top: -15rem;
`;
export const SubTitle = styled.p`
  font-family: ${variables.montserrat};
  color: ${variables.red};
  margin-top: 6rem;
  font-size: 6rem;
`;
export const Text = styled.p`
  font-family: ${variables.montserrat};
  font-size: 1.6rem;
  margin-top: 3rem;
`;
export const SVG = styled(NotFoundSVG)`
  height: 20rem;
`;
export const Anchor = styled(Link)`
  color: ${variables.lightBlue};
  text-decoration: none;
`;
