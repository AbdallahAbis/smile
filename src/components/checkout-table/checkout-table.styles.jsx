import styled from "styled-components";
import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";

export const TableHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) repeat(2, 1fr);
  align-items: center;
  text-align: start;
  margin: 3rem 0;
  &:first-child {
    border-bottom: 1px solid ${variables.lightGrey};
  }
  @media ${device.phone} {
    grid-template-columns: 3fr 1.5fr repeat(2, 1fr);
  }
`;
export const TableHeaderTitle = styled.h5`
  flex: 1;
  font-size: 1.4rem;
  padding-bottom: 1rem;
  &:nth-last-child(-n + 2) {
    flex: 0.5;
  }

  @media ${device.phone} {
    &:first-child {
      display: none;
    }
    &:nth-last-child(-n + 2) {
      text-align: center;
    }
  }
`;
