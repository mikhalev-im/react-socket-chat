import {
  UPDATE_MESSAGES,
  NEW_MESSAGE
} from '../constants/chat';

export const updateMessages = (messages) => ({
  type: UPDATE_MESSAGES,
  payload: messages
})

export const addMessage = (message, author) => ({
  type: NEW_MESSAGE,
  payload: {
    message,
    author
  }
})