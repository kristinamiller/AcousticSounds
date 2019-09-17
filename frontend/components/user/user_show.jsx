import React from 'react';


class UserShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }


  render() {
    if (!this.props.user) {
      return null;
    }
    return (
      <h2>{this.props.user.email}</h2>
    )
  }

}

export default UserShow;