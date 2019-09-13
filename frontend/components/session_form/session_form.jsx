import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  handleEmail(e) {
    this.setState({email: e.target.value})
  }
  handlePassword(e) {
    this.setState({password: e.target.value})
  }

  demoUser() {
    const demoUser = { email: 'test@email.com', password: 'password' }
    return (
      <button className="demo-user" onClick={(e) => {
        e.preventDefault()
        return this.props.processForm(demoUser)
      }}>Log In as Demo User</button>
    )
  }
  
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }


  render() {
    
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          <div className="login-form">
            {this.props.formType === 'Log In' ? this.demoUser() : null}
            {/* <h3>{this.props.formType}</h3> */}
            <h3>{this.renderErrors()}</h3>
            <br/>
              <input 
                type="text"
                value={this.state.email}
                onChange={this.handleEmail}
                className="login-input"
                placeholder="Email"
                />
              <input 
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}
                className="login-input"
                placeholder="Password"
                />
            <br/>
            <input type="submit" value={this.props.formType} 
            className="login-submit"/>
            <div className="session-form-or">or</div>
            <button onClick={this.props.formType === 'Log In' ? () => this.openModal('signup') : () => this.openModal('login')} className="login-submit">
              {this.props.formType === 'Log In' ? "Create an account" : "Log In"}
              </button>
          </div>
        </form>
      </div>  
    );
  }
}

export default SessionForm;