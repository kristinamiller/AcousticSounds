import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTracks();
    // this.props.fetchUsers();
  }

  render() {
    return (
      <div className="track-index-container">
        <h1>This is the Index of all Tracks</h1>  
        {/* <ul>
        {this.props.users.map((user) => {
          return <li key={user.id}>{user.email}</li>
        })}
        </ul> */}
        <div className="track-index">
          <ul className="track-index-ul">
            {
              this.props.tracks.map((track) => {
                return <TrackIndexItem 
                          key={track.id}
                          track={track}
                          artistId={track.artist_id}
                />
              })
            }
          </ul>
        </div>
        
      </div>
    )
  }

}

export default TrackIndex;