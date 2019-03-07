import { LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
  friends: [],
  loading: false,
  token: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};
