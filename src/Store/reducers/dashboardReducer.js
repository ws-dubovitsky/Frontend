import { FLOORS_AMOUNT, RADIO_BUTTON_APPARTMENTS, RADIO_BUTTON_FLOORS } from '../actions/types';
import { generateSchemData } from '../../utils/helper';


// const possibleSchemValues = [
//   { id: 1, label: 'LG' },
//   { id: 2, label: 'G' },
//   { id: 3, label: 1 },
//   { id: 4, label: 2 },
//   { id: 5, label: 3 },
//   { id: 6, label: 4 },
// ];

const initialState = {
  floorsAmount: 1,
  maxFloorsAmount: 6,
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
          if (payload.value > 6 || payload.value < 1) { return prevState.floorsAmount; }
          return payload.value;
        })(),
        schemaData: generateSchemData(payload.value, prevState.checkedFloor),
      };
    case RADIO_BUTTON_APPARTMENTS:
      return {
        ...prevState,
        checkedAppartments: payload.value,
      };
    case RADIO_BUTTON_FLOORS:
      return {
        ...prevState,
        checkedFloor: payload.value,
        schemaData: generateSchemData(prevState.floorsAmount, payload.value),

      };
    default:
      return prevState;
  }
};
