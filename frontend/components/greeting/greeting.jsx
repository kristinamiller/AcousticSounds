import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.props.openModal.bind(this)
  }

  render() {

    const sessionLinks = () => (
      <div>
        <div className="nav-bar">
          <div className="nav-items-left">
            <div className="nav-link logo-text">
              <Link to="/">AcousticSounds</Link>
            </div>
            <div className="nav-link">
              <Link to="/">Home</Link>
            </div>
          </div>
          <div className="nav-items-right">
            <div className="nav-link">
              <button onClick={() => this.openModal('login')}>Sign In</button>
            </div>
            <div className="nav-link">
              <button onClick={() => this.openModal('signup')}>Create account</button>
            </div>
          </div>
        </div>

      </div>
    );
    const personalGreeting = () => (
      <hgroup>
        <h2>Hi, {this.props.currentUser.email}</h2>
        <button onClick={this.props.logout}>Log Out</button>
      </hgroup>
    )
      console.log(this.props)
    return(
      <div>
       { this.props.currentUser ? personalGreeting() : sessionLinks()}
      </div>
    )
  }
  
}


export default Greeting;