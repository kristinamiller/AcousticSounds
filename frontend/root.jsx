import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';


const Root = () => (
  <Provider>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)

export default Root;