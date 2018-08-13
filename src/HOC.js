import React, { Component, Fragment } from 'react'
import { Jumbotron } from 'reactstrap'
import EQLayout from './EQLayout'


const HOC = () => (
  <EQLayout>
    <Jumbotron>
      <h1 className='display-3'>High Order Component</h1>
      <h4>For maximizing Component Reuse, minimize code</h4>
      <p>An implementation of an Address Component that can support 200+ countries with a different services to call on validating the Address, giving an extra help of using Auto Detection, Auto Suggest and much more depending on the capability fro a particular country</p>
      <p>Work in Progress</p>
    </Jumbotron>
  </EQLayout>
)

export default HOC