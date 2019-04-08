import {
  LOGIN_START,
  LOGIN_SUCCESS,
  GETTING_FRIENDS,
  GOT_FRIENDS,
  ADDING_FRIEND,
  FAILURE,
  ADD_FRIEND_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  loading: false,
  token: null,
  error: null
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
        friends: [...action.payload],
        loading: false
      };
    case ADDING_FRIEND:
      return {
        ...state,
        loading: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
