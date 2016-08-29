import * as types from '../constants/ActionTypes';

function addMessage(message) {
  return {
    type: types.ADD_MESSAGE,
    message
  };
}
