import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../../assets/styles/media";
import { ReactComponent as CartSVG } from "../../assets/cart/cart.svg";

export const CartContainer = styled(Link)`
  height: 2.5rem;
  width: 2.5rem;
  color: currentColor;
  position: relative;
  margin-left: 8rem;

  @media ${device.tabPort} {
    height: 4rem;
    width: 4rem;
    position: absolute;
    left: 50%;
    margin: 0;
    transform: translateX(-50%);
  }
`;
export const Cart = styled(CartSVG)`
  height: 100%;
  width: 100%;
  fill: currentColor;
  position: relative;
`;
export const AddedItems = styled.p`
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);

  @media ${device.tabPort} {
    font-size: 2rem;
  }
`;
