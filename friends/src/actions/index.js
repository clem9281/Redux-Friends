import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FAILURE = "FAILURE";
export const GETTING_FRIENDS = "GETTING_FRIENDS";
export const GOT_FRIENDS = "GOT_FRIENDS";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";

export const loginStart = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("login-token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.error(err);
      dispatch({
        type: FAILURE,
        payload: "We weren't able to log you in"
      });
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

export const addFriend = newFriend => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  return axiosWithAuth()
    .post("http://localhost:5000/api/friends", newFriend)
    .then(res => dispatch({ type: ADD_FRIEND_SUCCESS }))
    .catch(err => {
      console.error(err);
      dispatch({
        type: FAILURE,
        payload: "Whoops, something went wrong"
      });
    });
};
