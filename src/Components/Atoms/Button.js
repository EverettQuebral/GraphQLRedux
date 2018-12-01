import React from 'react'
import './Button.css'
import { withHandlers, withState, withProps, compose } from 'recompose'


const Button = ({ props, buttonState, onClick, children }) => (
  <button
    onClick={onClick}
    {...props}
  >
    { buttonState ? props.text : children }
  </button>
)

const ButtonClickHandler = withHandlers({
  onClick: ({ clickHandler }) => (event) => {
    console.log('Button Clicked', event.target)
    clickHandler(buttonState => !buttonState)
  }
})

const ButtonProps = withProps({
  'props':{
    'name': 'Testing',
    'text': 'Button With State',
    'className': 'button button-animated'
  }
})

const ButtonState = withState('buttonState', 'clickHandler', true)
const ButtonWithPropsStateHandler = compose(ButtonState, ButtonClickHandler, withProps)(Button)
const ButtonWithStateHandler = compose(ButtonState, ButtonClickHandler)(Button)

export {
  ButtonWithPropsStateHandler,
  ButtonWithStateHandler,
  Button
} 