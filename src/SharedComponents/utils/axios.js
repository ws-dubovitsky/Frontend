import axios from "axios";

const url = "http://localhost:3001/api/weather";

export const WeatherAPIRequest = data => axios.post(url, data);

export const register = newUser => {
  return axios.post("http://localhost:3001/users/register", newUser);
};

export const login = user => {
  return axios
    .post("http://localhost:3001/users/login", user)
    .then(res => {
      localStorage.setItem("usertoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
