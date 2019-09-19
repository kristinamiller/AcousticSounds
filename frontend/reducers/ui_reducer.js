import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import audioReducer from './audio_reducer';

//add continuous play reducer here. Receive current song.

const uiReducer = combineReducers({
  modal: modalReducer, 
  audio: audioReducer
})

export default uiReducer;