import * as fetch from '../utils/fetch';

import * as userTypes from '../action-types/user';

export function setUser(user) {
  return {
    type: userTypes.SET_USER,
    payload: user,
  };
}

export function getSession() {
  return dispatch => {
    fetch.get('http://localhost:8080/api/user/getUser')
      .then(response => {
        dispatch(setUser(response.user));
      });
  };
}
