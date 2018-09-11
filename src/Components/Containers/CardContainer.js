import React from 'react'

const CardContainer = ({ props, children, onShare, share='' }) => (
  <section className='card-container'>
    <div>{share}</div>
    {children}
  </section>
)

export default CardContainer 