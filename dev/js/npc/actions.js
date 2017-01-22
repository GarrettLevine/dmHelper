import * as types from '../action-types';
import fetch from '../utils/fetch';

export function savingNpc() {
  return {
    type: types.SAVING_NPC,
  };
}

export function updateNpc(npc) {
  return {
    type: types.UPDATE_NPC,
    payload: npc,
  };
};

export function npcError(err) {
  return {
    type: types.NPC_ERROR,
    payload: err,
  };
}

export function createNpc(npc) {
  return dispatch => {
    dispatch(savingNpc());

    return fetch.post('http://localhost:8080/api/npc/create', npc)
      .then(res => {
        console.log(res);
        dispatch(updateNpc(npc));
      })
      .catch(err => {
        console.log(err);
        npcError(err);
      });
  };
}
