import { FETCH_USER, FLOORS_AMOUNT } from './types';

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

  dispatch({
    type: FLOORS_AMOUNT,
    payload: param,
  });

};



