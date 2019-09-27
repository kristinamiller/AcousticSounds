import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Home from './home/home';

const App = () => (
  <div>
    {/* <Modal /> */}
    <header>
      <h1 className="logo-text">AcousticSounds</h1>
      {/* <GreetingContainer /> */}
    </header>
    <Switch>
      <Route exact path="/" component={Home}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <Route exact path="/" component={Home}/> */}
    </Switch>
  </div>
)

export default App;