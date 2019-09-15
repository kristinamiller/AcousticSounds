import React from 'react';

class TrackForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return(
      <div className="upload-form-container">
        
        <form className="upload-form" onClick={this.handleSubmit}>
          <h1 className="upload-header">Song info</h1>
          <label className="upload-label">Title*
            <input 
              type="text" 
              value="" 
              placeholder="Name your track"
              onClick=""
              className="upload-input"
              />
          </label>
          <label className="upload-label">Genre
          {/* <div> */}
              <select className="genre-dropdown">
                <option value="country">Country</option>
                <option value="folk">Folk</option>
                <option value="bluegrass">Bluegrass</option>
                <option value="americana">Americana</option>
                <option value="indie">Indie</option>
              </select>
          {/* </div> */}

          </label>
          <label className="upload-label">Description
            <textarea 
              value=""
              onClick=""
              placeholder="Describe your track"
              className="upload-input"
            />
          </label>
          <div className="upload-buttons">
            <button className="upload-cancel">Cancel</button>
            <input
              type="submit"
              value="Save"
              className="upload-submit"
            /> 
          </div>

        </form>
      </div>
    )
  }

}

export default TrackForm;