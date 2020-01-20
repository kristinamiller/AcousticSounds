export const fetchComments = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks/${id}/comments`
  })
}
export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: { comment }
  })
} 
export const deleteComment = (comment) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`
  })
}
