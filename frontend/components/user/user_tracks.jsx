import React from 'react';
import TrackIndexItem from '../track_index/track_index_item';

class UserTracks extends React.Component {

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
        <ul>
          {this.props.tracks.map((track) => {
            return <TrackIndexItem
              key={track.id}
              track={track}
              artist={this.props.user}
            />
          })}
        </ul>
      </div>
    )
  }

}

export default UserTracks;