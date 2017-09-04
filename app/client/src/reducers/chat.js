import {
  NEW_MESSAGE,
  UPDATE_MESSAGES
} from '../constants/chat';

const messages = (state = [], action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return [...state, action.payload];

    case UPDATE_MESSAGES:
      return [...action.payload];

    default:
      return state;
  }
}

export default messages;