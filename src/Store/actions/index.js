import { WeatherAPIRequest } from "/Users/oleg/Desktop/Frontend/src/SharedComponents/utils/axios.js";

const API = "a1940f6091cee8f1939beaa1ed9a82dc";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const fetchWeather = (lat, lon) => async dispatch => {
  try {
    const url = `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`;
    const response = await WeatherAPIRequest.get(url);

    dispatch({
      type: FETCH_WEATHER,
      payload: response.data.list
    });
  } catch (error) {
    console.log("error", error);
  }
};
