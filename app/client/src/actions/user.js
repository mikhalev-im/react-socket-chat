import {
  REGISTER_REQUEST,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../constants/user';

import {
  REDIRECT
} from '../constants/system';

export const register = (nick, pass) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
      payload: {
        nickname: nick,
        password: pass
      }
    });

    const options = {
      method: 'POST',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `nickname=${nick}&password=${pass}`
    }

    fetch('/api/register', options)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Wrong server answer');
      }
      
      return response.json();
    })
    .then((data) => {
      if (data === true) {
        dispatch({
          type: REGISTER_SUCCESS
        });
      } else {
        throw new Error('Can not register with your data');
      }
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: REGISTER_FAIL,
        payload: {
          reason: e.message
        }
      });
    });

  }
}

export const login = (nick, pass) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        nickname: nick,
        password: pass
      }
    });

    const options = {
      method: 'POST',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `nickname=${nick}&password=${pass}`
    }

    fetch('/api/login', options)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Wrong server answer');
      }
      
      return response.json();
    })
    .then((data) => {
      if (data === true) {
        dispatch({
          type: LOGIN_SUCCESS
        });
      } else {
        throw new Error('Wrong creditentials');
      }
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: LOGIN_FAIL,
        payload: {
          reason: e.message
        }
      });
    });

  }
}