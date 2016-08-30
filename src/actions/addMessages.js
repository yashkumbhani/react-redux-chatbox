import * as types from '../constants/ActionTypes';

export function addMessage(message) {
  return {
    type: types.ADD_MESSAGE,
    message
  };
}
