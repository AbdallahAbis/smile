import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";

const buttonStyles = css`
  color: ${variables.white};
  display: inline-block;
  background: ${variables.red};
  font-family: ${variables.viga};
  font-size: 1.8rem;
  align-self: start;
  border: none;
  border-radius: 3px;
  padding: 1.2rem 2.5rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:hover {
    background: ${variables.lightGrey};
    color: ${variables.black};
  }
  &:focus {
    outline: none;
  }

  @media ${device.phone} {
    font-size: 2.5rem;
    &:hover {
      background: ${variables.red};
      color: ${variables.white};
    }
  }
`;

export const Button = styled.button`
  ${buttonStyles}
`;
export const LinkButton = styled(Link)`
  ${buttonStyles}
`;
export const ButtonReversed = styled(Button)`
  color: ${variables.black};
  background: ${variables.lightGrey};
  &:hover {
    background: ${variables.red};
    color: ${variables.white};

    @media ${device.phone} {
      &:hover {
        background: ${variables.lightGrey};
        color: ${variables.black};
      }
    }
  }
`;
