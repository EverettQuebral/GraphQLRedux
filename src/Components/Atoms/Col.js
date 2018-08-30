import React from 'react'


const Col = ({ props, children }) => (
  <div className='column' {...props}>
    { children }
  </div>
)

export default Col