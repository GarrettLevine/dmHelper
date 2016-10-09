import * as types from './action-types/app';

const initialState = {
  signIn: false,
};

export default function appUi(state = initialState, action) {
  switch (action.type) {
    case types.SET_SIGN_IN: {
      return {
        ...state,
        signIn: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
