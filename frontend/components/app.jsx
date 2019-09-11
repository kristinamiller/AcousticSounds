import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

const App = () => (
  <div>
    <header>
      <h1>Acoustic Sounds</h1>
      <GreetingContainer />
    </header>
    {/* <Switch> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <Route exact path="/" component={Home}/> */}
    {/* </Switch> */}
  </div>
)

export default App;