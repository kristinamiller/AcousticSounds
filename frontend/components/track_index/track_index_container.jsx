import { connect } from 'react-redux';
import React from 'react';
import TrackIndex from './track_index';
import { fetchTracks } from '../../actions/track_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';

const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks),
    users: state.entities.users
  }
}


const mdp = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(TrackIndex)