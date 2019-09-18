import React from 'react';
import TrackIndexItem from './track_index_item';
import ArtistIndexItem from '../home/artist_index_item';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTracks();
    this.props.fetchUsers();
  }

  render() {
    let userSlice = this.props.users.slice(0,6);
    let trackSlice = this.props.tracks.slice(0,6);

    return (
      <div className="track-index-container">
        <div className="browse-tracks">
          <h1 className="browse-heading">New Music</h1>  
          <div className="track-index">
            <ul className="track-index-ul">
              {
                trackSlice.map((track) => {
                  return <TrackIndexItem 
                            key={track.id}
                            track={track}
                            artist={this.props.users[track.artist_id]}
                  />
                })
              }
            </ul>
          </div>
        </div>
        <div className="browse-artists">
          <h1 className="browse-heading">Artists Picked For You</h1>
          <ul className="artist-index-item-ul">
            {userSlice.map((user) => {
              return <ArtistIndexItem 
                        key={user.id}
                        artist={user}
                  />
            })}
          </ul>
        </div>
        
      </div>
    )
  }

}

export default TrackIndex;