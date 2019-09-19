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
      <button 
      // onClick={this.props.deleteTrack(this.props.track.id)}
          onClick={() => { 
            if (window.confirm('Are you sure you wish to delete this track?')) {
              this.props.deleteTrack(this.props.track.id)
            } return false; 
          }}
      >
        Delete Track
        </button>
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
          <div>
            <Link
              to={`/tracks/${this.props.track.id}`}
              className="track-index-image-link">
              <img src={this.props.track.imageURL} className="user-track-image" />
            </Link>
          </div>
          <div className="user-track-info">
            <div className="track-title-div">
              <Link
                to={`/tracks/${this.props.track.id}`}
                className="track-index-title-link">
                {this.props.track.title}
              </Link>
            </div>

            <div>
              <button onClick={this.playTrack} className="track-play-button">
                Play Track</button>
            </div>
            <div>
              <button onClick={this.playTrack} className="track-play-button">
                Add Comment</button>
            </div>
            <div>
              {this.renderDelete()}
            </div>
          </div>
      </div>
    )
  }

}

export default UserTrack;