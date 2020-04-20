import styled from "styled-components";

import variables from "../../assets/styles/variables.scss";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${({ background }) => background});
  background-repeat;
  background-position: top;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
`;
export const Container = styled.div`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10rem;
`;
export const Title = styled.h1`
  color: ${variables.white};
  font-size: 6.5rem;
  letter-spacing: 3px;
  font-family: ${variables.viga};
  display: block;
`;
export const Slogan = styled.h3`
  font-size: 3.5rem;
  font-weight: 300;
  color: ${variables.red};
  font-family: ${variables.montserrat};
`;
export const Paragraph = styled.p`
  margin-top: 10rem;
  margin-bottom: 8rem;
  width: 40%;
  color: ${variables.white};
  font-size: 1.8rem;
  font-weight: 300;
  font-family: ${variables.montserrat};
  line-height: 1.5;
`;
