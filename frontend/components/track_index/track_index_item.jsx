import React from 'react';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <li>
        {this.props.track.title}
      </li>
    )
  }



}

export default TrackIndexItem;