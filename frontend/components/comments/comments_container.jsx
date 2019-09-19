import { connect } from 'react-redux';
import React from 'react';
import CommentIndex from './comment_index';
import { fetchTrack } from '../../actions/track_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.id],
  users: state.entities.users
})

const mdp = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.match.params.id)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(CommentIndex)