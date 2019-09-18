import React from 'react';
import { Link } from 'react-router-dom';

class ArtistIndexItem extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    let artistName = "";
    let artistLink = "/";
    if (this.props.artist) {
      this.props.artist.display_name ? artistName = this.props.artist.display_name : artistName = this.props.artist.email;
      artistLink = `/${this.props.artist.id}/tracks`
    }

    return (
      <li className="artist-index-item-li">
        <Link 
          to={artistLink}
          className="artist-index-image-link"
          >
          <img src={this.props.artist.imageURL} className="artist-index-image"/>
        </Link>
          
        <Link to={artistLink}
          className="artist-index-name-link">{artistName}</Link>
      </li>
    )
  }



}

export default ArtistIndexItem;