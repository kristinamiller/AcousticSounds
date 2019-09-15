import {
  RECEIVE_ALL_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/track_actions';


const tracksReducer = (state = {}, action) => {
  Object.freeze(state)

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_TRACKS:
      Object.keys(action.tracks).forEach((trackId) => {
        newState[trackId] = action.tracks[trackId];
      })
      return newState;
    case RECEIVE_TRACK:
      newState[action.track.id] = action.track;
      return newState;
    case REMOVE_TRACK:
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }

}

export default tracksReducer;
