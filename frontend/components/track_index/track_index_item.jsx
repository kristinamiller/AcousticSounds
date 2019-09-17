import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // this.props.fetchUser(this.props.artistId)
  }

  render() {
    // let artist = this.props.fetchUser(this.props.artistId)
    return(
      <li className="track-index-item-li">
        <Link 
          to={`/tracks/${this.props.track.id}`} 
          className="track-index-title-link">
          {this.props.track.title}
        </Link>
        <Link
          to={`/tracks/${this.props.track.id}`}
          className="track-index-image-link">
          <img src={this.props.track.imageURL} className="track-index-image" />
        </Link>
        
        <Link to='/' className="track-index-artist-name">Artist Name {this.props.artistId}</Link>
        <audio controls className="track-index-audio-controls">
          <source src={this.props.track.audioURL} type="audio/ogg" />
        </audio>
      </li>
    )
  }



}

export default TrackIndexItem;