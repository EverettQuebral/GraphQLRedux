import React, { Fragment } from 'react'
import { Jumbotron, Container } from 'reactstrap';
import EQLayout from './EQLayout'
import './Main.css'

const AstroImage = () => (
  <Fragment>
    <hr />
    <img className='astroimage' src='https://c1.staticflickr.com/5/4450/37959490282_9522369451_o.png' />
    <hr />
  </Fragment>
)

const ImagesFromFlickr = [
  {
    url: 'https://c2.staticflickr.com/2/1815/30209781128_0d887a7de5_n.jpg',
    original: 'https://c2.staticflickr.com/2/1815/30209781128_64a0b0be80_o.png',
    title: 'Western Veil Nebula',
    description: 'Can you see the witch? Also known as the witchbroom nebula or the western veil nebula, I prefer the later.It is a remnant of a supernova that exploded around 6,000 BC and the distance is about 1,470 light years.'
  },
  {
    url: 'https://c1.staticflickr.com/5/4522/37914735325_b1f4a4ddeb_n.jpg',
    original: 'https://c1.staticflickr.com/5/4522/37914735325_934b9551e8_o.png',
    title: 'The Heart Nebula',
    description: 'The Heart Nebula, IC 1805, Sharpless 2-190, lies some 7500 light years away from Earth and is located in the Perseus Arm of the Galaxy in the constellation Cassiopeia. It was discovered by William Herschel on 3 November 1787'
  },
  {
    url: 'https://c1.staticflickr.com/5/4450/37959490282_c1f5a93b85_n.jpg',
    original: 'https://c1.staticflickr.com/5/4450/37959490282_9522369451_o.png',
    title: 'The Rosette Nebula',
    description: 'The Rosette Nebula is a large spherical H II region located near one end of a giant molecular cloud in the Monoceros region of the Milky Way Galaxy.'
  },
  {
    url: 'https://c1.staticflickr.com/5/4524/27144549229_7d156dcc2c_n.jpg',
    original: 'https://c1.staticflickr.com/5/4524/27144549229_3fbc2b4c2d_o.png',
    title: 'The Cgynus Nebula',
    description: 'The North America Nebula is an emission nebula in the constellation Cygnus, close to Deneb. The remarkable shape of the nebula resembles that of the continent of North America, complete with a prominent Gulf of Mexico.'
  },
  {
    url: 'https://c1.staticflickr.com/5/4542/24000329607_fc31260a70_n.jpg',
    original: 'https://c1.staticflickr.com/5/4542/24000329607_e298752f0e_o.png',
    title: 'The Pelican Nebula',
    description: 'The Pelican Nebula is an H II region associated with the North America Nebula in the constellation Cygnus. The gaseous contortions of this emission nebula bear a resemblance to a pelican, giving rise to its name.'
  },
  {
    url: 'https://c1.staticflickr.com/5/4514/36869963113_8c0a1ebac5_n.jpg',
    original: 'https://c1.staticflickr.com/5/4514/36869963113_381362103f_o.png',
    title: 'The Elephant Trunk Nebula',
    description: 'The Elephant\'s Trunk nebula is a concentration of interstellar gas and dust within the much larger ionized gas region IC 1396 located in the constellation Cepheus about 2,400 light years away from Earth.'
  },
  {
    url: 'https://c1.staticflickr.com/5/4600/39162820891_99715ed921_n.jpg',
    original: 'https://c1.staticflickr.com/5/4600/39162820891_e10113f62d_o.png',
    title: 'The Horsehead Nebula',
    description: 'The Horsehead Nebula is a dark nebula in the constellation Orion. The nebula is located just to the south of the star Alnitak, which is farthest east on Orion\'s Belt, and is part of the much larger Orion Molecular Cloud Complex'
  },
  {
    url: 'https://c1.staticflickr.com/5/4303/35738375021_47f8de599f_n.jpg',
    original: 'https://c1.staticflickr.com/5/4303/35738375021_06f23879b0_o.png',
    title: 'The Andromeda Galaxy',
    description: 'The Andromeda Galaxy, also known as Messier 31, M31, or NGC 224, is a spiral galaxy approximately 780 kiloparsecs from Earth, and the nearest major galaxy to the Milky Way.'
  },
  {
    url: 'https://c1.staticflickr.com/5/4556/38308951604_56c33c4456_n.jpg',
    original: 'https://c1.staticflickr.com/5/4556/38308951604_529dfe5528_o.png',
    title: 'The Jellyfish Nebula',
    description: 'IC 443 is a Galactic supernova remnant in the constellation Gemini. On the plan of the sky, it is located near the star Eta Geminorum. Its distance is roughly 5,000 light years from Earth.'
  }
]

const OneImage = ({ imageInfo }) => (
  <div className='image-item'>
    <div className='image-front'>
      <a href={imageInfo.original}>
        <img src={imageInfo.url} />
        <p>{imageInfo.title}</p>
      </a>
    </div>
    <div className='image-back'>
      <a href={imageInfo.original}>
        <h5>{imageInfo.title}</h5>
        <p>{imageInfo.description}</p>
      </a>
    </div>
  </div>
)
const AstroImages = ({ images }) => (
  <div className='images-container'>
  { images.map( (image) => <OneImage imageInfo={ image }/>)}
  </div>
)

const Intro = () => (
  <Jumbotron>
    <h1>All About Building Scalable Applications</h1>
    <p className='lead'>I have been building scallable applications from the ground up for over 2 decades now and would like to share some of those learnings here.</p>
    <p>This is about sharing some of those information and giving an example of the most common challenges specially in using the latest and greatest technology currently available</p>
    <p>I have a couple of Examples now that are focused using React, Redux, GraphQL, Apollo Client</p>
    <p>Also coming soon will be an example using Apollo Client in iOS and Android</p>
    <hr className='my-2'/>
    <p>You can take a look at the examples by navigating to the Samples Menu.</p>
    <hr />
    <h3>Re-Write in Progress</h3>
    <p style={{ 'color': 'red' }}>I decided to re-write and use my own designed components as instead of borrowing 3rd party components</p>
  </Jumbotron>
)

const Main = () => (
  <EQLayout>
    <Intro />
    <AstroImages images={ImagesFromFlickr}/>
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
      <p>The application is available here <a href='https://eqsystemclient.herokuapp.com'>https://eqsystemclient.herokuapp.com</a></p>
    </div>
  </EQLayout>
)

export default Main
