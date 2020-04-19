import styled from "styled-components";

import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  margin-top: 10rem;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const Button = styled(CustomButton)`
  display: inline-block;
  text-align: center;
  margin: 0 auto 10rem auto;
  // text-decoration: none;
  // color: currentColor;
`;
