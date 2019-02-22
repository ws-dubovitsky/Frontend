import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 300px;
`;

const StyledLabel = styled('span')`
  margin: 0 10px;
`;

const Styledbutton = styled.button`
  border-radius: 100%;
  margin: 4px;
  padding: 6px 9px;
`;

export default class NumberSelector extends React.PureComponent {
  onChange = (newValue) => {
    this.props.onChange({ value: newValue });
  };

  plusButton = () => {
    const { value } = this.props;
    this.onChange(value + 1);
  };

  minusButton = () => {
    const { value } = this.props;
    this.onChange(value - 1);
  };

  render() {
    const { label, value } = this.props;
    return (
      <StyledDiv>
        <StyledLabel>{label}</StyledLabel>
        <Styledbutton onClick={this.minusButton}>-</Styledbutton>
        <StyledLabel>{value}</StyledLabel>
        <Styledbutton onClick={this.plusButton}>+</Styledbutton>
      </StyledDiv>
    );
  }
}
