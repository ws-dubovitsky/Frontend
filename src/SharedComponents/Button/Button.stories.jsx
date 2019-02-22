import React from 'react';
import { storiesOf } from '@storybook/react';
import MyButton from './index';

storiesOf('MyButton', module)
  .add('with text', () => (
    <MyButton onClick={() => { console.log('clicked'); }}>Hello Button</MyButton>
  ));
