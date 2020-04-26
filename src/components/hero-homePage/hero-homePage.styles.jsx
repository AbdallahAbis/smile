import styled from "styled-components";

import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";

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

  @media ${device.tabPort}{
    background: ${variables.darkerWhite};
  }
`;
export const Container = styled.div`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10rem;
  @media ${device.tabPort} {
    margin-top: 10rem;
    padding: 15rem 5rem;
    clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%);
    height: 100%;
  }
  @media ${device.phone} {
    height: 80vh;
    margin-top: 3rem;
    padding: 5rem 5rem;
  }
`;
export const Title = styled.h1`
  color: ${variables.white};
  font-family: ${variables.viga};
  font-size: 6.5rem;
  letter-spacing: 3px;
  display: block;
  @media ${device.tabPort} {
    color: ${variables.black};
    font-size: 5rem;
  }
`;
export const Slogan = styled.h3`
  font-size: 3.5rem;
  font-weight: 300;
  color: ${variables.red};
  font-family: ${variables.montserrat};
  @media ${device.tabPort} {
    font-size: 4rem;
  }
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
  @media ${device.tabPort} {
    color: ${variables.black};
    font-size: 2.5rem;
    width: 100%;
    margin-bottom: 13rem;
  }
`;
