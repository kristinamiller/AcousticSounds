import React from 'react';

class CommentForm extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      track_id: this.props.track.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    
  }

  handleInput(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('track[title]', this.state.title);
    
    this.props.action(formData).then(data => this.props.history.push(`/${this.props.currentUser.id}/tracks`));
  }

  
  renderErrors() {
    return (
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
      <div className="comment-form-container">
        <form className="comment-form" onSubmit={this.handleSubmit}>
          
          <h3 className="comment-errors">{this.renderErrors()}</h3>
          
          <div className="form-input-fields">

            <div className="comment-label">
              <label>Comment:
              <textarea
                value={this.state.body}
                onChange={this.handleInput('body')}
                placeholder="Write a comment"
                className="comment-input"
              />
            </label>
            </div>
           </div>
          
          
          <div className="comment-buttons">

            <input
              type="submit"
              value="Save"
              className="comment-submit"
            /> 
          </div>

        </form>
      </div>
    )
  }

}

export default CommentForm;