import styled from "styled-components";
import device from "../../assets/styles/media";

import CustomButton from "../../components/custom-button/custom-button.component";

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 0 10rem;

  @media ${device.phone} {
    margin: 5rem 0 0 0;
    padding: 0 5rem;
  }
`;

export const Button = styled(CustomButton)`
  margin: 0 auto 10rem auto;
`;
