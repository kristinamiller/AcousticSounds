import { connect } from 'react-redux';
import React from 'react';
import TrackShow from './track_show';
import { fetchTrack } from '../../actions/track_actions';

const msp = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.id],
  users: state.entities.users
})

const mdp = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.match.params.id)),
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(TrackShow)