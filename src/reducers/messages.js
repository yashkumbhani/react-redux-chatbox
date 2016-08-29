import { ADD_MESSAGE } from '../constants/ActionTypes'

const initialState = {
  loaded: false,
  data: []
};

function messages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        data: [...state.data, action.message]
      }
    default :
        return state;
  }
}

export default messages
