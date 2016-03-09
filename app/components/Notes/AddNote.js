import React from 'react';

class AddNote extends React.Component {
  constructor () {
    super();
    this.state = {
      note: ''
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.setRef = this.setRef.bind(this)
  }
  setRef (ref) {
    this.state.note = ref;
  }
  handleSubmit () {
    let newNote = this.state.note.value;
    this.state.note.value = '';
    this.props.addNote(newNote);
  }
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new note"
          ref={this.setRef.bind(this)} />

        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.handleSubmit.bind(this)}>Submit</button>
        </span>

      </div>
    );
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default AddNote;
