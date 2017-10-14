import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import store from './store/configureStore';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './actions/loginActions';

import App from './containers/App';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

render((
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
), document.getElementById('root'));
