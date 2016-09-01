import * as types from '../constants/ActionTypes';

export function addMessage(message) {
  return {
    type: types.ADD_MESSAGE,
    message
  };
}

export function receiveMessage(message) {
  return {
    type: types.RECEIVE_MESSAGE,
    message
  };
}
