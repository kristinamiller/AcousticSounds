import { connect } from 'react-redux';
import React from 'react';
import TrackForm from './track_form';
import { createTrack } from '../../actions/track_actions';

const msp = ({ session, entities: { users } }) => {

  return { currentUser: users[session.id] }
}

const mdp = (dispatch) => ({
  action: (track) => dispatch(createTrack(track))
})

export default connect(msp, mdp)(TrackForm)