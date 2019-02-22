import React from 'react';
import { storiesOf } from '@storybook/react';
import MyInput from './index';

storiesOf('Input', module)
  .add('type text', () => (
    <MyInput type="text" />
  ))
  .add('type number', () => (
    <MyInput type="number" />
  ));
