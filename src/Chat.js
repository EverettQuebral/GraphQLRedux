import React, { Compnent, Fragment } from 'react'
import { Subscription, Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'


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
    messageAdded(channel:$channel) {
      message
      id
      author
    }
  }
`

const MESSAGE_SENDER = gql `
  mutation ($channel: String!, $author: String!, $message: String!) {
    sendMessage(channel: $channle, author: $author, message: $message) {
      message
      id
      author
    }
  }
`

const Messages = ({ title }) => (
  <Query query={GET_MESSAGES}>
    {({loading, error, data}) => {
      if (error) return <div> Error </div>
      if (loading) return <div> Loading </div>

      return (
         <MessageList messages={data.messages}/>
      )
    }}
  </Query>
)

const MessageList = ({ messages }) => (
  <div>
    Messages here
    { messages.map( (mess) => {
      return (<div key={mess.id}> {mess.author}  {mess.message} </div>)
    })}
  </div>
)

const Sender = () => (
  <div>Sender Here</div>
)

const Chat = () => (
  <div>
    <Messages title="this is a chat component" />
  </div>
)

export default Chat