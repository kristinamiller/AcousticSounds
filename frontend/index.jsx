import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store';
import Root from './root';
import Home from './components/home/home';
import * as SessionApiUtils from './utils/session_api_util';
import * as sessionActions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.signup = sessionActions.signup;
  window.login = sessionActions.login;
  window.logout = sessionActions.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logoutAjax = SessionApiUtils.logout;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>React is Working</h1>, root);
});