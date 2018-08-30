import React from 'react'
import { withProps, withHandlers, withState, compose } from 'recompose' 

import { Input } from '../Atoms'


const Email = compose(
  withProps({ props: {
    'name': 'email',
    'placeholder': 'you@email.com',
    'title': 'Email Address',
    'placeholder': 'Email Address'
  }}),
  // withState('email', 'onBlur', ''),
  // withHandlers({
  //   onBlur: ({ onBlur }) => (event) => {
  //     // console.log('OnBlur occured ', event.target.value)
  //     const value = event.target.value
  //     onBlur(email => value)
  //   }
  // }),
  // withState('validFormat', 'onChange', true),
  // withHandlers({
  //   onChange: ({ onChange }) => (event)=> {
  //     console.log('OnChange occured')
  //     onChange(validFormat => true)
  //   }
  // })
)(Input)

export default Email