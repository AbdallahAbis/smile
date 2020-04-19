import styled from "styled-components";
import { Link } from "react-router-dom";

import variables from "../../assets/styles/variables.scss";

import Input from "../../components/input/input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  margin: 8rem 10rem 0 10rem;
  padding-top: 6vw;
  display: flex;
  justify-content: space-between;
`;
export const EmailAndPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const Paragraph = styled.p`
  margin-bottom: 8rem;
`;
export const InputField = styled(Input)`
  margin-bottom: 3rem;
  width: 70%;
`;
export const Button = styled(CustomButton)`
  margin-top: 5rem;
`;

export const FacebookAndGoogleContainer = styled.div`
  width: 40%;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
export const Social = styled(CustomButton)`
  margin-top: 2.5rem;
  width: 90%;
  background-color: ${({ type }) => variables[type]};
`;
export const Anchor = styled(Link)`
  text-decoration: none;
  color: ${variables.lightBlue};
`;
export const Question = styled(Paragraph)`
  margin-top: 3rem;
`;
