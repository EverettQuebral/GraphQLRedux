import React, { Fragment } from 'react'
import { Jumbotron, Container } from 'reactstrap';
import EQLayout from './EQLayout'


const Intro = () => (
  <Jumbotron>
    <h1>All About Building Scalable Applications</h1>
    <p className='lead'>I have been building scallable applications from the ground up for over 2 decades now and would like to share some of those learnings here.</p>
    <p>This is about sharing some of those information and giving an example of the most common challenges specially in using the latest and greatest technology currently available</p>
    <p>I have a couple of Examples now that are focused using React, Redux, GraphQL, Apollo Client</p>
    <p>Also coming soon will be an example using Apollo Client in iOS and Android</p>
    <hr className='my-2'/>
    <p>You can take a look at the examples by navigating to the Samples Menu.</p>
  </Jumbotron>
)

const Main = () => (
  <EQLayout>
    <Intro />
    <div>
      <h4>React GraphQL Apollo Client and Redux</h4>
      <hr />
      <p>This is a simple application in using both GraphQL and Redux. The objective is to show how GraphQL and Redux can co exists on the same application.</p>
      <p>So to start, this application is created using create-react-app. It is a very helpful tool to bootstrap any React Application.</p>
      <hr />
      <h3>GraphQL & Redux</h3>
      <p>GraphQL is the new way of serving resources to the client application. It brings flexibility and control to the client to only receive what is necessary. It also allows additional dimension in delivering the resources. The client can make a request to make it bulk, combined or to take whatever form. Unlike with the current Representational State Transfer (REST) API where the clients are bound to the integration which means that it has to follow certain API signature to call the API and also follows the resources that it has to consume. Looking at the use cases of mobile clients where at most doesn't require all the properties in the response of the API then the mobile client is taking more time and network latency in processing the additionall unnecessary properties from the response of the API. Also it will take additional development whenever a compound requests needs to happen. What if the client will take five (5) RESTful API calls to show a meaningful page to the user. All 5 request will have to go to the same network, carrier, security handshake etc. It is very inefficient and those are all the key factors of GraphQL.</p>
      <p>Redux is a predictable state container. It allows developers to write an application that behaves consistently in different environments. It is easy to test and allows developers for debugging the app easily. Redux's principle is about the uni-directional flow of information where a state can only be changed by a Pure Function and can only be called by a Dispatcher. Redux is simple in principle and practice but it can become very complicated in a complex application.</p>
      <hr />
      <h3>Apollo</h3>
      <hr />
      <p>Apollo is a client for web, iOS, Android, etc. It allows the client to build a request and handle the response.</p>
      <hr />
      <h3>Architecture</h3>
      <hr />
      <p>Combining Apollo Client and Redux is difficult if not designed properly. Both have features and utilities to do almost exactly the same in terms of controlling and managing the state of the application. This is critical because of the Core Principle of Redux where the flow of information is uni-directional by using a dispatcher and action to change the state.</p>
      <p>Taking a step back and looking the the Clean Architecture from Martin Fowler, we need to understand what is the responsibility of Redux and GraphQL (Apollo) to make sure that the two have a clear boundaries of their responsibilty. This is discussed more by Robin Wieruch and described as the Togetherness Level. I won't go into the details but in this particular application, I have chosen the Togetherness Level 2 where there's a level of interaction on how Apollo and Redux can co-exist together</p>
      <p>The application is available here https://eqsystemclient.herokuapp.com</p>
    </div>
  </EQLayout>
)

export default Main
