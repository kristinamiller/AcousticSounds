import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.props.openModal.bind(this);
    this.findCurrentUser = this.findCurrentUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  findCurrentUser() {
    if (this.props.currentUser.display_name) {
      return this.props.currentUser.display_name;
    } else {
      return this.props.currentUser.email;
    }
  }

  logoutUser() {
    this.props.logout()
    // .then(() => { this.props.history.push('/')})
  }

  render() {
    if (this.props.currentUser) {
      let userName = this.props.currentUser.display_name ? this.props.currentUser.display_name : this.props.currentUser.email;
    }

    const authorLinks = () => (
      <div class="footer-person">
        <p class="footer-name">Kristina Miller</p>
        <div class="footer-icons">
          <a href="https://github.com/kristinamiller"> <img class="github-logo"
            src="../assets/images/github-white.png"></img></a>
          <a href="https://www.linkedin.com/in/kristinafmiller/"> <img class="github-logo"
            src="../assets/images/linkedin-white.png"></img></a>
        </div>
      </div>
    )
    
    const sessionLinks = () => (
      <div>
        <div className="nav-bar">
          <div className="nav-items-left">
            <div className="nav-link logo-text">
              <Link to="/">AcousticSounds</Link>
            </div>
            <div className="nav-link home">
              <Link to="/">Home</Link>
            </div>
            {/* <div className="nav-link">
              <Link to="/">Stream</Link>
            </div> */}
            {/* <div className="nav-link">
              <Link to="/">Library</Link>
            </div> */}
          </div>
          <div className="nav-items-right">
            <div className="nav-link nav-link-upload">
              <button className="" onClick={() => this.openModal('signup')}>Upload</button>
            </div>
            <div>
              <button className="sign-in" onClick={() => this.openModal('login')}>Sign In</button>
            </div>
            <div>
              <button className="create-account" onClick={() => this.openModal('signup')}>Create account</button>
            </div>
            <div>
              {/* <p className="author-name">Kristina Miller</p> */}
              <div className="author-icons">
                <a href="https://github.com/kristinamiller/AcousticSounds" target="_blank"> <img className='github-logo'
                  src='https://kristinamiller.github.io/EarthCycles/assets/images/github-white.png'></img></a>
                <a href="https://www.linkedin.com/in/kristinafmiller/" target="_blank"> <img className="github-logo"
                  src="https://kristinamiller.github.io/EarthCycles/assets/images/linkedin-white.png"></img></a>
              </div>
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
            <div className="nav-link home">
              <Link to="/">Home</Link>
            </div>
            {/* <div className="nav-link">
              <Link to="/">Stream</Link>
            </div> */}
            <div className="nav-link">
              <Link to={`/${this.props.currentUser.id}/tracks`}>Library</Link>
            </div>
          </div>
          <div className="nav-items-right">
            <div className="nav-link nav-link-upload">
              <Link to="/upload">Upload</Link>
            </div>
            <div className="nav-link nav-username">
              <Link to={`/${this.props.currentUser.id}/tracks`}>{this.findCurrentUser()}</Link>
            </div>
            <div>
              <button className="create-account" onClick={this.logoutUser}>
              Log Out
              </button>
            </div>
            <div className="author-icons">
              <a href="https://github.com/kristinamiller/AcousticSounds" target="_blank"> <img className='github-logo'
                src='https://kristinamiller.github.io/EarthCycles/assets/images/github-white.png'></img></a>
              <a href="https://www.linkedin.com/in/kristinafmiller/" target="_blank"> <img className="github-logo"
                src="https://kristinamiller.github.io/EarthCycles/assets/images/linkedin-white.png"></img></a>
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