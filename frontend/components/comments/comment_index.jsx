import React from 'react';
import { Link } from 'react-router-dom';


class CommentIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchTrack();
    this.props.fetchUsers();
  }


  render() {
    if (!this.props.track) {
      return null;
    }
    let artist = this.props.users[this.props.track.artist_id]

    let artistName = "";
    let artistLink = "/";
    if (artist) {
      artist.display_name ? artistName = artist.display_name : artistName = artist.email;
      artistLink = `/${artist.id}/tracks`
    }
    return (
      <div className="comment-show-container">

      </div>
    )
  }

}

export default CommentIndex;