import React from 'react'
import './Onboarding.css'

import { withHandlers, withState, withProps, compose } from 'recompose'

import { Email, Password } from '../Molecules'

const Onboarding = ({ props }) => (
  <form className='onboarding' {...props}>
    <Email />
    <Password />
  </form>
)

export default Onboarding