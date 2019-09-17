import React from 'react';

export const GENRE_LIST = [
  { id: 1, name: 'Americana' },
  { id: 2, name: 'Bluegrass' },
  { id: 3, name: 'Classical' },
  { id: 4, name: 'Country' },
  { id: 5, name: 'Folk' },
  { id: 7, name: 'Indie' },
  { id: 8, name: 'Pop' },
  { id: 9, name: 'Roots' },
  { id: 6, name: 'Singer-Songwriter' },
  { id: 10, name: 'Other' }
]

class TrackForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
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
              <select 
                className="genre-dropdown"
                defaultValue="Select Genre"
                >
                {
                  GENRE_LIST.map((genre) => {
                    return <option className="genre-dropdown-item" value={genre.name} key={genre.id}>{genre.name}</option>
                  })
                }
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