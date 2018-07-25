import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import { connect } from 'react-redux'


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
        <Fragment>
          <Chatters chatters={data.getUsers} />
          <AddChatter firstName='test' lastName='test' />
        </Fragment>
      )
    }}
  </Query>
)

const ChattersList = ({ chatters, selectedChatterIds }) => (
  <ul>
    { chatters.map( (chatter) => {
      const isSelected = selectedChatterIds.includes(chatter.id)
      const rowClassName = ['row']
      if (isSelected){
        rowClassName.push('row_selected')
      }
      return (
        <li className={rowClassName.join(' ')} key={chatter.id}>
          <SelectedContainer id={chatter.id} isSelected={isSelected} /> { ' ' }
          <a href={chatter.id}>{chatter.first_name} {chatter.last_name}</a> { ' ' }
          <Star id={chatter.id} />
        </li>
      )
    })}
  </ul>
)

const mapStateToProps = state => ({
  selectedChatterIds: state.chatterState.selectedChatterIds
})


const Chatters = connect(mapStateToProps)(ChattersList)

const Select = ({isSelected, toggleSelectedChatter}) => (
  <button type='button' onClick={toggleSelectedChatter}>
    {isSelected ? 'Unselect' : 'Selected'}
  </button>
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
      <button type='button' onClick={starUser}>
        Star
        {console.log('starred')}
      </button>
    )}
  </Mutation>
)

const AddChatter = ({ firstName, lastName }) => (
  <Mutation mutation={ADD_CHATTER} variables={{ firstName, lastName }} onCompleted={()=>{
    console.log('Added Chatter')
  }}>
    {addChatter => (
      <form onSubmit={addChatter}>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
        <input type='submit' name='Submit'/>
      </form>
    )}
  </Mutation>
)

export default App