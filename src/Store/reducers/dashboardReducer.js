import { FLOORS_AMOUNT } from '../actions/types';

const possibleSchemValues = [
  { id: 1, label: 'LG' },
  { id: 2, label: 'G' },
  { id: 3, label: 1 },
  { id: 4, label: 2 },
  { id: 5, label: 3 },
  { id: 6, label: 4 },
];

const initialState = {
  floorsAmount: 1,
  appartmentsSelectorData: [
    {
      id: 1,
      label: 'House',
      value: 'house',
    },
    {
      id: 2,
      label: 'Appartments',
      value: 'appartments',
    },
  ],
  floorSelectorData: [
    {
      id: 1,
      label: 'G',
      value: 'g',
    },
    {
      id: 2,
      label: 'LG',
      value: 'lg',
    },
  ],
  checkedAppartments: 'appartments',
  checkedFloor: 'lg',
  schemaData: [{ id: 1, label: 'LG' }],
};

export default (prevState = initialState, { type, payload }) => {
  switch (type) {
    case FLOORS_AMOUNT:
      return {
        ...prevState,
        floorsAmount: (() => {
          if (payload.value > possibleSchemValues.length || payload.value < 1) { return prevState.floorsAmount; }
          return payload.value;
        })(),
        schemaData: (() => {
          const { schemaData, checkedFloor, floorsAmount } = prevState;
          console.log(
            'schemaData, checkedFloor, floorsAmount',
            schemaData,
            checkedFloor,
            floorsAmount,
          );
          const offset = checkedFloor === 'lg' ? 0 : 1;
          if (
            payload.value > floorsAmount
            && payload.value <= possibleSchemValues.length
          ) {
            console.log('payload.value', payload.value);
            // Increment
            schemaData.unshift(possibleSchemValues[payload.value - 1 + offset]);
          } else if (payload.value < floorsAmount && payload.value > 0) {
            schemaData.shift(possibleSchemValues[payload.value - 1 + offset]);
          }
          return schemaData;
        })(),
      };
    default:
      return prevState;
  }
};
