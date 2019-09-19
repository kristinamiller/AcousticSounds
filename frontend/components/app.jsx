import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Home from './home/home';
import Modal from './modal/modal';
import NotFound from './session_form/not_found';
import TrackFormContainer from './track_form/track_form_container';
import TrackShowContainer from './track_show/track_show_container';
import SplashContainer from './home/splash_container'
import UserShowContainer from './user/user_show_container';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = () => (
  <div>
    <Modal />
    <header>
      
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer}/>
      <ProtectedRoute exact path="/home" component={Home}/>
      <ProtectedRoute exact path="/upload" component={TrackFormContainer}/>
      <Route exact path="/tracks/:id" component={TrackShowContainer}/>
      <Route exact path="/:userId/tracks" component={UserShowContainer}/>
      {/* <Route exact path="/:userId/tracks" component={  }/> */}
      <Route path="/" component={NotFound}/>
    </Switch>
    <footer>
      <AudioPlayerContainer />
    </footer>

  </div>
)

export default App;