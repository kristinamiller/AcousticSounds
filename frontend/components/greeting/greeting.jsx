import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.props.openModal.bind(this)
  }

  render() {
    let userName = this.props.currentUser.display_name ? this.props.currentUser.display_name : this.props.currentUser.email;
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
            <div className="nav-link">
              <Link to="/">Stream</Link>
            </div>
            <div className="nav-link">
              <Link to="/">Library</Link>
            </div>
          </div>
          <div className="nav-items-right">
            <div>
              <button className="sign-in" onClick={() => this.openModal('login')}>Sign In</button>
            </div>
            <div>
              <button className="create-account" onClick={() => this.openModal('signup')}>Create account</button>
            </div>
          </div>
        </div>

      </div>
    );
    const personalGreeting = () => (
      <div>
        <div className="nav-bar">
          <div className="nav-items-left">
            <div className="nav-link logo-text">
              <Link to="/">AcousticSounds</Link>
            </div>
            <div className="nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-link">
              <Link to="/">Stream</Link>
            </div>
            <div className="nav-link">
              <Link to={`/${this.props.currentUser.id}/tracks`}>Library</Link>
            </div>
          </div>
          <div className="nav-items-right">
            <div className="nav-link upload-nav">
              <Link to="/upload">Upload</Link>
            </div>
            <div className="nav-link">
              <Link to={`/${this.props.currentUser.id}/tracks`}>{userName}</Link>
            </div>
            <div>
              <button className="create-account" onClick={this.props.logout}>
              Log Out
              </button>
            </div>
          </div>
          
        </div>
      </div>
    )

    return(
      <div>
       { this.props.currentUser ? personalGreeting() : sessionLinks()}
      </div>
    )
  }
  
}


export default Greeting;