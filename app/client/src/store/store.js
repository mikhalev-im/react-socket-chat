import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import appReducer from '../reducers/app';
import reduxSocket from '../middlewares/reduxSocket';

const configureStore = (initialState = {}) => {
  return createStore(appReducer, initialState, compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
    applyMiddleware(reduxSocket)
  ));
}

export default configureStore;