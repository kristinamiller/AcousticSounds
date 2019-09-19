import {
  PLAY_TRACK
} from '../actions/track_actions';


const audioReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case PLAY_TRACK:
      newState["track"] = action.track;
      return newState;
    default:
      return state;
  }
}

export default audioReducer;