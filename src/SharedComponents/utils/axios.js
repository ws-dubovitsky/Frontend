import axios from "axios";

const url = "http://localhost:3001/api/weather";
// const url2 = "http://localhost:3001/auth/register"

export const WeatherAPIRequest = data => axios.post(url, data);

// export const userCreate = data => axios.post(url2, data);
