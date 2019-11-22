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
    this.props.createComment(this.state);
    this.setState({body: ""});
  }


  render() {


    return(
      <div className="comment-form-container">
        <div>
          <img src={this.props.currentUser.imageURL} className="comment-user-image" />
        </div>
        <div className="comment-form-div">
          <form className="comment-form" onSubmit={this.handleSubmit}>
            
            {/* <h3 className="comment-errors">{this.renderErrors()}</h3> */}

            {/* <div > */}

              {/* <div className="comment-label"> */}
              
              <textarea
                    value={this.state.body}
                    onChange={this.handleInput('body')}
                    placeholder="Write a comment"
                    className="comment-input"
                  />
              {/* </div> */}
            {/* </div> */}
            <div className="comment-buttons">

              <input
                type="submit"
                value="Save"
                className="comment-submit"
              />
            </div>
            
          </form>
        </div>
        
      </div>
    )
  }

}

export default CommentForm;