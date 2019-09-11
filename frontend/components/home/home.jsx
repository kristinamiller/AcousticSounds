import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

class Home extends React.Component {

  render() {
    return(
      <div>
        <GreetingContainer />
        <h1>I am the Home Component</h1>
        
      </div>

    )
  }

}

export default Home;