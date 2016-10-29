import * as types from './action-types/app';
import fetch from 'isomorphic-fetch';

export function setSignin(value) {
  return {
    type: types.SET_SIGN_IN,
    payload: value,
  };
}
