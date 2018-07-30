import React from 'react'

import { Jumbotron, Button, Container, Alert } from 'reactstrap'

function rehydrateJSON(obj, key){
  var Type = Types[obj.type]
  var children = obj.children ? obj.children.map(rehydrateJSON) : obj.attributes.text
  return <Type key={key} {...obj.props}>{children}</Type>
}

const Types = {
  Jumbotron: Jumbotron,
  Button: Button,
  Container: Container,
  Alert: Alert
}

export {
  Types,
  rehydrateJSON
}
