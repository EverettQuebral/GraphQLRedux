/* eslint-disable import/first */

import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const StarChatterLoadable = Loadable({
  loader: () => import('./StarChatter'),
  loading: () => <Loading />
})

const ChatAppLoadable = Loadable({
  loader: () => import('./ChatApp'),
  loading: () => <Loading />
})

const MainLoadable = Loadable({
  loader: () => import('./Main'),
  loading: () => <Loading />
})

const ReactiveUILoadable = Loadable({
  loader: () => import('./ReactiveUI'),
  loading: () => <Loading />
})

const RenderPropsLoadable = Loadable({
  loader: () => import('./RenderProps'),
  loading: () => <Loading />
})

const AdvancedUILoadable = Loadable({
  loader: () => import('./AdvancedUI'),
  loading: () => <Loading />
})

const HOCLoadable = Loadable({
  loader: () => import('./HOC'),
  loading: () => <Loading />
})

// import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path='/' component={MainLoadable} />
        <Route exact path='/chat' component={ChatAppLoadable} />
        <Route exact path='/star' component={StarChatterLoadable} />
        <Route exact path='/reactiveui' component={ReactiveUILoadable} />
        <Route exact path='/renderprops' component={RenderPropsLoadable} />
        <Route exact path='/hoc' component={HOCLoadable} />
        {/* <Route exact path='/advancedui' component={AdvancedUILoadable} /> */}
        <Route exact path='/advancedui' render={ (routeProps) => ( <AdvancedUILoadable {...routeProps} />)} />
      </Switch>
    </Fragment>
  </Router>
)

export default App
