import styled from "styled-components";

import variables from "../../assets/styles/variables.scss";

export const Container = styled.div`
height: ${({ size }) => size};
background-image: url(${({ background }) => background});
background-repeat;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 10rem;
margin-bottom: 5rem;
`;
export const Title = styled.h1`
  color: ${variables.black};
  font-size: 6.5rem;
  letter-spacing: 3px;
  font-family: ${variables.viga};
  display: block;
`;
export const Text = styled.h3`
  margin-top: 1.5rem;
  font-size: 3rem;
  font-weight: 300;
  color: ${variables.red};
  font-family: ${variables.montserrat};
`;
