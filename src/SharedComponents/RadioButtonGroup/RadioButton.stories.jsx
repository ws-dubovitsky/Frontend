import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioGroup from './index';


class StatefullRadioGroup extends React.Component {
  state = {
    data: [{
      id: 1,
      label: 'House',
      value: 'house',
    }, {
      id: 2,
      label: 'Appartments',
      value: 'appartments',
    }],
  }

  selected = (param) => {
    // const { data } = this.state;
    // data[parseInt(param.index, 10)].checked = true;
    // console.log('data', data);
    // this.setState({
    //   data,
    // }, () => {
    //   console.log('this.state.data', this.state.data);
    // });
  };

  render() {
    return (
      <RadioGroup name="appartments-selector" data={this.state.data} selected={this.selected} />
    );
  }
}

storiesOf('RadioGroup', module)
  .add('with text', () => (
    <StatefullRadioGroup />
  ));
