import {
  WeatherAPIRequest,
  getHistory
} from "../../SharedComponents/utils/axios";
import { FETCH_WEATHER, FETCH_HISTORY } from "./types";

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
    console.log("response", response.data.History.map(item => item.weatherList));
    dispatch({
      type: FETCH_HISTORY,
      payload: response.data.History
    });
  } catch (error) {
    console.log("error", error);
  }
};
