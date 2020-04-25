import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";

export const FacebookAndGoogleContainer = styled.div`
  width: 40%;
  justify-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media ${device.phone} {
    width: 100%;
    font-size: 2rem;
    justify-self: center;
  }
`;

export const Social = styled(CustomButton)`
  margin-top: 4rem;
  width: 90%;
  background-color: ${({ type }) => variables[type]};

  @media ${device.phone} {
    align-self: center;
  }
`;
export const Paragraph = styled.p`
  margin-bottom: 10rem;
  @media ${device.phone} {
    margin-bottom: 0;
    align-self: center;
  }
`;
