import styled from "styled-components";

import variables from "../../assets/styles/variables.scss";

import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) repeat(2, 1fr);
  align-items: center;
  text-align: start;
  margin: 3rem 0;
`;
export const Image = styled.img`
flex: 1;
height: 13rem;
width: 10rem;
  }
`;
export const Name = styled.p`
text-align:start;
  }
`;
export const Price = styled.p`
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
