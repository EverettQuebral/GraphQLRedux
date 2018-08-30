import React, { Fragment } from 'react'
import './Input.css'

const Input = ({ props, valid, onChange, onBlur }) => (
  <div className='floating-label'>
    { console.log( ...props) }
    <input 
      className='input-box'
      {...props}
      onBlur={onBlur}
      onChange={onChange}
    />
    <label 
      className='input-label' 
      htmlFor={props.name}>{props.title}</label>
  </div>
)

export default Input