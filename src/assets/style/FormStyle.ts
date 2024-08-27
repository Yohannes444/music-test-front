import styled from "@emotion/styled";

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #000000;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  color: #000000;
  z-index:9999999
`;

export const StyledH1 = styled.h1`
  text-align: center;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 8px 0;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  background: none;
  border: 1px solid #000000;
  padding: 10px;
  color: #000000;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 5px;
`;

export const StyledButton = styled.button`
  align-self: center;
  padding: 10px;
  margin: 1rem 5px;
  background: none;
  border: 1px solid #000000;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  color: #000000;
  font-weight: bold;
  &:hover {
    color: #fafbfc;
    background-color: #3e800d;
  }
`;

export const StyledActiveButton = styled.button`
  align-self: center;
  padding: 10px;
  margin: 1rem 5px;
  color: #fafbfc;
  background-color: #000000;
  border: 1px solid #000000;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background: none;
    color: #000000;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;