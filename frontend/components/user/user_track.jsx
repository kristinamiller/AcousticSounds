import React from 'react';
import TrackIndexItem from '../track_index/track_index_item';
import { Link } from 'react-router-dom';


//render just a track index item. thread through 
// add ternary isMine ? render button(invoke method here) : null

class UserTrack extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    // debugger
    return (
      !this.props.user ? <p>Loading</p> : 
      <div className="user-tracks-container">
        User Tracks
        <h2>{this.props.user.email}</h2>
          {/* <div>
            <Link
              to={`/tracks/${this.props.track.id}`}
              className="track-index-image-link">
              <img src={this.props.track.imageURL} className="track-index-image" />
            </Link>
          </div>
          <div className="track-title-div">
            <Link
              to={`/tracks/${this.props.track.id}`}
              className="track-index-title-link">
              {this.props.track.title}
            </Link>
          </div>
          <div>
            <Link to={artistLink}>{artistName}</Link>
          </div>
          <div>
            <button onClick={this.playTrack}>
              Play Track</button>
          </div> */}

{/* 
        <ul>
          {this.props.tracks.map((track) => {
            return <TrackIndexItem
              key={track.id}
              track={track}
              artist={this.props.user}
            />
          })}
        </ul> */}
      </div>
    )
  }

}

export default UserTrack;