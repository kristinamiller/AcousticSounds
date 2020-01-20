import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  playTrack() {
    this.props.playTrack(this.props.track)
  }


  render() {
    let artistName = "";
    let artistLink = "/";
    if (this.props.artist) {
      this.props.artist.display_name ? artistName = this.props.artist.display_name : artistName = this.props.artist.email;
      artistLink = `/${this.props.artist.id}/tracks`
    }

    return(
      <li className="track-index-item-li">
        <div>
          <div className="track-index-play-div">
            
            <button onClick={this.playTrack} className="track-index-button">
              <img src={this.props.track.imageURL} className="track-index-image" />
            </button>
          </div>
          
          {/* <Link
            to={`/tracks/${this.props.track.id}`}
            >
            
          </Link> */}
        </div>
        <div className="track-title-div">
          <Link
            to={`/tracks/${this.props.track.id}`}
            className="track-index-title-link">
            {this.props.track.title}
          </Link>
        </div>
        <div>
          {/* <Link to={artistLink}>{artistName}</Link> */}
        </div>
        <div className="track-button">
          <button onClick={this.playTrack} className="track-play-button">
            &#9654; Play Track
          </button>
        </div>
        {/* <div>
          <audio controls className="track-index-audio-controls">
            <source src={this.props.track.audioURL} type="audio/ogg" />
          </audio>
        </div> */}
        
      </li>
    )
  }
// 


}

export default TrackIndexItem;