import { connect } from 'react-redux';
import React from 'react';
import TrackShow from './track_show';
import { fetchTrack, playTrack, deleteTrack } from '../../actions/track_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchComments } from '../../actions/comment_actions';

const msp = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.id],
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  comments: Object.values(state.entities.comments)
})

const mdp = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.match.params.id)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  playTrack: (track) => dispatch(playTrack(track)),
  deleteTrack: (id) => dispatch(deleteTrack(id)),
  fetchComments: (track) => dispatch(fetchComments(track))
})

export default connect(msp, mdp)(TrackShow)