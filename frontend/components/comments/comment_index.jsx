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
        <h1>Comments</h1> 
        <ul>
          {
            this.renderCommentList().map((comment) => {
              return(
                <div className="comment-item">
                  {/* <img src={this.props.users[comment.user_id].imageURL}/> */}
                  <h1>{this.props.users[comment.user_id].display_name}</h1>
                  <h2>{comment.body}</h2>
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