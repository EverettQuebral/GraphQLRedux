import React, { Component, Fragment } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import EQLayout from './EQLayout'
import Address from './Address'

import { compose, withState, withHandlers, withProps } from 'recompose'
import Button from './Components/Button'

const debug = withProps(console.log)
const ButtonEnhanced = compose(
  withState('buttonState', 'clickHandler', true),
  withHandlers({
    onClick: ({clickHandler}) => (event) => {
      console.log('Button clicked', event.target)
      clickHandler(buttonState => !buttonState)
    }
  }),
  withProps({ 'name' : 'Testing', 
    'style': { 'color': 'white', 'backgroundColor': 'blue'} 
  }),
  debug,
  // withHandlers({
  //   onClick: ({clickHandler}) => () => clickHandler(buttonState => !buttonState)
  // })
)(Button)


const HOC = () => (
  <EQLayout>
    <Jumbotron>
      <h1 className='display-3'>High Order Component</h1>
      <h4>For maximizing Component Reuse, minimize code</h4>
      <p>An implementation of an Address Component that can support 200+ countries with a different services to call on validating the Address, giving an extra help of using Auto Detection, Auto Suggest and much more depending on the capability fro a particular country</p>
      <p>Work in Progress</p>
      <Button variant="contained" color="primary">
        Base Button Here
      </Button>
    </Jumbotron>
    <Container>
      <Address name='us-address' submit='Submit Address' />
      <ButtonEnhanced>HOC Button withState</ButtonEnhanced>
    </Container>
  </EQLayout>
)

export default HOC
