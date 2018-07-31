import React, { Fragment } from 'react'

import { Jumbotron, Button, Container, Alert } from 'reactstrap'

var HtmlToReactParser = require('html-to-react').Parser
var htmlToReactParser = new HtmlToReactParser()

function rehydrateJSON(obj, key){
  if (obj.type === 'Primitive') return htmlToReactParser.parse(obj.content)
  var Type = Types[obj.type]
  var children = obj.children ? obj.children.map(rehydrateJSON) : obj.content
  return <Type key={key} {...obj.props}>{children}</Type>
}

const Types = {
  Jumbotron: Jumbotron,
  Button: Button,
  Container: Container,
  Alert: Alert,
  Fragment: Fragment
}

export {
  Types,
  rehydrateJSON
}
