import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginStart = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("login-token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      getData();
    });
};

export const getData = () => {
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
