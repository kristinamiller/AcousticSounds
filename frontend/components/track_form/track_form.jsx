import React from "react";

export const GENRE_LIST = [
  { id: 1, name: "Americana" },
  { id: 2, name: "Bluegrass" },
  { id: 3, name: "Classical" },
  { id: 4, name: "Country" },
  { id: 5, name: "Folk" },
  { id: 6, name: "Indie" },
  { id: 7, name: "Instrumental" },
  { id: 8, name: "Pop" },
  { id: 9, name: "Roots" },
  { id: 10, name: "Singer-Songwriter" },
  { id: 11, name: "Other" }
];

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre_id: 10,
      description: "",
      artist_id: this.props.currentUser.id,
      photoFile: null,
      audioFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[genre_id]", this.state.genre_id);
    formData.append("track[artist_id]", this.state.artist_id);
    formData.append("track[description]", this.state.description);
    if (this.state.photoFile) {
      formData.append("track[photo]", this.state.photoFile);
    }
    if (this.state.audioFile) {
      formData.append("track[audio]", this.state.audioFile);
    }

    this.props
      .action(formData)
      .then(data =>
        this.props.history.push(`/${this.props.currentUser.id}/tracks`)
      );
  }

  handlePhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
  // take the first photo tha twas uploaded in the form and put it into state once it's loaded.

  handleAudio(e) {
    this.setState({ audioFile: e.currentTarget.files[0] });
  }

  handleCancel(e) {
    this.props.history.push(`/${this.props.currentUser.id}/tracks`);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const preview = this.state.photoUrl ? (
      <img src={this.state.photoUrl} className="upload-image-preview"></img>
    ) : null;
    return (
      <div className="upload-form-container">
        <form className="upload-form" onSubmit={this.handleSubmit}>
          <h1 className="upload-header">Song info</h1>
          <h3 className="upload-errors">{this.renderErrors()}</h3>
          <div className="upload-left-inputs-right">
            <div className="upload-files">
              <label className="upload-label">
                Upload Photo
                <input type="file" onChange={this.handlePhoto} />
              </label>
              <div className="image-preview-div">
                <h3></h3>
                {preview}
              </div>

              <label className="upload-label">
                Upload Track
                <input type="file" onChange={this.handleAudio} />
              </label>
            </div>
            <div className="form-input-fields">
              <div className="upload-label"></div>
              <label className="upload-label">
                Title*
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="Name your track"
                  onChange={this.handleInput("title")}
                  className="upload-input"
                />
              </label>
              <div className="upload-label">
                <label className="upload-label">
                  Genre
                  <select
                    className="genre-dropdown"
                    defaultValue="Select Genre"
                  >
                    {GENRE_LIST.map(genre => {
                      return (
                        <option
                          className="genre-dropdown-item"
                          value={genre.id}
                          key={genre.name}
                          onChange={this.handleInput("genre")}
                        >
                          {genre.name}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
              <div className="upload-label">
                <label>
                  Description
                  <textarea
                    value={this.state.description}
                    onChange={this.handleInput("description")}
                    placeholder="Describe your track"
                    className="upload-input"
                  />
                </label>
              </div>

              <div className="upload-buttons">
                <button onClick={this.handleCancel} className="upload-cancel">
                  Cancel
                </button>
                <input type="submit" value="Save" className="upload-submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TrackForm;
