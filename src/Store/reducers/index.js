import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  weather: weatherReducer,
  form: formReducer,

});
