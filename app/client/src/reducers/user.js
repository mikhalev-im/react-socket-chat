import {
  REGISTER_REQUEST,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../constants/user'

const user = (state = { nickname: '', isLogged: false }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        nickname: action.payload.nickname,
        isLogged: false
      };

    case REGISTER_SUCCESS:
      return Object.assign({}, state, {isLogged: true});

    case LOGIN_REQUEST:
      return {
        nickname: action.payload.nickname,
        isLogged: false
      };

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {isLogged: true});

    default:
      return state;
  }
}

export default user;