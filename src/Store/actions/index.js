import { WeatherAPIRequest } from "../../SharedComponents/utils/axios";

// const API = "a1940f6091cee8f1939beaa1ed9a82dc";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const fetchWeather = (lat, lon) => async dispatch => {
  try {
    const data = {
      lat,
      lon
    };

    const response = await WeatherAPIRequest(data);
    console.log(response.data.list);
    // console.log("OK");

    // console.log("response", response);
    dispatch({
      type: FETCH_WEATHER,
      payload: response.data.list
    });
  } catch (error) {
    console.log("error", error);
  }
};
