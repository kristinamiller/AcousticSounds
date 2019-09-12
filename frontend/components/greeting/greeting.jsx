import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  // debugger
  const sessionLinks = () => (
    <div>
      <div className="nav-bar">
        <div className="nav-items-left">
          <div className="nav-link">
            <Link to="/">AcousticSounds</Link>
          </div>
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="nav-items-right">
          <div className="nav-link">
            <button onClick={() => openModal('login')}>Sign In</button>
          </div>
          <div className="nav-link">
            <button onClick={() => openModal('signup')}>Create account</button>
          </div>
        </div>
      </div>
      {/* <div>
        <button>Start uploading today</button>
      </div> */}
    </div>
  );
  const personalGreeting = () => (
    <hgroup>
      <h2>Hi, {currentUser.email}</h2>
      <button onClick={logout}>Log Out</button>
    </hgroup>
  )

  return currentUser ? personalGreeting() : sessionLinks();

}

export default Greeting;