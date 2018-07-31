import React, { Fragment } from 'react'

import { Jumbotron, Button, Container, Alert, FormGroup, Form, Label, Input } from 'reactstrap'

var HtmlToReactParser = require('html-to-react').Parser
var htmlToReactParser = new HtmlToReactParser()

function generateRandomId(){
  return '_' + Math.random().toString(36).substr(2, 9);
}

function rehydrateJSON(obj, key){
  if (obj.type === 'Primitive') return htmlToReactParser.parse(obj.content)
  var Type = Types[obj.type]
  var children = obj.children ? obj.children.map(rehydrateJSON) : obj.content
  var _componentId = obj.componentId == 0 ? generateRandomId() : obj.componentId
  return <Type key={_componentId} {...obj.props}>{children}</Type>
}

const Types = {
  Jumbotron: Jumbotron,
  Button: Button,
  Container: Container,
  Alert: Alert,
  Fragment: Fragment,
  Form: Form,
  Label: Label,
  Input: Input,
  FormGroup: FormGroup
}

export {
  Types,
  rehydrateJSON
}
