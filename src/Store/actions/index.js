import { WeatherAPIRequest } from "../../SharedComponents/utils/axios";
import {FETCH_WEATHER, FETCH_PLACE} from "./types";


export const fetchWeather = (lat, lon) => async dispatch => {
  try {
    const data = {
      lat,
      lon
    };

    const response = await WeatherAPIRequest(data);
    dispatch({
      type: FETCH_WEATHER,
      payload: response.data.list
    });
  } catch (error) {
    console.log("error", error);
  }
};



export const getPlace = place => {
  return {
    type: FETCH_PLACE,
    payload: place
  };
  
};
// export const searchPlace = place => {
//    = {};
//   localStorage.setItem("clicks", newclick);
// };

// export const FETCH_USER = "FETCH_USER";
// export const fetchUser = user => async dispatch => {
//   try {
//     const data = {
//       user
//     };

//     const response = await userCreate(data);
//     console.log(response);

//     //   dispatch({
//     //     type: FETCH_WEATHER,
//     //     payload: response
//     //   });
//   } catch (error) {
//     console.log("error", error);
//   }
// };
