import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
  min-width: 150px;
  text-align: right;
  padding: 6px 9px;
`;

const StyledInput = styled.input`
  flex: 1;
  font-size: 16px;
  padding: 5px 8px;
  border: 1px solid #ccc;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: 10px 5px;
`;

const RadioButton = ({
  label, onChange, name, checked, value,
}) => (
  <StyledDiv>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput
      onChange={onChange}
      type="radio"
      name={name}
      value={value}
      checked={checked}
    />
  </StyledDiv>
);

export default RadioButton;
