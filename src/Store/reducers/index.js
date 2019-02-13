import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import weatherReducer from "./weatherReducer";
import historyReducer from "./historyReducer";
import userReducer from "./userReducer";


export default combineReducers({
  weather: weatherReducer,
  history: historyReducer,
  form: formReducer,
  userForm: userReducer
});
