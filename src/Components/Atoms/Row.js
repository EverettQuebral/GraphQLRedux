import React from 'react'

const Row = ({ props, children }) => (
  <div className='row' {...props}>
    { children }
  </div>
)

export default Row