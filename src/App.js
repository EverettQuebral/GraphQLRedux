import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
// import './App.css';
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import { connect } from 'react-redux'
import { ReduxCache } from 'apollo-cache-redux';
import { ThemeProvider } from '@zendeskgarden/react-theming'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { Button } from '@zendeskgarden/react-buttons'
import { TextField, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields'
import { Toggle, Label as LabelToggle } from '@zendeskgarden/react-toggles'

import { Jumbotron } from 'reactstrap'
import { InputGroup, InputGroupAddon, InputGroupText, InputStrap, ButtonStrap, Form } from 'reactstrap'

import AddChatter from './AddChatter'
import Chat from './Chat'

import '@zendeskgarden/react-grid/dist/styles.css'
import '@zendeskgarden/react-buttons/dist/styles.css'
import '@zendeskgarden/react-textfields/dist/styles.css'
import '@zendeskgarden/react-toggles/dist/styles.css'

const GET_USERS = gql `
  query {
    getUsers {
      id
      first_name
      last_name
    }
  }
`

const STAR_USER = gql `
  mutation ($id: String!) {
    starUser(id: $id){
      status_code
      message
      description
    }
  }
`

const App = () => (
  <Query query={GET_USERS}>
    {({loading, error, data}) => {
      if (error) return <div>Error</div>
      if (loading) return <div>Loading</div>
      return (
        <ThemeProvider>
          <Fragment>
            <Header />
            <Grid fluid>
              <Row gutters>
                <Col>
                  <Chatters chatters={data.getUsers} />
                </Col>
                <Col>
                  <AddChatter firstName='test' lastName='test' />
                </Col>
              </Row>
              <Row gutters>
                <Col>
                  <Chat />
                </Col>
              </Row>
            </Grid>          
          </Fragment>
        </ThemeProvider>
      )
    }}
  </Query>
)

const Header = () => (
  <header>
    <Jumbotron>
      <h1>GraphQL with Apollo + Redux Application</h1>
      <h3 className='lead'>This is a simple application to demonstrate Togetherness Level 2 for using Apollo Client and Redux</h3>
      <hr />
      <h4>Please be patient as this is hosted using a Free Web Dyno from Heroku.</h4>
      <h4><a href="https://everettquebral.com">by Everett Quebral</a></h4>
      <cite>The column on the left where a Selected/UnSelect component state is managed by ReduxCache.  Selecting/UnSelecting will send a dispatch to update the state while the Star Button on the right is techically sending an Apollo Client Mutation to the server increasing the Star of the Chatter.  This way the relationship of the Apollo Client and Redux Store are managed on the read/write situation.</cite>
    </Jumbotron>
  </header>
)

const ChattersList = ({ chatters, selectedChatterIds }) => (
  <Grid>
    { chatters.map( (chatter) => {
      const isSelected = selectedChatterIds.includes(chatter.id)
      const rowClassName = ['row']
      if (isSelected){
        rowClassName.push('row_selected')
      }
      return (
        <Row className={rowClassName.join(' ')} key={chatter.id} alignItems='center' style={{ minHeight: '4em', backgroundColor: 'lightgray', marginBottom: 8}}>
          <Col><SelectedContainer id={chatter.id} isSelected={isSelected} /></Col>
          <Col><Label><a href={chatter.id}>{chatter.first_name} {chatter.last_name}</a></Label></Col>
          <Col><Star id={chatter.id} /></Col>
        </Row>
      )
    })}
  </Grid>
)

const mapStateToProps = state => ({
  selectedChatterIds: state.chatterState.selectedChatterIds
})

const Chatters = connect(mapStateToProps)(ChattersList)

const Select = ({isSelected, toggleSelectedChatter}) => (
  <Toggle checked={isSelected} onClick={toggleSelectedChatter}>
    <LabelToggle>{isSelected ? 'UnSelect' : 'Selected'}</LabelToggle>
  </Toggle>
)

const mapDispatchToProps = ( dispatch, { id, isSelected } ) => ({
  toggleSelectedChatter: () =>
    dispatch({
      type: 'TOGGLE_SELECTED_CHATTER',
      id,
      isSelected
    })
})

const SelectedContainer = connect(null, mapDispatchToProps)(Select)

const Star = ({ id }) => (
  <Mutation mutation={STAR_USER} variables={{ id }} onCompleted={() => {
    console.log('completed')
  }}>
    {starUser => (
      <Button type='button' onClick={starUser}>
        Star
        {console.log('starred')}
      </Button>
    )}
  </Mutation>
)



export default App
