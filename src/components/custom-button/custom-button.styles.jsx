import styled from "styled-components";

import variables from "../../assets/styles/variables.scss";

export const Button = styled.button`
  color: ${variables.white};

  background: ${variables.red};
  font-family: ${variables.viga};
  font-size: 1.8rem;
  align-self: start;
  border: none;
  border-radius: 3px;
  padding: 1.5rem 2.5rem;
  cursor: pointer;
  &:hover {
    background: ${variables.lightGrey};
    color: ${variables.black};
    // border: 2px solid ${variables.lightGrey};
  }
  &:focus{
    outline: none;
  }
`;
