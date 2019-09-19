import { connect } from 'react-redux';
import React from 'react';
import AudioPlayer from './audio_player';
import { fetchTrack } from '../../actions/track_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { playTrack } from '../../actions/track_actions';

const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks),
    users: state.entities.users,
    track: state.ui.audio.track
  }
}


const mdp = (dispatch) => ({
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(AudioPlayer)