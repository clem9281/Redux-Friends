import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GETTING_FRIENDS = "GETTING_FRIENDS";
export const GOT_FRIENDS = "GOT_FRIENDS";

export const loginStart = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("login-token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    });
};

export const getFriends = () => dispatch => {
  dispatch({ type: GETTING_FRIENDS });
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: GOT_FRIENDS, payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};
