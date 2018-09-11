import React from 'react'
import { compose, withState, withHandlers } from 'recompose'

const CardContainer = ({ props, children, onShare, share='' }) => (
  <section className='card-container'>
    <div>{share}</div>
    {children}
  </section>
)

export default CardContainer 