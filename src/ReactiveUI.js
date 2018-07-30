import React, { Component, Fragment } from 'react'
import { Types, rehydrateJSON } from './Types'
import EQLayout from './EQLayout'


class ReactiveUI extends Component {
  constructor(props){
    super(props)
  }

  render(){
    var child = {
      "type": "Container",
      "children" : [
        {
          "type": "Jumbotron",
          "children": [
            {
              "type": "Alert",
              "props": {
                "color": "primary"
              },
              "attributes":{
                "text": "Alert in RED"
              }
            },
            {
              "type": "Alert",
              "props": {
                "color": "secondary"
              },
              "attributes":{
                "text": "Alert in Gray"
              }
            },
            {
              "type": "Alert",
              "props": {
                "color": "success"
              },
              "attributes":{
                "text": "Alert in Green"
              }
            },
            {
              "type": "Button",
              "attributes":{
                "text": "All you are seeing here are dynamically generated from a JSON Config file"
              }
            }
         ]
        }
      ]
    }
    return (
      <EQLayout>
         {rehydrateJSON(child)}
      </EQLayout>
    )
  }
}

export default ReactiveUI
