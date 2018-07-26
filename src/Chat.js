import React, { Component, Fragment } from 'react'
import { Subscription, Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


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
  subscription onMessageAdded ($channel: String!) {
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
class Subscribe extends Component {
  constructor(props){
    super(props)

  }
  render(){
    return (
      <Subscription subscription={MESSAGE_SUBSCRIBER} variables={{ channel: this.props.channel }}>
      {({ data, loading }) => {
        if (loading) return <div>Loading</div>
        if (data) return <DisplayNewMesage message={data} />
      }}
      </Subscription>
    )
  }
}

const Messages = ({ title }) => (
  <Query query={GET_MESSAGES}>
    {({loading, error, data}) => {
      if (error) return <div> Error </div>
      if (loading) return <div> Loading </div>

      return (
        <div>
          <div>{title}</div>
          <MessageList messages={data.messages}/>
        </div>
      )
    }}
  </Query>
)

const MessageList = ({ messages }) => (
  <div>
    { console.log (messages) }
    { messages.map( (mess) => {
      return (<div key={mess.id}> {mess.author}  {mess.message} </div>)
    })}
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
  render(){
    return (
      <Mutation mutation={MESSAGE_SENDER} 
          variables={{ channel: this.state.channel, author: this.state.author, message: this.state.message }} 
          onCompleted={ ()=> { console.log('Mutation Completed') }}>

            {sendMessage =>(
              <Form onSubmit={sendMessage}>
                <FormGroup>
                  <Label for='channel'>Channel</Label>
                  <Input type='text' name='channel' onChange={ e => this.setState({ channel: e.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label for='author'>Author</Label>
                  <Input type='text' name='author' onChange={ e => this.setState({ author: e.target.value })} />
                </FormGroup>
                <FormGroup>
                  <Label for='message'>Message</Label>
                  <Input type='text' name='message' onChange={ e => this.setState({ message: e.target.value })} />
                </FormGroup>
                <input type='Submit' />
              </Form>
            )}
      </Mutation>
    )
  }
}



const Chat = () => (
  <div>
    <Messages title="Real Time Chat Here" />
    <Subscribe channel="test" />
    <Sender props={{ channel: 'Channle Here', author: 'Author here', message: 'Message Here'}}/>
  </div>
)

export default Chat