import React, {Fragment } from 'react'
import { withState, withHandlers, compose } from 'recompose'

import './Card.css'

const CardMenu = ({ shared='', onClick }) => (
  <div className='eqcard-menu'>
    <img className='eqcard-icon' src='/_ionicons_svg_md-menu.svg' />
    <ul>
      <li className='eqcard-icon'>
        <img className='facebook' src='/_ionicons_svg_logo-facebook.svg'
          onClick={onClick} />
      </li>
      <li className='eqcard-icon'>
        <img className='instagram' src='/_ionicons_svg_logo-instagram.svg' 
          onClick={onClick}
        />
      </li>
      <li className='eqcard-icon'>
        <img className='twitter' src='/_ionicons_svg_logo-twitter.svg' 
          onClick={onClick}
        />
      </li>
    </ul>
  </div>
)

const CardMenuWithStateAndHandler = compose(
  withState('shared', 'sharedHandler', ''),
  withHandlers({
    onClick: ({ sharedHandler }) => (event) => {
      const x = event.target.className
      console.log(x)
      sharedHandler(shared => x)
    }
  })
)(CardMenu)

const CardHeader = ({ img, children, onClick }) => (
  <div className='eqcard-header'>
    <img onClick={onClick} className='main-image' src='https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab_m.jpg'
  srcSet='https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab.jpg 500w, https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab_b.jpg 1000w' />
    <div className='eqcard-title'>{children}</div>
    <CardMenuWithStateAndHandler />
  </div>
)

const CardBody = ({ description }) => (
  <div className='eqcard-body'>
      {description}
  </div>
)

const CardFooter = ({ fullsize }) => (
  <div className='eqcard-footer'>
    <a className='button button-animated' href={fullsize}>Full Size</a>
  </div>
)

const Card = ({ props, onClick, collapsed=false }) => (
  <div className={collapsed === true ? 'eqcard collapsed' : 'eqcard'}
    >
      <CardHeader img={props.img} onClick={onClick}>
        <div className='title'>{props.title}</div>
        <div className='subtitle'>{props.subtitle}</div>
      </CardHeader>
      <CardBody description={props.description} moreinfo={props.moreinfo}/>
      <CardFooter fullsize={props.fullsize}/>
  </div>
)

export default Card 

