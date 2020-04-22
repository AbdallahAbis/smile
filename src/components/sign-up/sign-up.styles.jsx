import styled from "styled-components";
import { Link } from "react-router-dom";

import variables from "../../assets/styles/variables.scss";

import Input from "../../components/input/input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  // height: calc(100vh - 8rem);
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
  width: 70%;
`;
export const Button = styled(CustomButton)`
  margin-top: 5rem;
`;
export const Anchor = styled(Link)`
  text-decoration: none;
  color: ${variables.lightBlue};
`;
export const Question = styled(Paragraph)`
  margin-top: 3rem;
`;
