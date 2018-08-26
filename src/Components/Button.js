import React from 'react'
import './Button.css'

const _style = {
    color: 'darkblue',
    backgroundColor: 'lightgray'
}

const Button = ({ style, children, name, props, buttonState, onClick }) => (
  <button
    className='button'
    style={ style || _style }
    name={name}
    onClick={onClick}
  >
    { buttonState === true ? props : children }
  </button>
)

export default Button
