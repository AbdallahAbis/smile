import styled from "styled-components";

import variables from "../../assets/styles/variables.scss";

import CustomButton from "../custom-button/custom-button.component";

export const Container = styled.div`
  width: 20vw;
  height: 45rem;
  border: 1px solid black;
  padding: 3rem 1rem 1rem 3rem;
  position: absolute;
  top: 7rem;
  right: 8rem;
  color: ${variables.black};
  background: ${variables.white};
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.55);
  text-align: center;
  overflow: hidden;
  z-index: 30000;
`;
export const ItemsContainer = styled.div`
  overflow: scroll;
  max-height: 35rem;
  overflow-x: hidden;
  position: relative;

  // Scroll Bar Styles

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${variables.lightGrey};
    border-radius: 4px;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 7rem 3fr 1fr;
  height: 10rem;
  text-align: left;
  padding-right: 2rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:last-child {
    margin-bottom: 2rem;
  }

  & > *:not(:first-child) {
    margin-left: 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  grid-column: 1;
  grid-row: 1 / span 2;
`;
export const Name = styled.p`
  font-family: ${variables.viga};
  grid-column: 2;
  align-self: end;
  padding-bottom: 1rem;
`;

export const Quantity = styled.p`
  grid-column: 2;
  align-self: start;
  padding-top: 1rem;
`;
export const RemoveIcon = styled.img`
  grid-column: 3;
  grid-row: 1;
  height: 1.5rem;
  align-self: start;
  justify-self: end;
  margin-top: 1rem;
  cursor: pointer;
`;
export const Price = styled.p`
  grid-column: 3;
  grid-row: 2;
  justify-self: end;
  align-self: start;
  padding-top: 1rem;
  margin: 0;
`;
export const Empty = styled(Price)`
  margin-right: 1.5rem;
`;
export const Button = styled(CustomButton)`
  width: 75%;
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  font-size: 1.7rem;
  padding: 1.3rem 1.7rem;
  font-family: ${variables.montserrat};
`;
