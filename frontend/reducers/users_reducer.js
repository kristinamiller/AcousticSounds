import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

import { 
  RECEIVE_USER, RECEIVE_ALL_USERS
} from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      Object.keys(action.users).forEach((userId) => {
        newState[userId] = action.users[userId];
      })
      return newState;
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user})
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
}

export default usersReducer;