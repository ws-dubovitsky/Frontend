import { FETCH_PLACE } from "../actions/types";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PLACE:
      return {
        ...state,
        list: payload
      };
    default:
      return state;
  }
};
