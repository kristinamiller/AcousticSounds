import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import CommentForm from './comment_form';
import { fetchTrack } from '../../actions/track_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { createComment, fetchComments, deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.id],
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.match.params.id)),
  fetchUsers: () => dispatch(fetchUsers()),
  createComment: (comment) => dispatch(createComment(comment)),
  fetchComments: (track) => dispatch(fetchComments(track)),
  deleteComment: (id) => dispatch(deleteComment(id)),
})

export default withRouter(connect(msp, mdp)(CommentForm))