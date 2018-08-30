import React from 'react'
import './Column.css'

const Column = ({ props, children }) => (
  <div className='column' {...props}>
    { children }
  </div>
)

export default Column