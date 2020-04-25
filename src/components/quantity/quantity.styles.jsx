import styled from "styled-components";
import device from "../../assets/styles/media";
import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.phone} {
    width: 9rem;
    font-size: 3.5rem;
  }
`;
export const Button = styled(CustomButton)`
  padding: 0.5rem 1rem;
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  @media ${device.phone} {
    padding: 0rem 1rem;
  }
`;
export const Number = styled.p`
  text-align: center;
  font-size: 1.6rem;
  @media ${device.phone} {
    width: 9rem;
    font-size: 2rem;
    text-align: center;
  }
`;
