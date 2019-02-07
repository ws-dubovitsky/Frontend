import axios from "axios";

export const WeatherAPIRequest = data =>
  axios.post("http://localhost:3001/api/weather", data);
