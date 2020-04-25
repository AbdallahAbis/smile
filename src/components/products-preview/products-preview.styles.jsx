import styled from "styled-components";
import device from "../../assets/styles/media";

export const ProductContainer = styled.div`
  width: 100%;
  padding: 0 10rem;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 240px));
  grid-column-gap: 6rem;
  grid-row-gap: 3rem;
  justify-content: center;
  @media ${device.phone} {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 150px));
    grid-auto-rows: 45rem;
    overflow: hidden;
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    padding: 0 5rem;
  }
`;
