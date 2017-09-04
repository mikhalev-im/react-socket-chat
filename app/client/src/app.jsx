import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import configureStore from './store/store';

import ChatPage from './containers/chatPage';
import RegisterPage from './containers/registerPage';
import LoginPage from './containers/loginPage';

const store = configureStore();

const render = (store) => {
  return ReactDOM.render(
    <Provider store={store} >
      <Router>
        <div>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/chat" component={ChatPage} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}

render(store);