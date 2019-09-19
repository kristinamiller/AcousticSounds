import React from 'react';
import Splash from './splash'
import TrackIndexContainer from '../track_index/track_index_container';
import AudioPlayerContainer from '../audio_player/audio_player_container';

class Home extends React.Component {

  render() {
    return(
      <div className="home-component">
        <TrackIndexContainer />
        
      </div>

    )
  }

}

export default Home;