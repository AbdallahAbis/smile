import styled from "styled-components";
import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";
import CustomButton from "../../components/custom-button/custom-button.component";
import Quantity from "../../components/quantity/quantity.component";

export const ProductHeroContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3rem 1fr;
  grid-row-gap: 6rem;
  align-items: center;

  @media ${device.phone} {
    width: 100%;
    font-size: 1.8rem;
  }
`;
export const Title = styled.h1`
  font-family: ${variables.viga};
  letter-spacing: 1px;
  grid-column: 1 / -1;
`;
export const AllDetailsContainer = styled.div`
  @media ${device.phone} {
    grid-column: 1 / -1;
    grid-row: 3;
  }
`;
export const DetailsInTextContainer = styled.div`
  margin-bottom: 4rem;

  @media ${device.phone} {
    margin-bottom: 10rem;
    font-size: 2rem;
  }
`;
export const ImagesContainer = styled.div`
  width: 80%;
  height: 100%;
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
  align-items: center;
  & > * {
    border: 1px solid ${variables.red};
  }

  @media ${device.phone} {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-self: center;
    width: 100%;
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

  @media ${device.phone} {
    margin: 8rem 0;
    justify-content: center;
  }
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

  @media ${device.phone} {
    flex-direction: column;
    align-items: center;
  }
`;
export const Button = styled(CustomButton)`
  font-family: ${variables.montserrat};
  padding: 1rem 2rem;

  @media ${device.phone} {
    width: 90%;
    align-self: center;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const ProductQuantity = styled(Quantity)`
  @media ${device.phone} {
    width: 20%;
    font-size: 2rem;
    margin: 0 auto;
  }
`;
