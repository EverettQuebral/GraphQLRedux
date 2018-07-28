import React, { Component, Fragment } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import StarChatter from './StarChatter';
import ChatApp from './ChatApp'
import Main from './Main'
// import logo from './logo.svg';
// import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/chat' component={ChatApp} />
        <Route exact path='/star' component={StarChatter} />
      </Switch>
    </Fragment>
  </Router>
)

export default App
