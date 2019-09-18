import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    let artistName = "";
    let artistLink = "/";
    if (this.props.artist) {
      this.props.artist.display_name ? artistName = this.props.artist.display_name : artistName = this.props.artist.email;
      artistLink = `/${this.props.artist.id}/tracks`
    }


    // let artistLink = "";
    // if (!this.props.user) {
    //   <p>Loading</p>
    // } else {
    //   let artistName = this.props.artist.display_name ? this.props.artist.display_name : this.props.artist.email;
    //   artistLink = <Link to='/' className="track-index-artist-name">{artistName}</Link>
    // }
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
        <Link to={artistLink}>{artistName}</Link>
        
        <audio controls className="track-index-audio-controls">
          <source src={this.props.track.audioURL} type="audio/ogg" />
        </audio>
      </li>
    )
  }



}

export default TrackIndexItem;