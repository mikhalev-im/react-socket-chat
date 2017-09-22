import {
  REGISTER_REQUEST,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../constants/user'

import {filter} from '../utils/utils'

const user = (state = { nickname: '', isLogged: false }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        nickname: action.payload.nickname,
        isLogged: false
      };

    case REGISTER_SUCCESS:
      return Object.assign({}, filter(state, ['regFailReason', 'logFailReason']), {isLogged: true});

    case REGISTER_FAIL:
      return Object.assign({}, state, {isLogged: false, regFailReason: action.payload.reason});

    case LOGIN_REQUEST:
      return {
        nickname: action.payload.nickname,
        isLogged: false
      };

    case LOGIN_SUCCESS:
      return Object.assign({}, filter(state, ['regFailReason', 'logFailReason']), {isLogged: true});

    case LOGIN_FAIL:
      return Object.assign({}, state, {isLogged: false, logFailReason: action.payload.reason})

    default:
      return state;
  }
}

export default user;