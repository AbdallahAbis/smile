import styled from "styled-components";
import variables from "../../assets/styles/variables.scss";

import CustomButton from "../../components/custom-button/custom-button.component";

export const Container = styled.div`
  margin: 20rem 20rem 10rem 20rem;
`;

export const Title = styled.h1`
  font-family: ${variables.viga};
  text-align: center;
`;

export const FormHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr) repeat(2, 1fr);
  align-items: center;
  text-align: start;
  margin: 3rem 0;
  &:first-child {
    border-bottom: 1px solid ${variables.lightGrey};
  }
`;

export const FormHeaderTitle = styled.h5`
  flex: 1;
  font-size: 1.4rem;
  padding-bottom: 1rem;
  &:nth-last-child(-n + 2) {
    flex: 0.5;
  }
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
export const TotalAndPayContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
}
`;
export const TotalContainer = styled.div`
display: flex;
justify-content:flex-end;
align-items: center;
margin-bottom: 2rem;
  }
`;
export const TotalText = styled.p`
font-family: ${variables.viga};
font-size: 2.6rem;

  }
`;
export const TotalNumber = styled.h2`
font-family: ${variables.montserrat};
font-size: 2rem;
margin-left: 2rem;
  }
`;
export const PayButton = styled(CustomButton)`
padding: 1rem 3.5rem;
display: inline-block;
margin-left: auto;
  }
`;
