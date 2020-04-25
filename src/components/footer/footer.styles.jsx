import styled, { css } from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import variables from "../../assets/styles/variables.scss";
import device from "../../assets/styles/media";

const iconsContainer = css`
  grid-column: 2;
  justify-self: center;
  text-align: center;
  width: 100%;
`;

const flexGroup = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

//Titles & Links
export const Title = styled.div`
  font-family: ${variables.viga};
  margin-bottom: 2rem;
`;
export const Link = styled(ReactLink)`
  font-family: ${variables.montserrat};
  cursor: pointer;
  display: inline-block;
  color: ${variables.white};
  text-decoration: none;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

//The Top Container
export const Container = styled.div`
  padding: 0 10rem;
  background-color: ${variables.black};
  color: ${variables.white};

  @media ${device.phone} {
    padding: 0 5rem;
  }
`;

export const TopFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  padding-top: 2rem;
  @media ${device.phone} {
    display: none;
  }
`;
export const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  @media ${device.phone} {
    justify-content: center;
  }
`;
//Outer containers
export const Categories = styled.div`
  ${flexGroup}
  grid-column: 1;
  grid-row: 1 / -1;
`;
export const Payments = styled.div`
  ${iconsContainer}
  grid-row: 1;
  padding: 0 9rem;
`;
export const Follow = styled.div`
  ${iconsContainer}
  grid-row: 2;
  padding: 0 11rem;
  margin-top: 2rem;
`;
export const About = styled.div`
  ${flexGroup}
  grid-column: 3;
  grid-row: 1 / -1;
  justify-self: end;
`;

//Icon Containers
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  grid-column: 1;
  grid-row: 2;
  align-self: end;
  @media ${device.phone} {
    display: none;
  }
`;

//Icons
export const PaymentIcons = styled.img`
  width: 6rem;
  opacity: 0.3;
  fill: ${variables.white};
`;
export const FollowIcons = styled.img`
  height: 3rem;
  cursor: pointer;
`;

//Copy Rights
export const Rights = styled.div`
  font-family: ${variables.montserrat};
  grid-column: 3;
  grid-row: 2;
  align-self: end;
  justify-self: end;
  font-size: 1.2rem;
`;
