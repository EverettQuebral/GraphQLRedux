import React from 'react'
import './Button.css'

const Button = ({ props, buttonState, onClick, children }) => (
    <button className='button'
      {...props}
      onClick={onClick}
    >
      { buttonState === true ? props.text : children }
    </button>
)

export default Button
