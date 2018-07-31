import React, { Component, Fragment } from 'react'
import { Types, rehydrateJSON } from './Types'
import EQLayout from './EQLayout'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_CONFIG = gql `
query {
  getConfig{
    type
    content
    props {
      className
      id
      src
    }
    children {
      type
    	content
      props {
        className
        color
      }
      children {
        type
      	content
        props {
          className
          color
        }
      }
    }
  }
}
`

class ReactiveUI extends Component {
  render(){
    return(
      <Query query={GET_CONFIG}>
        {({data, error, loading}) => {
          if (error) return <div>Error</div>
          if (loading) return <div>Loading</div>
          return (
            <EQLayout>
              {rehydrateJSON(data.getConfig)}
            </EQLayout>
          )
        }}
      </Query>
    )   
  }
}

export default ReactiveUI
