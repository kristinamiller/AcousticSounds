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
    let audioSrc = "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcElCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c0f0af5ea06f3166a6a2fb6ee44806cbac398578/red-prairie-dawn.mp3";
    let songTitle = "Red Prairie Dawn";
    let songArtist = "Molly Tuttle";
    let songImage = "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcE1CIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--159b216d6a36ed07ad4d5c1cf235c2aeb36180ee/john-album.jpg"
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