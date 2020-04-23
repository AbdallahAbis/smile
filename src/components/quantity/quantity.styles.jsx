import styled from "styled-components";

import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled(CustomButton)`
  padding: 0.5rem 1rem;
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
export const Number = styled.p``;
