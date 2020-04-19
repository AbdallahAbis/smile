import styled from "styled-components";
import variables from "../../assets/styles/variables.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

export const ProductHeroContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3rem 1fr;
  grid-row-gap: 6rem;
  align-items: center;
`;
export const Title = styled.h1`
  font-family: ${variables.viga};
  letter-spacing: 1px;
`;
export const AllDetailsContainer = styled.div``;
export const DetailsInTextContainer = styled.div`
  margin-bottom: 4rem;
`;
export const ImagesContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-areas:
    "s s p p p p p p "
    "s s p p p p p p "
    "t t p p p p p p "
    "t t p p p p p p "
    "q q p p p p p p "
    "q q p p p p p p ";
  grid-row-gap: 0.5rem;
  grid-column-gap: 1rem;

  & > * {
    border: 1px solid ${variables.red};
  }
`;
export const PrimaryImage = styled.img`
  width: 100%;
  height: 99.5%;
  grid-area: ${({ area }) => area};
`;
export const SecondaryImage = styled.img`
  width: 100%;
  grid-area: ${({ area }) => area};
`;
export const Detail = styled.p`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 4rem 0;
  margin-bottom: 6rem;
`;
export const TotalText = styled.div`
  font-family: ${variables.viga};
  font-size: 2.6rem;
  margin-right: 3rem;
`;
export const TotalNumber = styled.p`
  font-size: 2.6rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled(CustomButton)`
  font-family: ${variables.montserrat};
  padding: 1rem 2rem;
`;
