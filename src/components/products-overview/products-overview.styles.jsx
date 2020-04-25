import styled from "styled-components";
import device from "../../assets/styles/media";

import variables from "../../assets/styles/variables.scss";

export const Container = styled.div`
  margin: 10rem 0;
  text-align: center;

  @media ${device.phone} {
    margin: 10rem 0;
    font-size: 2rem;
  }
`;
export const MainTitle = styled.h2`
  font-family: ${variables.viga};
  letter-spacing: 0.5px;
`;
