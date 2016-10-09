import * as types from './action-types/app';

export function setSignin(value) {
  return {
    type: types.SET_SIGN_IN,
    payload: value,
  };
}