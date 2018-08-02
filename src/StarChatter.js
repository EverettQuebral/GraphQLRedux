import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
// import { Row, Col } from '@zendeskgarden/react-grid'
import { Button } from '@zendeskgarden/react-buttons'
import { Label } from '@zendeskgarden/react-textfields'
import { Toggle, Label as LabelToggle } from '@zendeskgarden/react-toggles'
import { connect } from 'react-redux'
import { Container, Jumbotron } from 'reactstrap'
import { Grid, Row, Col } from '@zendeskgarden/react-grid'
import ReactLoading from 'react-loading'

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
  <Container>
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
    <Jumbotron>
      <h1 className='display-3'>Redux Store + GraphQL + Apollo Client</h1>
      <p>An example of a React Application that is using Redux Store to manage state on the client side while using Apollo Client in managing remote state and store</p>
      <p>You can take a look at the source of this application here <a href='https://github.com/EverettQuebral/GraphQLRedux/blob/master/src/StarChatter.js'>https://github.com/EverettQuebral/GraphQLRedux/blob/master/src/StarChatter.js</a></p>
    </Jumbotron>
    <Row>
      <Col size={8}>
        <h3 style={{ textAlign: 'center' }}>Most Voted Stars</h3>
        <GetChatters />
      </Col>
      <Col size={4}>
        <h3 style={{ textAlign: 'center' }}>Add your favorite Star</h3>
        <AddChatter firstName='test' lastName='test' />
      </Col>
    </Row>
  </EQLayout>
)

export default StarChatter