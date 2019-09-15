import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Home from './home'
import TrackIndexContainer from '../track_index/track_index_container';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    // this.openModal = this.props.openModal.bind(this)
  }

  render() {
    return (
      <div>
        <div className="splash-component">
          <div className="splash-items">
            <div className="tagline">
              <h1>Real Instruments, Real Music</h1>
            </div>
            <div className="splash-open-modal">
              <button onClick={() => this.props.openModal('signup')}>
                Start uploading today
            </button>
            </div>
          </div>
        </div>
        <div className="track-index">
          {/* <TrackIndexContainer /> */}
        </div>
      </div>

    )
  }

}

export default Splash;