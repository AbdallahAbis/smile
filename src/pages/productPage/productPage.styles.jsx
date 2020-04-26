import styled from "styled-components";
import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";

import ProductsPreview from "../../components/products-preview/products-preview.component";
import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  margin: 15rem 10rem 10rem 10rem;

  @media ${device.tabPort} {
    margin: 0;
    padding: 15rem 5rem 5rem 5rem;
    display: flex;
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  font-family: ${variables.viga};
  letter-spacing: 1px;
`;
export const ButtonContainer = styled.div`
  text-align: center;
  @media ${device.tabPort} {
    margin: 10rem 0 5rem 0;
  }
`;
export const RelatedProducts = styled(ProductsPreview)`
  padding: 0;
`;

export const Button = styled(CustomButton)`
  margin-top: 5rem;
`;

export const DescriptionContainer = styled.div`
  width: 80%;
  margin: 10rem auto;
  @media ${device.tabPort} {
    width: 100%;
    font-size: 2rem;
  }
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
