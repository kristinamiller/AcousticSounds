import React from 'react';
import { Link } from 'react-router-dom';


class TrackShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTrack();
    this.props.fetchUsers();
  }


  render() {
    if (!this.props.track) {
      return null;
    }
    let artist = this.props.users[this.props.track.artist_id]

    let artistName = "";
    let artistLink = "/";
    if (artist) {
      artist.display_name ? artistName = artist.display_name : artistName = artist.email;
      artistLink = `/${artist.id}/tracks`
    }
    return (
      <div className="track-show-container">
        <h3>Title: {this.props.track.title}</h3>
        <img src={this.props.track.imageURL}></img>
        <Link to={artistLink}>{artistName}</Link>
        <audio controls>
          <source src={this.props.track.audioURL} type="audio/ogg"/>
        </audio>

      </div>
    )
  }

}

export default TrackShow;