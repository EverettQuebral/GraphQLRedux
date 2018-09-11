import React from 'react'
import Card from './Card'
import { withState, withHandlers, compose } from 'recompose'

import './CardExpandable.css'

const CardExpandable = compose(
  withState('collapsed', 'clickHandler', true),
  withHandlers({
    onClick: ({clickHandler}) => (event) => {
      clickHandler(collapsed => !collapsed)
    }
  })
)(Card)

export default CardExpandable

