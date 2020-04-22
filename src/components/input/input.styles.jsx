import styled from "styled-components";
import variables from "../../assets/styles/variables.scss";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:first-child){
    margin-top: 5rem;
  }
`;

export const InputField = styled.input`
  padding: 1.4rem 1.5rem;
  border-radius: 3px;
  border: 1px solid ${variables.lightGrey};
  width: 100%;
  color: ${variables.darkGrey};

  &:focus {
    box-shadow: 0 0 0 1pt ${variables.lightGrey};
    outline: none;
  }
`;
export const TextArea = styled.textarea`
  padding: 1.4rem 1.5rem;
  border-radius: 3px;
  border: 1px solid ${variables.lightGrey};
  width: 100%;
  color: ${variables.darkGrey};
  height: 20rem;
  &:focus {
    box-shadow: 0 0 0 1pt ${variables.lightGrey};
    outline: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 1rem;
`;
