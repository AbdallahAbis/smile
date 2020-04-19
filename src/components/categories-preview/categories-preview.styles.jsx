import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 35rem);
  grid-column-gap: 6rem;
  grid-row-gap: 4rem;
  margin-top: 5rem;
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
`;
