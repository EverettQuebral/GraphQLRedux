import React from 'react'
import Card from './Card'
import { withState, withHandlers, compose } from 'recompose'

import './CardExpandable.css'

const CardExpandable = compose(
  withState('collapsed', 'clickHandler', true),
  withHandlers({
    onClick: ({clickHandler}) => (event) => {
      console.log(event.target)
      if (event.target.classList.contains('main-image')){
        clickHandler(collapsed => !collapsed)
      }
    }
  })
)(Card)

export default CardExpandable

