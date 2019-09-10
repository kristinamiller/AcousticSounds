import { combineReducers } from 'redux';
import sessionReducer from './session';
import entities from './entities';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer
}) 