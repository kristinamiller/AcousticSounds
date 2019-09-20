import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import CommentIndex from './comment_index';
import { fetchTrack } from '../../actions/track_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { createComment, fetchComments, deleteComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.id],
  users: state.entities.users,
  comments: Object.values(state.entities.comments)
})

const mdp = (dispatch, ownProps) => ({
  fetchTrack: () => dispatch(fetchTrack(ownProps.match.params.id)),
  fetchUsers: () => dispatch(fetchUsers()),
  createComment: (id) => dispatch(createComment(id)),
  fetchComments: (id) => dispatch(fetchComments(id)),
  deleteComment: (id) => dispatch(deleteComment(id)),
})

export default withRouter(connect(msp, mdp)(CommentIndex))