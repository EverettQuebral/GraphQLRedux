import React, { Component, Fragment } from 'react'
import { Types, rehydrateJSON } from './Types'
import EQLayout from './EQLayout'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ReactLoading from 'react-loading'

const GET_CONFIG = gql `
query {
  getConfig{
    type
		componentId
    content
    props {
      className
      id
      src
    }
    children {
      type
    	content
      componentId
      props {
        className
        color
      }
      children {
        type
      	content
        componentId
        props {
          className
          color
        }
        children {
          type
          content
          componentId
        }
      }
    }
  }
}
`


class ReactiveUI extends Component {
  render(){
    return(
      <EQLayout>
        <Query query={GET_CONFIG}>
          {({data, error, loading}) => {
            if (error) return <div>Error</div>
            if (loading) return <ReactLoading type='spokes' height='60%' width='60%' color='#ddd' />
            return (
              <Fragment>
                {rehydrateJSON(data.getConfig)}
              </Fragment>
            )
          }}
        </Query>
      </EQLayout>
    )   
  }
}

export default ReactiveUI
