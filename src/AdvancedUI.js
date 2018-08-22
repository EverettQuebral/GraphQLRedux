import React, { Component, Fragment } from 'react'
import { Jumbotron } from 'reactstrap'
import EQLayout from './EQLayout'

import {
  EQForm,
  EQFormGroup,
  EQInput
} from './EQComponents'

class AdvancedUI extends Component {
  render() {
    return (
      <EQLayout>
        <Jumbotron>
          <h1 className='display-3'>An Advanced Reactive UI Example</h1>
          <p>The idea is to show an elegant solution to re-use React Components to maximix cohesive experience and minimize code</p>
          <p>An Address Component is a very good example as it changes the requirement depending on the Country on where the address is being collected, also provides a way to remove friction and offer a good validation for the collection address information</p>
          <p>The technical approach to solve is by using Higher Order Function/Components and Render Props technique</p>
          <p style={{'color': 'red'}}>[Work in Progress]</p>
        </Jumbotron>
        <EQInput props={{placeholder:'Test the floating label'}}/>
      </EQLayout>
    )
  }
}

export default AdvancedUI
