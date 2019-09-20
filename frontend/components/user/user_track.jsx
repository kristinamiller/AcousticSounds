import React from 'react';
import TrackIndexItem from '../track_index/track_index_item';
import { Link } from 'react-router-dom';


//render just a track index item. thread through 
// add ternary isMine ? render button(invoke method here) : null

class UserTrack extends React.Component {

  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  playTrack() {
    this.props.playTrack(this.props.track)
  }
  renderDelete() {
    if (this.props.isMine) {
      return (
        <div className="add-comment-div">
          <button className="add-comment-link"
      // onClick={this.props.deleteTrack(this.props.track.id)}
          onClick={() => { 
            if (window.confirm('Are you sure you wish to delete this track?')) {
              this.props.deleteTrack(this.props.track.id)
            } return false; 
          }}
      >
        Delete Track
        </button>
        </div>
        )
    } else {
      null;
    }
  }

  // <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) }} />


  render() {

    let artistName = "";
    let artistLink = "/";
    if (this.props.artist) {
      this.props.artist.display_name ? artistName = this.props.artist.display_name : artistName = this.props.artist.email;
      artistLink = `/${this.props.artist.id}/tracks`
    }
 
    return (
      !this.props.artist ? <p>Loading</p> : 
      <div className="user-track-container">
        <div className="user-track-image-title">
          <div>
            <Link
              to={`/tracks/${this.props.track.id}`}
              className="track-index-image-link">
              <img src={this.props.track.imageURL} className="user-track-image" />
            </Link>
          </div>
          <div className="user-track-info">
            <div className="user-show-play-container">
              <button onClick={this.playTrack} className="user-play-button">
                &#9654;</button>
            </div>
            <div className="track-title-div">
              <Link
                to={`/tracks/${this.props.track.id}`}
                className="user-track-title-link">
                {this.props.track.title}
              </Link>
            </div>
          </div>
          </div>
          <div className="add-comment-div">
              <Link className="add-comment-link" to={`/tracks/${this.props.track.id}`}>Add Comment</Link>
            
              {this.renderDelete()}
            
            </div>
            
          
      </div>
    )
  }

}

export default UserTrack;