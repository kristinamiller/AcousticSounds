import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    return (
      <div className="home-track-index">
        This is the Index of all Tracks
        <ul>
          {
            this.props.tracks.map((track) => {
              return <TrackIndexItem 
                        key={track.id}
                        track={track}
              />
            })
          }
        </ul>
        
      </div>
    )
  }

}

export default TrackIndex;