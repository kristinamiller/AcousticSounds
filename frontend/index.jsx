import React from "react";
import ReactDOM from "react-dom";
// import configureStore from './store/store'
import Root from './root';
import Home from './components/home/home'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Home />, root);
});