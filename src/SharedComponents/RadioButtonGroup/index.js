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
    console.log('checked', this.props.checked);
    return (
      <StyledDiv>
        {data.map(d => (
          <RadioButton
            key={d.label + d.id}
            name={name}
            value={d.value}
            label={d.label}
            checked={this.props.checked}
            onChange={this.onChange}
          />
        ))}
      </StyledDiv>
    );
  }
}
