import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components';
import EQNav from './EQNav'

const Main = () => (
  <Fragment>
    <EQNav />
    <div> Hello Welcome to this page</div>
  </Fragment>
)

export default Main