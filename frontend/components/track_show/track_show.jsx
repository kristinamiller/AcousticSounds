import React from 'react';
import { Link } from 'react-router-dom';


class TrackShow extends React.Component {

  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  playTrack() {
    this.props.playTrack(this.props.track)
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
    let artistImage = "";
    if (artist) {
      artist.display_name ? artistName = artist.display_name : artistName = artist.email;
      artistLink = `/${artist.id}/tracks`;
      artistImage = artist.imageURL
    }
    return (
      <div className="track-show-container">
        <div className="track-show-header">
          <div className="track-show-header-right">
            <div className="track-title-container">
              <div className="track-show-play-container">
                <button onClick={this.playTrack} className="track-show-play-button">
                  &#9654;</button>
              </div>
              <div className="title-artist">
                <h3 className="track-show-title">{this.props.track.title}</h3>
                <Link to={artistLink} className="track-show-artist">{artistName}</Link>
              </div>
              
            </div>
          <div>
              <Link to={artistLink} className="artist-image-link">
                <img src={artistImage} className="user-show-image" />
              </Link>
          </div>
          
          </div>
          <div className="track-show-header-right">
            <img src={this.props.track.imageURL} className="track-show-image" />
          </div>

        </div>
        

        <div>
          <button onClick={this.playTrack} className="track-play-button">
            Add Comment</button>
        </div>

      </div>
    )
  }

}

export default TrackShow;