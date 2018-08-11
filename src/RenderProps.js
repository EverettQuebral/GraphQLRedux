import React, { Component, Fragment } from 'react'
import { Jumbotron } from 'reactstrap'
import EQLayout from './EQLayout'
import Phone from './Phone'

class RenderProps extends Component {
  render() {
    return (
      <EQLayout>
        <Jumbotron>
          <h1 className='display-3'>An example of Render Props Pattern for component Re-Usability</h1>
          <p>Work in progress here</p>
        </Jumbotron>
        <div>
          US Phone here
          <Phone text='Enter your phone number'
            label='Enter your phone number'
            pattern='^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$'
            dir='ltr'
            errorMessage='Please enter a valid phone'
            patternValid='Valid Phone'
            render={({ displayElement }) => (
           <div>{displayElement()}</div>
          )}>
    </Phone>
        </div>
        <div>
          Israel Phone Here
          <Phone text='הטלפון'
            label='הטלפון'
            pattern='/^0\d([\d]{0,1})([-]{0,1})\d{7}$/'
            dir='rtl'
            errorMessage='הזן טלפון חוקי'
            patternValid='טלפון תקף'
            render={({ displayElement }) => (
              <div>{displayElement()}</div>
          )}>
    </Phone>
        </div>
      </EQLayout>
    )
  }
}

export default RenderProps
