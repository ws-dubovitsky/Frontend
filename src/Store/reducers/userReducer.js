import { FETCH_USER } from "../actions/types";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        list: payload
      };
    default:
      return state;
  }
};
