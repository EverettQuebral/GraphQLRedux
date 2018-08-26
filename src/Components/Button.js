import React from 'react'

const _style = {
    color: 'blue',
    backgroundColor: 'red'
}

const Button = ({ style, children, name, buttonState, onClick }) => (
  <button
    style={ style || _style }
    name={name}
    onClick={onClick}
  >
    { buttonState === 'true' ? children : 'Click Again' }
  </button>
)

export default Button
