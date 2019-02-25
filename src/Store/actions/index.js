import {
  FETCH_USER, FLOORS_AMOUNT, RADIO_BUTTON_FLOORS, RADIO_BUTTON_APPARTMENTS,
} from './types';

export const fetchUserForm = (first_name, last_name, email) => (dispatch) => {
  try {
    const user = {
      first_name,
      last_name,
      email,
    };
    dispatch({
      type: FETCH_USER,
      payload: user,
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const changeFloorsAmount = param => (dispatch) => {
  console.log('action changeFloorsAmount', param);
  dispatch({
    type: FLOORS_AMOUNT,
    payload: param,
  });
};

export const changeAppartmentsSelectorData = select => (dispatch) => {
  console.log('changeAppartmentsSelectorData', select);
  dispatch({
    type: RADIO_BUTTON_APPARTMENTS,
    payload: select,
  });
};

export const changeFloorSelectorData = select => (dispatch) => {
  console.log('changeFloorSelectorData', select);
  dispatch({
    type: RADIO_BUTTON_FLOORS,
    payload: select,
  });
};
