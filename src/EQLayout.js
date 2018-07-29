import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap'
import EQNav from './EQNav'
import EQFooter from './EQFooter'

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
        <Fragment>
          <hr />
          <EQFooter />
        </Fragment>
      </div>
    )
  }
}

export default EQLayout