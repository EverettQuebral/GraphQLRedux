import React, { Fragment } from 'react'
import './Button.css'

const _style = {
    color: 'darkblue',
    backgroundColor: 'lightgray'
}

const Button = ({ props, buttonState, onClick, children }) => (
    <button
      className='btn'
      {...props}
      onClick={onClick}
    >
      { buttonState === true ? props.text : children }
    </button>
)

export default Button
