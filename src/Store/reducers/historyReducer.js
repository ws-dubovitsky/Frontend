import { FETCH_HISTORY } from "../actions/types";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_HISTORY:
      return {
        ...state,
        list: payload
      };
    default:
      return state;
  }
};
