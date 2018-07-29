import React, { Component, Fragment } from 'react'
import { Container } from 'reactstrap'
import EQNav from './EQNav'
import EQFooter from './EQFooter'

import { ThemeProvider } from '@zendeskgarden/react-theming'

class EQLayout extends Component {
  render(){
    return (
      <ThemeProvider>
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
      </ThemeProvider>
    )
  }
}

export default EQLayout