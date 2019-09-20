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
        <div className="user-show-header">
          
          <img src={this.props.user.imageURL} className="user-show-image"/>
        </div>
        <div className="user-tracks-container">
          <h2 className="user-show-name">{userName}</h2>
        
          <ul className="user-tracks-ul">
            
            <h1 className="user-tracks-header">Top Songs</h1>
            {this.props.tracks.map((track) => {
              return <UserTrack
                key={track.id}
                track={track}
                artist={this.props.user}
                isMine={this.props.isMine}
                deleteTrack={this.props.deleteTrack}
                playTrack={this.props.playTrack}
              />
            })}
          </ul>
        </div>
      </div>
    )
  }

}

export default UserShow;