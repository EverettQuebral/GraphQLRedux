import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
