import React from 'react';
import { storiesOf } from '@storybook/react';
import BuildingSchema from './index';

const fakeData = [
  { id: 6, label: '4' },
  { id: 5, label: '3' },
  { id: 4, label: '2' },
  { id: 3, label: '1' },
  { id: 2, label: 'G' },
  { id: 1, label: 'LG' },
];


// class StatefullBuildingSchema extends React.Component {
// //   state = {
// //     label: 'floors',
// //     value: 1,
// //   }

//   //   onChange = (param) => {
//   //     this.setState({
//   //       value: param.value,
//   //     });
//   //   }


//   render() {
//     return (
//       <BuildingSchema count={4} />
//     );
//   }
// }

storiesOf('BuildingSchema', module)
  .add('with text', () => (
    <BuildingSchema data={fakeData} width={300} height={600} />
  ));
