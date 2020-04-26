import styled from "styled-components";
import device from "../../assets/styles/media";

export const Container = styled.div`
  margin: 10rem 10rem 0 10rem;
  display: flex;
  justify-content: space-between;

  @media ${device.tabPort} {
    margin: 0;
    padding: 10rem 5rem 0 5rem;
    flex-direction: column-reverse;
  }
`;
