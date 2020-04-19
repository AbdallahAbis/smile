import styled from "styled-components";
import variables from "../../assets/styles/variables.scss";


export const TableHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) repeat(2, 1fr);
  align-items: center;
  text-align: start;
  margin: 3rem 0;
  &:first-child {
    border-bottom: 1px solid ${variables.lightGrey};
  }
`;
export const TableHeaderTitle = styled.h5`
  flex: 1;
  font-size: 1.4rem;
  padding-bottom: 1rem;
  &:nth-last-child(-n + 2) {
    flex: 0.5;
  }
`;