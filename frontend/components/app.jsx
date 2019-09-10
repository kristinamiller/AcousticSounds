import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container'

const App = () => (
  <div>
    <h1>Listen to my music</h1>
    {/* <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignupContainer} /> */}
    <GreetingContainer />
  </div>
)

export default App;