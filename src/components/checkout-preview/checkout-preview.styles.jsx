import styled from "styled-components";

import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";

import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) repeat(2, 1fr);
  align-items: center;
  text-align: start;
  margin: 3rem 0;
  @media ${device.phone} {
    grid-template-columns: 3fr 1.5fr repeat(2, 1fr);
  }
`;
export const Image = styled.img`
  flex: 1;
  height: 13rem;
  width: 10rem;
  @media ${device.phone} {
    display: none;
  }
`;
export const Name = styled.p`
text-align:start;
  }
`;
export const Price = styled.p`
  @media ${device.phone} {
   text-align: center;
  }
  }
`;

export const Button = styled(CustomButton)`
padding: 0.5rem 1rem;
justify-self: end;
align-self: center;
font-family: ${variables.montserrat};
font-size: 1.4rem
  }
`;
