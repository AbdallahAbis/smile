import styled from "styled-components";
import device from "../../assets/styles/media";
import variables from "../../assets/styles/variables.scss";

export const Container = styled.div`
height: ${({ size }) => size};
background-image: url(${({ background }) => background});
background-repeat;
background-position: ${({ position }) => position};
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 10rem;
margin-bottom: 5rem;

@media ${device.phone}{
background: ${variables.darkerWhite};
clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%);
height: 100%;
padding: 4rem 5rem;
margin-bottom: 2rem;

}
`;
export const Title = styled.h1`
  color: ${variables.black};
  font-size: 6.5rem;
  letter-spacing: 3px;
  font-family: ${variables.viga};
  display: block;

  @media ${device.phone} {
    font-size: 5rem;
  }
`;
export const Text = styled.h3`
  margin-top: 1.5rem;
  font-size: 3rem;
  font-weight: 300;
  color: ${variables.red};
  font-family: ${variables.montserrat};

  @media ${device.phone} {
    font-size: 2.5rem;
  }
`;
