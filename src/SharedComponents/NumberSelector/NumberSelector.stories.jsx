import React from 'react';
import { storiesOf } from '@storybook/react';
import NumberSelector from './index';


class StatefullNumberSelector extends React.Component {
  state = {
    label: 'floors',
    value: 1,
  }

  onChange = (param) => {
    this.setState({
      value: param.value,
    });
  }


  render() {
    const { label, value } = this.state;
    return (
      <NumberSelector label={label} value={value} onChange={this.onChange} />
    );
  }
}

storiesOf('NumberSelector', module)
  .add('with text', () => (
    <StatefullNumberSelector />
  ));
