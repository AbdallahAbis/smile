import styled from "styled-components";
import device from "../../assets/styles/media";

import CustomButton from "../custom-button/custom-button.component";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 35rem);
  grid-column-gap: 6rem;
  grid-row-gap: 4rem;
  margin-top: 5rem;
  padding: 0 10rem;
  @media ${device.phone} {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    padding: 0 5rem;
  }
`;
export const ItemContainer = styled.div`
  position: relative;
  overflow: hidden;
`;
export const ImageContainer = styled.div``;
export const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`;
export const Button = styled(CustomButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.phone} {
    font-size: 3rem;
    padding: 1rem 2rem;
  }
`;
