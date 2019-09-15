import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';
import Root from './components/root';
import Home from './components/home/home';
import * as SessionApiUtils from './utils/session_api_util';
import * as sessionActions from './actions/session_actions';
import App from './components/app';
import * as TracksUtil from './utils/tracks_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  

  window.signup = sessionActions.signup;
  window.login = sessionActions.login;
  window.logout = sessionActions.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logoutAjax = SessionApiUtils.logout;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});