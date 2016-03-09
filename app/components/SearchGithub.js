import React from 'react';
import {Router, browserHistory, hashHistory} from 'react-router';

class SearchGithub extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  getRef (ref) {
    this.state.usernameRef = ref;
  }
  handleSubmit() {
    let username = this.state.usernameRef.value;
    this.state.usernameRef.value = '';
    hashHistory.push('/profile/' + username);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef.bind(this)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchGithub;
