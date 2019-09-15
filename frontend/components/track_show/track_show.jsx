import React from 'react';

class TrackShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTrack();
  }

  render() {
    return (
      <div className="track-show-container">
        <h3>Title: {this.props.track && this.props.track.title}</h3>
      </div>
    )
  }

}

export default TrackShow;