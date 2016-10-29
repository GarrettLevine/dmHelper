import fetch from 'isomorphic-fetch';

import * as userTypes from '../action-types/user';

export function setUser(user) {
  return {
    type: userTypes.SET_USER,
    payload: user,
  };
}

export function getSession() {
  return dispatch => {
    fetch('localhost:8080/api/user/getUser', {
      method: 'get',
      'Content-Type': 'application/json',
    }).then(response => {
      console.log(response);
    });
  };
}
