import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap'
import EQNav from './EQNav'

class EQLayout extends Component {
  render(){
    return (
      <div>
        <Fragment>
          <EQNav />
          <br />
        </Fragment>
        <Container>
         {this.props.children}
        </Container>   
      </div>
    )
  }
}

export default EQLayout