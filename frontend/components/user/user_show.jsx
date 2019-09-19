import React from 'react';
import UserTrack from './user_track'

// add logic to see if current user from session matches user id in ownProps

class UserShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTracks();
    this.props.fetchUser(this.props.match.params.userId)
  }



  render() {
    if (!this.props.user) {
      return null;
    }
    let userName = this.props.user.display_name ? this.props.user.display_name : this.props.user.email;
    return (
      <div className="user-show-container">
        <div className="user-header">
          <h2 className="user-show-name">{userName}</h2>
          <img src={this.props.user.imageURL} className="user-show-image"/>
        </div>
        <ul>
          {this.props.tracks.map((track) => {
            return <TrackIndexItem
              key={track.id}
              track={track}
              artist={this.props.user}
            />
          })}
        </ul>
        <UserTrack 
          key={this.props.user.id}
          tracks={this.props.tracks}
          user={this.props.user}
          isMine={this.props.isMine}
        />
      </div>
    )
  }

}

export default UserShow;