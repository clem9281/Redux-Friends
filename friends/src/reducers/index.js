import {
  LOGIN_START,
  LOGIN_SUCCESS,
  GETTING_FRIENDS,
  GOT_FRIENDS
} from "../actions";

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
    case GETTING_FRIENDS:
      return {
        ...state,
        loading: true
      };
    case GOT_FRIENDS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        loading: false
      };
    default:
      return state;
  }
};
