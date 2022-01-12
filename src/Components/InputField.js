import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  outline: none;
  padding: 13px;
  width: 100%;
  border: none;
  color: var(--bg-primary);
  border-radius: 5px;
  letter-spacing: 1px;
  font-size: 20px;
  background: #eee;
`;

const Input = ({ ...children }) => {
  return (
    <>
      <StyledInput {...children} />
    </>
  );
};

export default Input;
