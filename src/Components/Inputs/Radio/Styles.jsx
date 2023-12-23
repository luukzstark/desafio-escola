import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
`;
export const Label = styled.label`
  font-size: 16px;
  color: #242424;
  font-weight: 400;
  font-family: "Segoe UI";
`;

export const Input = styled.input`
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #00000040;
  padding: 12px;

  &:focus {
    outline: none;
    border-color: #00718a;
  }
`;
