/* eslint-disable import/first */

import React, { Fragment, Suspense, lazy  } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const StarChatterLoadable = lazy(() => import('./StarChatter'));

const ChatAppLoadable = lazy(() => import('./ChatApp'));

const MainLoadable = lazy(() => import('./Main'));

const ReactiveUILoadable = lazy(() => import('./ReactiveUI'));

const RenderPropsLoadable = lazy(() => import('./RenderProps'));

const AdvancedUILoadable = lazy(() => import('./AdvancedUI'));

const HOCLoadable = lazy(() => import('./HOC'));

// import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path='/' component={MainLoadable} />
          <Route exact path='/chat' component={ChatAppLoadable} />
          <Route exact path='/star' component={StarChatterLoadable} />
          <Route exact path='/reactiveui' component={ReactiveUILoadable} />
          <Route exact path='/renderprops' component={RenderPropsLoadable} />
          <Route exact path='/hoc' component={HOCLoadable} />
          {/* <Route exact path='/advancedui' component={AdvancedUILoadable} /> */}
          <Route exact path='/advancedui' render={ (routeProps) => ( <AdvancedUILoadable {...routeProps} />)} />
        </Suspense>
      </Switch>
    </Fragment>
  </Router>
)

export default App
