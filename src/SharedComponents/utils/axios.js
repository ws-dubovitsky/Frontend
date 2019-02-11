import axios from "axios";
const url = "http://localhost:3001/api/weather";

const axiosInsrance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 1000,
  headers: { Authorization: localStorage.getItem("usertoken") }
});

export const WeatherAPIRequest = data => axiosInsrance.post(url, data);

export const register = newUser => {
  return axiosInsrance.post("http://localhost:3001/users/register", newUser);
};

export const login = user => {
  return axiosInsrance
    .post("http://localhost:3001/users/login", user)
    .then(res => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
