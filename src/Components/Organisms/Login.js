import React from 'react'
import { withProps, withState, withHandlers, withStateHandlers, compose } from 'recompose'

import { Button } from '../Atoms'
import { Email, Password } from '../Molecules'

import './Login.css'

const LoginButton = compose(
  withProps({ 'props': {
    'name': 'login',
    'title': 'Login',
    'className': 'button button-animated'
  }})
)(Button)


const Login = compose(
  withStateHandlers( ({ email = '', password = '' }) => ({
    email: email,
    password: password
  }),{
    onSubmit: ({ email, password }) => (_email, _password) => ({
      email: _email,
      password: _password
    })
  })
)(
  ({ props, email, password , onSubmit }) => (
    <form className='login' {...props}>
      <Email onBlur={ e => email = e.target.value }/>
      <Password onBlur={ e => password = e.target.value }/>
      <LoginButton onClick={ e => {
        e.preventDefault()
        onSubmit(email, password)
        }}>Login</LoginButton>
    </form>
  )
)

export default Login
