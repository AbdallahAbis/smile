import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as CartSVG } from "../../assets/cart/cart.svg";

export const CartContainer = styled(Link)`
  height: 2.5rem;
  width: 2.5rem;
  color: currentColor;
  position: relative;
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
`;
