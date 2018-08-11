require('newrelic')
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloLink, split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { ReduxCache, apolloReducer } from 'apollo-cache-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@zendeskgarden/react-grid/dist/styles.css'
import '@zendeskgarden/react-buttons/dist/styles.css'
import '@zendeskgarden/react-textfields/dist/styles.css'
import '@zendeskgarden/react-toggles/dist/styles.css'


/** Redux Store Setup */
const initialState = {
  selectedChatterIds: [],
  firstName: '',
  lastName: ''
}

function chatReducer(state = initialState, action){
  switch (action.type){
    case 'TOGGLE_SELECTED_CHATTER' : {
      return applySelectedChatter(state, action)
    }
    default:
      return state
  }
}

function applySelectedChatter(state, action){
  console.log('Firing selected Chatter')
  const { id, isSelected } = action
  const selectedChatterIds = isSelected ? state.selectedChatterIds.filter(itemId => itemId !== id) : state.selectedChatterIds.concat(id)
  return { ...state, selectedChatterIds }
}

const store = createStore(
  combineReducers({
    apollo: apolloReducer,
    chatterState: chatReducer
  })
)

/** Apollo Client Setup */

const cache = new ReduxCache({ store })

// const httpUri = 'http://192.168.1.119:4000/graphql'
// const wsUri = 'ws://192.168.1.119:4000/subscriptions'

const httpUri = 'https://eqsystems.herokuapp.com/graphql'
const wsUri = 'wss://eqsystems.herokuapp.com/subscriptions'


console.log("Environment ", process.env.NODE_ENV, httpUri, wsUri)

const httpLink = new HttpLink({ uri: httpUri })
const wsLink = new WebSocketLink({ 
  uri : wsUri,
  options: {
    reconnect: true
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: ApolloLink.from([link]),
  cache,
  connectToDevTools: true
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker();
