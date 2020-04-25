import styled from "styled-components";

import device from "../../assets/styles/media";
import variables from "../../assets/styles/variables.scss";

import Input from "../../components/input/input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  padding: 8rem 10rem 0 10rem;
  padding-top: 6vw;
  padding-bottom: 10rem;
  display: flex;
  justify-content: space-between;

  @media ${device.phone} {
    padding: 4rem 5rem 0 5rem;
    flex-direction: column;
    height: 100vh;
  }
`;

export const InputField = styled(Input)`
  margin-bottom: 3rem;
  width: 70%;
  @media ${device.phone} {
    width: 100%;
  }
`;

export const Button = styled(CustomButton)`
  margin-top: 5rem;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media ${device.phone} {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-family: ${variables.viga};
  margin-bottom: 8rem;
`;
export const DeveloperContainer = styled.div`
  margin: auto;
  padding: 3rem 5rem;
  border: 3px solid ${variables.lightGrey};
  border-radius: 5px;

  @media ${device.phone} {
    margin-top: 10rem;
  }
`;
export const SubTitle = styled.h2`
  font-family: ${variables.montserrat};
  margin-bottom: 4rem;
`;
export const Detail = styled.p`
  font-family: ${variables.montserrat};
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
