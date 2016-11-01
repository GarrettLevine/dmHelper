import * as types from '../action-types/user';

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  isFetching: false,
  id: '',
  facebook: {},
  google: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER: {
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload._id,
        facebook: action.payload.facebook,
        google: action.payload.google,
      };
    }

    default: {
      return state;
    }
  }
}
