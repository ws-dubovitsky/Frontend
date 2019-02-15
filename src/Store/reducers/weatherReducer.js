import { FETCH_WEATHER, SORT_HISTORY, CLEAR_WEATHER } from "../actions/types";
import { get } from "lodash";


const initialState = {
  list: [],
  sortBy: "dt",
  sortOrder: "asc"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return {
        ...state,
        list: payload
      };
      case SORT_HISTORY:
      return {
        ...state,
        list: (() => {
          console.log('REDUCER!')
          const cloneWeather = JSON.parse(JSON.stringify(state.list));
          const { sortBy, sortOrder } = state;
          return cloneWeather.sort(function(a, b) {
            if (get(a, sortBy) < get(b, sortBy)) {
              return sortOrder === "asc" ? -1 : -1;
            }
            if (get(a, sortBy) > get(b, sortBy)) {
              return sortOrder === "asc" ? -1 : 1;
            }
            return 0;
          })
        })(),
        sortBy: payload,
        sortOrder: (()=> {
          const {sortBy, sortOrder} = state;
          return sortBy === payload && sortOrder === "asc" ? "desc" : "asc"
        })()
      };
      case CLEAR_WEATHER: 
      return initialState;
    default:
      return state;
  }
};
