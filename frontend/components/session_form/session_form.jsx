import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>{this.props.formType}</h3>
          <br/>
          <label>
            Email:
            <input 
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
              />
          </label>
          <br/>
          <br/>
          <label>
            Password:
            <input 
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
              />
          </label>
          <br/>
          <input type="submit" value={this.props.formType}/>
        </form>
      </div>  
    )
  }
}

export default SessionForm;