import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import dashboarReducer from './dashboardReducer';


export default combineReducers({
  form: formReducer,
  dashboard: dashboarReducer,
  userForm: userReducer,
});
