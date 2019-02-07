import { FETCH_WEATHER } from "../actions/index";

const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};