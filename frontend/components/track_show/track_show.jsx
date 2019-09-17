import React from 'react';
// import genreList from '../track_index/genre_list';



class TrackShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTrack();
  }


  render() {
    if (!this.props.track) {
      return null;
    }
    return (
      <div className="track-show-container">
        <h3>Title: {this.props.track.title}</h3>
        <img src={this.props.track.imageURL}></img>
        

      </div>
    )
  }

}

export default TrackShow;