import * as CommentsUtil from '../utils/comments_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';

const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
})

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  commentId: comment.id
})

const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

export const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS
})

export const fetchComments = (track) => (dispatch) => (
  CommentsUtil.fetchComments(track).then((comments) => dispatch(receiveAllComments(comments)))
)

export const createComment = (comment) => (dispatch) => {
  return CommentsUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => (dispatch(receiveCommentErrors(err.responseJSON)))
  )
}

export const deleteComment = (id) => (dispatch) => (
  CommentsUtil.deleteComment(id).then((comment) => dispatch(removeComment(comment)))
)