import React from 'react'
import { withProps, withState, withHandlers, compose } from 'recompose'

import { Input } from '../Atoms'
import { validateOperation } from 'apollo-link/lib/linkUtils';

const Password = compose(
  withProps({
      'props': {
        'name': 'password',
        'title': 'Password',
        'placeholder': 'Password',
        'type': 'password'
    }}
  ),
  // withState('validPassword', 'onBlur', true),
  // withHandlers({
  //   onBlur: ({ onBlur }) => (event) => {
  //     console.log('OnBlur Occured')
  //     // let's do some work here
  //     onBlur(validPassword => true)
  //   }
  // })
)(Input)

export default Password