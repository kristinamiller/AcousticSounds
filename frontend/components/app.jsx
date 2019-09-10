import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignupContainer} />

  </div>
)