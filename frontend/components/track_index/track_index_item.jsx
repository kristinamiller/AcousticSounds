import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <li>
        <Link to={`/tracks/${this.props.track.id}`}>{this.props.track.title}</Link>
      </li>
    )
  }



}

export default TrackIndexItem;