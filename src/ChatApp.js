import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Form, Input, InputGroup, InputGroupAddon, Container, Grid } from 'reactstrap'
import { Row, Col } from '@zendeskgarden/react-grid'

import EQNav from './EQNav'


const GET_MESSAGES = gql `
  query {
    messages {
      author
      message
      id
    }
  }
`

const MESSAGE_SUBSCRIBER = gql `
  subscription ($channel: String!) {
    messageAdded(channel: $channel) {
      message
      id
      author
    }
  }
`

const MESSAGE_SENDER = gql `
  mutation ($channel: String!, $author: String!, $message: String!) {
    sendMessage(channel: $channel, author: $author, message: $message) {
      message
      id
      author
    }
  }
`

const DisplayNewMesage = ({ message }) => (
  <div>
    { console.log("New Message here ", message) }
    <div key={message.key}> { message.messageAdded.author} {message.messageAdded.message} </div>
  </div>
)

const MessagesQuery = ({ title }) => (
  <Query query={GET_MESSAGES}>
    {({loading, error, data}) => {
      if (error) return <div> Error </div>
      if (loading) return <div> Loading </div>

      return (
        <div>
          <div>{title}</div>
          {/* <MessageList messages={data.messages}/> */}
        </div>
      )
    }}
  </Query>
)

class MessagesPage extends Component {
  constructor(props){
    super(props)
    console.log("Constructor ", props)
  }

  componentWillReceiveProps(props){
    console.log("Component will receive props ", props)
  }

  componentDidMount(){
    this.props.subscribeToNewComments()
  }

  render(){
    return (
      <div>
        <MessageList messages={this.props.messages} />
      </div>
    )
  }
}

const Messages = ({ title }) => (
  <Query query={GET_MESSAGES}>
    {({ subscribeToMore, data, result }) => (    
      <MessagesPage {...data}
        subscribeToNewComments = {() =>
          subscribeToMore({
            document: MESSAGE_SUBSCRIBER,
            variables: { channel: 'testing' },
            updateQuery: ( prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newMessageItem = subscriptionData.data.messageAdded
              console.log("New Mesage ", newMessageItem)

              console.log(prev)
              return { messages: [...prev.messages, newMessageItem]}
            }
          })
        }
      />
    )}
  </Query>
)

const MessageList = ({ messages }) => (
  <div>
    { 
      messages && messages.map( (mess) => {
        return (
          <Fragment>
            <br />
            <InputGroup key={mess.id}>
              <InputGroupAddon addonType='prepend'>{mess.author}</InputGroupAddon>
              <Input value={mess.message} />
            </InputGroup>
          </Fragment>
        )
      })
    }
  </div>
)

class Sender extends Component {
  constructor(props){
    super(props)
    this.state = {
      channel: '',
      author: '',
      message: ''
    }
  }
  
  clearInputs() {
    this.setState({
      message: ''
    })
  }

  render(){
    return (
      <Mutation mutation={MESSAGE_SENDER} 
          variables={{ channel: this.state.channel, author: this.state.author, message: this.state.message }} >
            {sendMessage => (
              <Form onSubmit={ e => { 
                  e.preventDefault()
                  sendMessage()
                  this.clearInputs()
                }}
                  onChange={
                    console.log('nothing is changing')
                  }
                >
                <InputGroup>
                  <InputGroupAddon addonType='prepend'>Channel</InputGroupAddon>
                  <Input type='text' name='channel' value={this.state.channel} onChange={ e => this.setState({ channel: e.target.value })} />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType='prepend'>Author</InputGroupAddon>
                  <Input type='text' name='author' value={this.state.author} onChange={ e => this.setState({ author: e.target.value })} />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroupAddon addonType='prepend'>Message</InputGroupAddon>
                  <Input type='text' name='channel' value={this.state.message} onChange={ e => this.setState({ message: e.target.value })} />
                  <InputGroupAddon addonType='append'><input type='submit' /></InputGroupAddon>
                </InputGroup>
              </Form>
            )}
      </Mutation>
    )
  }
}


const Chat = () => (
  <Fragment>
    <EQNav />
    <Container>
      <Row>
        <Col>
          <h3>Messages</h3>
          <Messages title="Channel" />
          <hr />
          <h3>About You</h3>
          <Sender props={{ channel: 'Channle Here', author: 'Author here', message: 'Message Here' }}/>
        </Col>
      </Row>
    </Container>
  </Fragment>
)

export default Chat
