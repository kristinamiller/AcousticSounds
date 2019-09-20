import React from 'react';
import { Link } from 'react-router-dom';


class CommentIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTrack();
    this.props.fetchUsers();
    this.props.fetchComments(this.props.track);
  }

  renderCommentList() {
    let ownCommentsArray = this.props.comments.filter((comment) => comment.track_id == this.props.track.id);
    return ownCommentsArray
    // .reverse();
  }



  render() {
    if (!this.props.track) {
      return null;
    }
    let artist = this.props.users[this.props.track.artist_id]

    let artistName = "";
    let artistLink = "/";
    if (artist) {
      artist.display_name ? artistName = artist.display_name : artistName = artist.email;
      artistLink = `/${artist.id}/tracks`
    }
    return (
      <div className="comment-index-container">
        {/* <h1 className="comments-header">Comments</h1>  */}
        <ul className="comments-ul">
          {
            this.renderCommentList().map((comment) => {
              return(
                <div className="comment-item" key={comment.id}>
                  <div className="comment-image-div">
                    <Link to={`/${comment.user_id}/tracks`}><img
                      src={this.props.users[comment.user_id].imageURL}
                      className="comments-user-image"
                    /></Link>
                    
                  </div>
                  <div className="comment-info-div">
                    <Link className="comment-username" to={`/${comment.user_id}/tracks`}>{this.props.users[comment.user_id].display_name}</Link>
                    <h2 className="comment-body">{comment.body}</h2>
                  </div>
                  
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default CommentIndex;