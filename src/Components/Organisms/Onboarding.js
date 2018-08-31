import React from 'react'
import './Onboarding.css'

import { withHandlers, withState, withProps, compose } from 'recompose'
import { Input, Button } from '../Atoms'
import { Email, Password } from '../Molecules'

const Address1 = compose(
  withProps({
    'props': {
      'name': 'address1',
      'placeholder': 'Address Line 1',
      'title': 'Address Line 1',
      'required': true
    }
  })
)(Input)

const Address2 = compose(
  withProps({
    'props': {
      'name': 'address2',
      'placeholder': 'Address Line 2',
      'title': 'Address Line 2'
    }
  })
)(Input)

const City = compose(
  withProps({
    'props': {
      'name': 'city',
      'placeholder': 'City',
      'title': 'City',
      'required': true
    }
  })
)(Input)

const State = compose(
  withProps({
    'props': {
      'name': 'state',
      'placeholder': 'State',
      'title': 'State',
      'required': true
    }
  })
)(Input)

const Zip = compose(
  withProps({
    'props': {
      'name': 'zip',
      'placeholder': 'Zip',
      'title': 'Zip',
      'required': true
    }
  })
)(Input)

const Country = compose(
  withProps({
    'props': {
      'name': 'country',
      'placeholder': 'Country',
      'title': 'Country',
      'required': true,
      'render': () => ( <Button>test</Button> )
    }
  })

)(Input)

const SignUpButton = compose(
  withProps({
    'props' : {
      'name': 'signup',
      'title': 'Signup'
    }
  })
)(Button)

const Onboarding = compose()(
  ({ props, onSubmit }) => (
    <form className='onboarding' {...props}>
      <Address1 />
      <Address2 />
      <City />
      <State />
      <Zip />
      <Country />
      <SignUpButton>Sign Up</SignUpButton>
    </form>
  )
)

export default Onboarding
