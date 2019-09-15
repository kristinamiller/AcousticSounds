import { connect } from 'react-redux';
import React from 'react';
import TrackIndex from './track_index';
import { fetchTracks } from '../../actions/track_actions';

const msp = (state) => {
  return {
    tracks: Object.values(state.entities.tracks)
  }
}


const mdp = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks())
})

export default connect(msp, mdp)(TrackIndex)