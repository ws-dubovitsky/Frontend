import axios from "axios";

const url = "http://localhost:3001/api/weather";

const axiosInsrance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 1000,
  headers: { Authorization: localStorage.getItem("usertoken") }
});

export const WeatherAPIRequest = data => axiosInsrance.post(url, data);
export const checkLogin = () => axiosInsrance.get("users/checkLogin");

export const register = newUser => {
  return axiosInsrance.post("users/register", newUser);
};

export const login = user => {
  return axiosInsrance
    .post("users/login", user)
};

export const getHistory = () => axiosInsrance.post("api/history");
