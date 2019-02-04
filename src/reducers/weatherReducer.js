import { FETCH_WEATHER } from "../actions/index";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return {
        ...state,
        list: payload
      };
    default:
      return state;
  }
};
