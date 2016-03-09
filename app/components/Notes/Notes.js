import React from 'react';
import List from './List.js';
import AddNote from './AddNote.js';

class Notes extends React.Component {
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <List notes={this.props.notes} />
      </div>
    );
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default Notes;