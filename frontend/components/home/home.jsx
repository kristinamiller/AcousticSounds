import React from 'react';
import Splash from './splash'
import TrackIndexContainer from '../track_index/track_index_container'

class Home extends React.Component {

  render() {
    return(
      <div className="home-component">
        Home Component
        <TrackIndexContainer />
      </div>

    )
  }

}

export default Home;