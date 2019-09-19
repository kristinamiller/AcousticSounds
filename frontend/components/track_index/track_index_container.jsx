import { connect } from 'react-redux';
import React from 'react';
import TrackIndex from './track_index';
import { fetchTracks, playTrack } from '../../actions/track_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';

const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks),
    users: Object.values(state.entities.users)
  }
}


const mdp = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  playTrack: (track) => dispatch(playTrack(track))
})

export default connect(msp, mdp)(TrackIndex)