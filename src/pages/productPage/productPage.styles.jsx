import styled from "styled-components";
import variables from "../../assets/styles/variables.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  margin: 15rem 10rem 10rem 10rem;
`;
export const Title = styled.h1`
  font-family: ${variables.viga};
  letter-spacing: 1px;
`;
export const ButtonContainer = styled.div`
  text-align: center;
`;
export const Button = styled(CustomButton)`
  margin: 5rem auto;
`;

export const DescriptionContainer = styled.div`
  width: 80%;
  margin: 10rem auto;
`;
export const DescriptionParagraph = styled.p`
  line-height: 2;
  margin-top: 3rem;
`;
export const RelatedTitle = styled.h2`
  font-family: ${variables.viga};
  margin-bottom: 3rem;
  text-align: center;
`;
