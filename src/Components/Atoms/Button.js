import React from 'react'
import './Button.css'

const Button = ({ props, buttonState, onClick, children }) => (
  <button
    onClick={onClick}
    {...props}
  >
    { buttonState === true ? props.text : children }
  </button>
)

export default Button
