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
    this.props.processForm(user).then(() => this.props.closeModal())
  }

  handleEmail(e) {
    this.setState({email: e.target.value})
  }
  handlePassword(e) {
    this.setState({password: e.target.value})
  }

  demoUser() {
    const demoUser = { email: 'demouser@acousticsounds.com', password: 'fullstack123' }
    return (
      <button className="demo-user" onClick={(e) => {
        e.preventDefault();
        return this.props.loginUser(demoUser).then(this.props.closeModal())
      }}>Sign In as Demo User</button>
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

  componentDidMount() {
    this.props.clearErrors();
  }


  render() {
    
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          <div className="login-form">
            
            {/* <h3>{this.props.formType}</h3> */}
            <h3 className="login-errors">{this.renderErrors()}</h3>
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
            <div className="session-form-or">
              {this.props.formType === 'Sign In' ? "Don't have an account?" : "Already have an account?"}
            </div>
              {this.props.otherForm}
          {this.demoUser()}
          </div>
        </form>
      </div>  
    );
  }
}

export default SessionForm;