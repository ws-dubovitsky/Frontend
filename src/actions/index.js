import { WeatherAPIRequest } from "../utils/axios";

const API = "a1940f6091cee8f1939beaa1ed9a82dc";

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`;
  const request = WeatherAPIRequest.get(url);

  return {
    type: "FETCH_WEATHER",
    payload: request
  };
};

// export const fetchWeather = (lat, lon) => {
//   return async dispatch => {
//     const response = await WeatherAPIRequest.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`);
   
//     dispatch({
//       type: FETCH_WEATHER,
//       payload: response
//     });
//   };
// };
