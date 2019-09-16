import React from 'react';

class UserTracks extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTracks();
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {
    // debugger
    return (
      !this.props.user ? <p>Loading</p> : 
      <div className="user-tracks-container">
        User Tracks
        <h2>{this.props.user.email}</h2>
        <ul>
          {this.props.tracks.map((track) => {
            return <li key={track.id}>Title: {track.title}</li>
          })}
        </ul>
      </div>
    )
  }

}

export default UserTracks;