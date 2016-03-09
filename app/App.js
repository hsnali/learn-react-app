import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, browserHistory} from 'react-router';
import routes from './config/routes.js';

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
