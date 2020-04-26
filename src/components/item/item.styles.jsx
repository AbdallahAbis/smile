import styled from "styled-components";
import { Link } from "react-router-dom";
import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";

import CustomButton from "../custom-button/custom-button.component";

export const ItemContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
export const ImageContainer = styled(Link)`
  display: inline-block;
  height: 42rem;
  margin: 0 auto;
  &:hover ~ button {
    opacity: 1;
  }

  @media ${device.tabPort} {
    & ~ button {
      opacity: 1;
    }
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
  @media ${device.tabPort} {
    font-size: 1.9rem;
  }
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
  bottom: 10%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.2s;
  &:hover {
    opacity: 1;
  }

  @media ${device.tabPort} {
    font-size: 1.5rem;
  }
`;
