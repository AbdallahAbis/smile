import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const PayButton = styled(CustomButton)`
padding: 1rem 3.5rem;
display: inline-block;
margin-left: auto;
&.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  }
`;
