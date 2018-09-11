import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import { Toggle, Label as LabelToggle } from '@zendeskgarden/react-toggles'
import { connect } from 'react-redux'
import { Container, Jumbotron } from 'reactstrap'
import ReactLoading from 'react-loading'
import { Button } from './Components/Atoms'
import { withStateHandlers, compose } from 'recompose' 

import './StarChatter.css'


import AddChatter from './AddChatter'
import EQLayout from './EQLayout'


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
const ChattersList = ({ chatters, selectedChatterIds }) => (
  <Container className='chatter-list'>
    { chatters.map( (chatter) => {
      const isSelected = selectedChatterIds.includes(chatter.id)
      const rowClassName = ['row']
      if (isSelected){
        rowClassName.push('row_selected')
      }
      return (
        <div className='grid-row' key={chatter.id}>
          <div className='grid-column'>
            <SelectedContainer id={chatter.id} isSelected={isSelected} />
          </div>
          <div className='grid-column'>
            <span>{chatter.first_name} {chatter.last_name}</span>
          </div>
          <div className='grid-column'>
            <Star id={chatter.id}/>
          </div>
        </div>
      )
    })}
  </Container>
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

const ButtonWithState = compose(
  withStateHandlers( ({ initialCounter = 0 })  => ({
    counter: initialCounter
  }),
  {
    incrementOn: ({ counter }) => ( value ) => ({
      counter: counter + value
    })
  }
))(
  ({ counter, incrementOn }) => (
    <Button 
      props={{className:'button button-animated'}} 
      onClick={() => incrementOn(1)}
      >
      Star {counter}
    </Button>
  )
)

// const Star = ({ id }) => (
//   <Mutation mutation={STAR_USER} variables={{ id }} onCompleted={() => {
//     console.log('completed')
//   }}>
//     { starUser => (
//       // <ButtonWithState starUser={starUser} />
//       <ButtonWithState onClick={starUser} />
//       // <button onClick={starUser}>Star User</button>
//      )}
//   </Mutation>
// )

const Star = ({ id }) => (
  <Mutation mutation={STAR_USER} variables={{ id }} onCompleted={() => { console.log('completed') }}>
  { starUser => (
    <form name='testing' onSubmit={e => {
      e.preventDefault()
      starUser({ variables: { id } })
    }}>
      <ButtonWithState />
    </form>
  ) }
  </Mutation>
)

const GetChatters = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (error) return <div>Error</div>
      if (loading) return <ReactLoading type='spokes' height='60%' width='60%' color='#ddd' />
      return (
        <Chatters chatters={data.getUsers} />
      )
    }}
  </Query>
)

const StarChatter = () => (
  <EQLayout>
    <Jumbotron className='tron-2'>
      <h1 className='display-3'>Redux Store + GraphQL + Apollo Client</h1>
      <p>An example of a React Application that is using Redux Store to manage state on the client side while using Apollo Client in managing remote state and store</p>
      <p>You can take a look at the source of this application here <a href='https://github.com/EverettQuebral/GraphQLRedux/blob/master/src/StarChatter.js'>StarChatter.js</a></p>
    </Jumbotron>
    <div className='grid'>
      <div className='grid-item'>
        <h3 style={{ textAlign: 'center' }}>Most Voted Stars</h3>
        <GetChatters />
      </div>
      <div className='grid-item'>
        <h3 style={{ textAlign: 'center' }}>Add your favorite Star</h3>
        <AddChatter firstName='test' lastName='test' />
      </div>
    </div>
  </EQLayout>
)

export default StarChatter
