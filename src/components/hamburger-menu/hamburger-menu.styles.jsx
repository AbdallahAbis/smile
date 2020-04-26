import styled from "styled-components";
import device from "../../assets/styles/media";

export const Container = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media ${device.tabPort} {
    display: flex;
  }
`;
export const MenuBars = styled.div`
  position: relative;
  width: 30px;
  height: 3px;
  border-radius: 25px;
  background: currentColor;
  transition: all 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 25px;
    background: currentColor;
    transition: all 0.2s ease-in-out;
  }
  &::before {
    transform: rotate(0deg) translateY(-7px);
  }
  &::after {
    transform: translateY(7px);
  }

  .true > & {
    transform: translateX(-40px);
    background: transparent;
    box-shadow: none;
    &::before {
      transform: rotate(45deg) translate(28px, -28px);
    }
    &::after {
      transform: rotate(-45deg) translate(28px, 28px);
    }
  }
`;
