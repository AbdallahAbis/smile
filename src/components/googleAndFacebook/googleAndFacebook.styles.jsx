import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

import variables from "../../assets/styles/variables.scss";

export const Social = styled(CustomButton)`
  margin-top: 2.5rem;
  width: 90%;
  background-color: ${({ type }) => variables[type]};
`;
