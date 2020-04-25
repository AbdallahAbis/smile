import styled from "styled-components";
import device from "../../assets/styles/media";

export const FormContainer = styled.div`
  width: 70%;
  padding: 0.5rem 2rem;
  background: rgba(255, 0, 0, 0.6);
  border-radius: 0 0 5px 5px;
  @media ${device.phone} {
    width: 100%;
  }
`;
export const AsyncContainer = styled(FormContainer)`
  display: flex;
  align-items: center;
  background: #db0f10;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 2rem;

  @media ${device.phone} {
    margin: 1rem 0 5rem 0;
  }
`;
export const FormMessage = styled.p`
  color: black;
  font-family: viga;
`;
export const AsyncMessage = styled(FormMessage)`
  color: white;
  margin: auto;
`;
