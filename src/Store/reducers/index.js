import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import weatherReducer from "./weatherReducer";
import placeReducer from "./placeReducer";

export default combineReducers({
  weather: weatherReducer,
  form: formReducer,
  place: placeReducer
});
