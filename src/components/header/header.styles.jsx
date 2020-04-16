import styled from "styled-components";

export const Container = styled.div`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ color }) => color};
  margin: 0 10rem;
`;
export const OptionsContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Option = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
