import React, { Component, Fragment } from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import EQLayout from './EQLayout'
import Phone from './Phone'

class RenderProps extends Component {
  render() {
    return (
      <EQLayout>
        <Jumbotron>
          <h1 className='display-3'>An example of Render Props Pattern for component Re-Usability</h1>
          <p>An implementation of a Phone Component that can support 200+ countries with the US Phone, Israel Phone, France and a very loose phone number without any validation</p>
        </Jumbotron>
        <Container>
          <h3>US Phone here</h3>
          <Phone text='Enter your phone number'
            label='Enter your phone number'
            pattern='^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$'
            dir='ltr'
            placeholder='999-999-9999'
            errorMessage='Please enter a valid phone'
            patternValid='Valid Phone'
            render={({ displayElement }) => (
              <div>{displayElement()}</div>
          )}>
          </Phone>
        </Container>
        <Container>
          <h3>Israel Phone Here</h3>
          <Phone text='הטלפון'
            label='הטלפון'
            pattern='/^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/'
            dir='rtl'
            errorMessage='הזן טלפון חוקי'
            patternValid='טלפון תקף'
            placeholder='0779999999'
            render={({ displayElement }) => (
              <div>{displayElement()}</div>
          )}>
          </Phone>
        </Container>
        <Container>
          <h3>France Phone Here</h3>
          <Phone text='Entrez votre numéro de téléphone'
            label='Entrez votre numéro de téléphone'
            pattern='^((\+)33|0|0033)[1-9](\d{2}){4}$'
            dir='ltr'
            errorMessage="S'il vous plaît entrer un téléphone valide"
            patternValid='Téléphone valide'
            placeholder='+33999999999'
            render={({ displayElement }) => (
              <div>{displayElement()}</div>
          )}>
          </Phone>
        </Container>
        <Container>
          <h3>Very Loosy Phone Entry Here</h3>
          <Phone
            render={({ displayElement }) => (
              <Row>
                <Col>
                  <label for='phone-number'>Phone Number</label>
                </Col>
                <Col>
                  <input name='phone-number' type='text' />
                </Col>
              </Row>
          )}>
          </Phone>
        </Container>
      </EQLayout>
    )
  }
}

export default RenderProps
