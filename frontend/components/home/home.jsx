import React from 'react';
import Splash from './splash'

class Home extends React.Component {

  render() {
    return(
      <div className="home-component">
        <Splash openModal={this.props.openModal}/>
      </div>

    )
  }

}

export default Home;