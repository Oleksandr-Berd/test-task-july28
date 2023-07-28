import styled from "styled-components";

export const FormContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
  padding-left: 64px;
  padding-right: 64px;
`;

export const FormStyled = styled.form`
width: 33%;

  display: flex;
  flex-direction: column;
`;

export const InputStyled = styled.input`
  margin-bottom: 8px;

  width: calc(100% - 16px);

  padding-left: 16px;
  padding-top: 9px;
  padding-right: 0;
  padding-bottom: 9px;

  font-size: 13px;
  background-color: rgba(151, 151, 151, 0.3);

  border: none;

  &::placeholder {
    font-size: 13px;
  }
`;

export const SubmitButton = styled.button`
width: 33%;

  margin-top: 8px;

  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;

  text-transform: uppercase;
  font-size: 15px;
  color: #fff;
  background-color: #000;
  letter-spacing: 2px;
`;
