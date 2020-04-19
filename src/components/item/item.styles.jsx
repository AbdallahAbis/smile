import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

import variables from "../../assets/styles/variables.scss";

export const ItemContainer = styled.div`
  position: relative;
`;
export const ImageContainer = styled.div`
  height: 42rem;
  width: 24rem;
  margin: 0 auto;
  &:hover ~ a {
    opacity: 1;
  }
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  cursor: pointer;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;
export const Title = styled.p`
  font-family: ${variables.montserrat};
`;
export const Price = styled.p`
  font-family: ${variables.montserrat};
`;
export const Button = styled(CustomButton)`
  font-family: ${variables.montserrat};
  position: absolute;
  width: 80%;
  left: 50%;
  bottom: 7%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    // display: inline-block;
  }
`;
