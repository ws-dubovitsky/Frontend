import React from 'react';
import styled from 'styled-components';
import RadioButton from '../RadioButton/index';

const StyledDiv = styled.div`
  width: 300px;
`;

export default class RadioButtonGroup extends React.PureComponent {
  onChange = (ev) => {
    this.props.selected({ value: ev.target.value });
  };

  render() {
    const { data, name } = this.props;
    console.log('data', data);
    return (
      <StyledDiv>
        {data.map(d => (
          <RadioButton
            key={d.label + d.id}
            onChange={this.onChange}
            name={name}
            checked={d.checked}
            value={d.value}
            label={d.label}
          />
        ))}
      </StyledDiv>
    );
  }
}
