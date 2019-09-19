import { connect } from 'react-redux';
import React from 'react';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import { fetchTracks, playTrack } from '../../actions/track_actions';

function userTrackSelector(allTracks, userId) {
  return Object.values(allTracks).filter((track) => track.artist_id == userId)
}

const msp = (state, ownProps) => {
  return {
    tracks: userTrackSelector(state.entities.tracks, ownProps.match.params.userId),
    user: state.entities.users[ownProps.match.params.userId],
    isMine: state.session.id == ownProps.match.params.userId
  }
}

const mdp = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  playTrack: (track) => dispatch(playTrack(track))
})


export default connect(msp, mdp)(UserShow)