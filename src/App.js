import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import { connect } from 'react-redux'
import { ThemeProvider } from '@zendeskgarden/react-theming'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import { Button } from '@zendeskgarden/react-buttons'
import { TextField, Label, Hint, Input, Message } from '@zendeskgarden/react-textfields'
import { Toggle, Label as LabelToggle } from '@zendeskgarden/react-toggles'

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

const ADD_CHATTER = gql `
  mutation ($firstName:String, $lastName:String){
    addChatter(first_name:$firstName, last_name:$lastName){
      message
      status_code
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
            <Chatters chatters={data.getUsers} />
            <AddChatter firstName='test' lastName='test' />
          </Fragment>
        </ThemeProvider>
      )
    }}
  </Query>
)

const Header = () => (
  <header>
    <h1>GraphQL with Apollo + Redux Application</h1>
    <h3>This is a simple application to demonstrate Togetherness Level 2 for using Apollo Client and Redux</h3>
    <h5>Please be patient as this is hosted using a Free Web Dyno from Heroku.</h5>
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
        <Row className={rowClassName.join(' ')} key={chatter.id}>
          <Col><SelectedContainer id={chatter.id} isSelected={isSelected} /></Col>
          <Col><a href={chatter.id}>{chatter.first_name} {chatter.last_name}</a></Col>
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

class AddChatter extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName : "",
      lastName : ""
    }
  }

  render(){
    return (
      <Mutation mutation={ADD_CHATTER} variables={{ firstName: this.state.firstName, lastName: this.state.lastName }} onCompleted={()=>{
        console.log('Added Chatter')
      }}>
        {addChatter => (
          <form onSubmit={addChatter}>
            <TextField>
              <Label>Enter your First Name</Label>
              <Input onChange={ e => this.setState({ firstName: e.target.value })}/>
              <Message>Your First Name that will be used for the Chat</Message>
            </TextField>
            <TextField>
              <Label>Enter your Last Name</Label>
              <Input onChange={ e => this.setState({ lastName: e.target.value })}/>
              <Message>Your Last Name that will be used for the Chat</Message>
            </TextField>
            <input type='submit' name='Submit'/>
          </form>
        )}
      </Mutation>
    )
  }
}

export default App