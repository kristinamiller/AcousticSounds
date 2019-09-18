import React from 'react';
import UserTracks from './user_tracks'


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
          <h2>{userName}</h2>
          <img src="this.props.user.imageURL"/>
        </div>
        <UserTracks 
          key={this.props.user.id}
          tracks={this.props.tracks}
          user={this.props.user}
        />
      </div>
    )
  }

}

export default UserShow;