import React from 'react';
import Main from './../components/Main.js'
import Home from './../components/Home.js';
import Profile from './../components/Profile.js';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'

module.exports = (
  <Route path="/" component={Main}>
    <Router path="profile/:username" component={Profile} />
    <IndexRoute component={Home}/>
  </Route>
);
