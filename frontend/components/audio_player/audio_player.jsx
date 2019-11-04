import React from 'react';
import { Link } from 'react-router-dom';

class AudioPlayer extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
   
  }

  componentDidUpdate() {

  }

  render() {
    let audioSrc = "";
    let songTitle = "";
    let songArtist = "";
    let songImage = "";
    let artistLink = "/";
    let songLink = "/";
    if (this.props.track) {
      audioSrc = this.props.track.audioURL;
      songTitle = this.props.track.title;
      songArtist = this.props.users[this.props.track.artist_id];
      songImage = this.props.track.imageURL;
      artistLink = `/${this.props.track.artist_id}/tracks`;
      songLink = `/tracks/${this.props.track.id}`;
    }


    return (
      
        <div className="audio-player-container">
          <div className="song-playing-div">
            <Link to={songLink}>
              <img src={songImage} className="song-playing-image"/>
            </Link>
            <div className="song-playing-info">
              <Link to={songLink}>
                <h1 className="song-playing-title">{songTitle}</h1>
              </Link>
              <Link to={artistLink}>
                <h2 className="song-playing-artist">{songArtist.display_name}</h2>
              </Link>
              
            </div>
           
          </div>
          
          <audio controls 
            className="audio-controls" 
            src={audioSrc} 
            type="audio/ogg" 
            autoPlay
            >
          </audio>
        </div>
    )
  }

}

export default AudioPlayer;

// 