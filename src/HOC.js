import React, { Component, Fragment } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import EQLayout from './EQLayout'


import { compose, withState, withHandlers, withProps, withStateHandlers } from 'recompose'
import { Button, Form, Row, Col, Grid, Column } from './Components/Atoms'
import { Address } from './Components/Molecules'
import { Login, Onboarding } from './Components/Organisms'

// const debug = withProps(console.log)
const ButtonEnhancedOne = compose(
  withState('buttonState', 'clickHandler', true),
  withHandlers({
    onClick: ({clickHandler}) => (event) => {
      console.log('Button clicked', event.target)
      clickHandler(buttonState => !buttonState)
    }
  }),
  withProps({ 'props': {
    'name' : 'Testing',
    'text': 'Button with State'
  }}),
  // debug,
  // withHandlers({
  //   onClick: ({clickHandler}) => () => clickHandler(buttonState => !buttonState)
  // })
)(Button)

const ButtonEnhancedTwo = compose(
  withStateHandlers( ({ initialCounter = 0 }) => ({
    counter: initialCounter
  }),
  {
    incrementOn: ({counter}) => (value) => ({
      counter: counter + value
    }),
    decrementOn: ({counter}) => (value) => ({
      counter: counter  - value
    }),
    resetCounter: (_, { initialCounter = 0 }) => (value) => ({
      counter : initialCounter
    })
  }
)
)(({ counter, incrementOn, decrementOn, resetCounter }) => (
  <Fragment>
    <div>{counter}</div>
    <button onClick={() => incrementOn(2)}>Inc + 2</button>
    <button onClick={() => decrementOn(1)}>Dec - 1</button>
    <button onClick={resetCounter}>Reset</button>
  </Fragment>
))

const SectionContainer = ({ className, children }) => (
  <section className={className}>
    { children }
  </section>
)
const HOC = () => (
  <EQLayout>
    <Jumbotron>
      <h1 className='display-3'>High Order Component</h1>
      <h4>For maximizing Component Reuse, minimize code</h4>
      <p>An implementation of an Address Component that can support 200+ countries with a different services to call on validating the Address, giving an extra help of using Auto Detection, Auto Suggest and much more depending on the capability fro a particular country</p>
      <p>Work in Progress</p>
    </Jumbotron>
    <Container>
      <hr />
      <h5>Components via Composition</h5>
      <Row test='test'>
        <Column>
          <h5>Onboarding Flow</h5>
          <Onboarding />
        </Column>
        <Column>
          <h5>Login Flow</h5>
          <Login />
        </Column>
      </Row>
      <hr />
      <SectionContainer className='container color-one'>
        <h5>Base Button</h5>
        <p>A button that doesn't have anything state or handlers or properties</p>
        <Button>Button</Button> 
      </SectionContainer>
      <hr />
      <SectionContainer className='container color-two'>
        <h5>Enhanced Button</h5>
        <p>Button using the Base Button withProps, withState, withHandler</p>
        <ButtonEnhancedOne>HOC Button with State</ButtonEnhancedOne>
      </SectionContainer>
      <hr />
      <SectionContainer className='container color-three'>
        <h5>Button Group with State and Handlers</h5>
        <p>Buttons that updates the state via handlers</p>
        <ButtonEnhancedTwo />
      </SectionContainer>
      <hr />
      <SectionContainer className='container color-four'>
        <h5>Conventional React Component</h5>
        <Address name='us-address' submit='Submit Address' />
      </SectionContainer>
      

    </Container>
  </EQLayout>
)

export default HOC
