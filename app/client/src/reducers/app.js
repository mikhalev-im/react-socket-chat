import { combineReducers } from 'redux';
import messages from './chat';
import user from './user';


const appReducer = combineReducers({
  messages,
  user
});


export default appReducer;