import * as io from 'socket.io-client';
import { updateMessages } from '../actions/chat';
import { NEW_MESSAGE } from '../constants/chat';

const socket = io.connect('/');

const reduxSocket = store => {
  socket.on('messages', function(data) {
    store.dispatch(updateMessages(data));
  });
  
  return next => action => {
    if (action.type === NEW_MESSAGE) {
      socket.emit('newMessage', action.payload);
    } else {
      next(action);
    }
  }
}

export default reduxSocket;