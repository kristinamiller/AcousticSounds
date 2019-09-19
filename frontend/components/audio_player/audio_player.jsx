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
    let songImage = ""
    if (this.props.track) {
      audioSrc = this.props.track.audioURL;
      songTitle = this.props.track.title;
      songArtist = this.props.users[this.props.track.artist_id];
      songImage = this.props.track.imageURL;
    }


    return (
      
        <div className="audio-player-container">
          <div className="song-playing-div">
          <img src={songImage} className="song-playing-image"/>
            <div className="song-playing-info">
              <h1 className="song-playing-title">{songTitle}</h1>
              <h2 className="song-playing-artist">{songArtist.display_name}</h2>
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