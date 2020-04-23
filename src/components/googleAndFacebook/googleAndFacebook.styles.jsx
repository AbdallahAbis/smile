import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

import variables from "../../assets/styles/variables.scss";

export const FacebookAndGoogleContainer = styled.div`
  width: 40%;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Social = styled(CustomButton)`
  margin-top: 4rem;
  width: 90%;
  background-color: ${({ type }) => variables[type]};
`;
export const Paragraph = styled.p`
  margin-bottom: 10rem;
`;
