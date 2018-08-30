import React from 'react'
import './Row.css'

const Row = ({ props, children }) => (
  <div className='row' {...props}>
    { children }
  </div>
)

export default Row