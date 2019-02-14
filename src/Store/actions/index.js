import {
  WeatherAPIRequest,
  getHistory
} from "../../utils/axios";
import { FETCH_WEATHER, FETCH_HISTORY, FETCH_USER } from "./types";

export const fetchWeather = (lat, lon) => async dispatch => {
  try {
    const data = {
      lat,
      lon
    };

    const response = await WeatherAPIRequest(data);
    console.log(response);
    dispatch({
      type: FETCH_WEATHER,
      payload: response.data.list
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchHistory = () => async dispatch => {
  try {
    const response = await getHistory();

    dispatch({
      type: FETCH_HISTORY,
      payload: response.data.History
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchUserForm = (first_name, last_name, email) => dispatch => {
  try {
    const user = {
      first_name: first_name,
      last_name: last_name,
      email: email
    };
    dispatch({
      type: FETCH_USER,
      payload: user
    });
  } catch (error) {
    console.log("error", error);
  }
};







