import React from 'react';

export const GENRE_LIST = [
  { id: 1, name: 'Americana' },
  { id: 2, name: 'Bluegrass' },
  { id: 3, name: 'Classical' },
  { id: 4, name: 'Country' },
  { id: 5, name: 'Folk' },
  { id: 6, name: 'Indie' },
  { id: 7, name: 'Instrumental' },
  { id: 8, name: 'Pop' },
  { id: 9, name: 'Roots' },
  { id: 10, name: 'Singer-Songwriter' },
  { id: 11, name: 'Other' }
]

class TrackForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre_id: 10,
      description: "",
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  handleInput(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('track[title]', this.state.title);
    formData.append('track[photo]', this.state.photoFile);
    $.ajax({
      method: 'POST',
      url: '/api/tracks',
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => console.log(response.responseJSON)
    )
    // .then(data => this.props.history.push(`/tracks/${data.track.id}`));
  }

  handlePhoto(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }
  handleAudio(e) {
    this.setState({audioFile: e.currentTarget.files[0]});
  }

  render() {
    console.log(this.state)
    return(
      <div className="upload-form-container">
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <h1 className="upload-header">Song info</h1>
          <label>Upload Image
            <input 
              type="file"
              onChange={this.handlePhoto}
              />
          </label>
          <label>Upload Track
            <input 
              type="file"
              onChange={this.handleAudio}
              />
          </label>
          <label className="upload-label">Title*
            <input 
              type="text" 
              value={this.state.title} 
              placeholder="Name your track"
              onChange={this.handleInput('title')}
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
                    return <option 
                      className="genre-dropdown-item" 
                      value={genre.id} 
                      key={genre.name}
                      onChange={this.handleInput('genre')}>
                        {genre.name}
                      </option>
                  })
                }
              </select>
          {/* </div> */}

          </label>
          <label className="upload-label">Description
            <textarea 
              value={this.state.description} 
              onChange={this.handleInput('description')}
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