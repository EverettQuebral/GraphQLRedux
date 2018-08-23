import React from 'react'

const _style = {
    color: 'blue',
    backgroundColor: 'red'
}

const Button = ({ props, state, onClick }) => (
  <button
    style={props.style || _style}
    name={props.name}
    onClick={onClick}
  >
    { console.log({ state }) }
    { props.children && props.children }
  </button>
)

export default Button