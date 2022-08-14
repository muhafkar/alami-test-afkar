import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const StyledText = styled.input`
  display: block;
  box-sizing: border-box;
  width: 200px;
  height:40px;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  outline: 0;
  letter-spacing:0.2px;
  font-weight: 400;
  font-size: 15px;
  border: 1px solid #A7A7A7;
  border-radius: 4px;
  background-color: white;
  color: #000;
  transition: all 0.3s;
`;

export default function InputText() {
  return (
    <InputWrapper>
      <StyledText />
    </InputWrapper>
  );
}
