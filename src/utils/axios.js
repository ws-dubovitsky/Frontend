import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 60000,
  headers: { Authorization: localStorage.getItem("usertoken") }
});

axiosInstance.interceptors.request.use(function(config) {
  const token = localStorage.getItem("usertoken")

  if ( token != null ) {
    config.headers.Authorization = token;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});

export const checkLogin = () => axiosInstance.get("/auth");

// export const register = newUser => {
//   return axiosInstance.post("users/register", newUser);
// };

export const login = user => {
  return axiosInstance
    .post("auth/login/", user)
};
