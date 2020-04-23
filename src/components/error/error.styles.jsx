import styled from "styled-components";

export const FormContainer = styled.div`
  width: 70%;
  padding: 0.5rem 2rem;
  background: rgba(255, 0, 0, 0.6);
  border-radius: 0 0 5px 5px;
`;
export const AsyncContainer = styled(FormContainer)`
  display: flex;
  align-items: center;
  background: #db0f10;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 2rem;
`;
export const FormMessage = styled.p`
  color: black;
  font-family: viga;
`;
export const AsyncMessage = styled(FormMessage)`
  color: white;
  margin: auto;
`;
