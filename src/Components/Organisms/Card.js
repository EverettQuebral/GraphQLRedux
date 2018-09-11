import React, {Fragment } from 'react'
import './Card.css'

const CardHeader = ({ img, children }) => (
  <div className='eqcard-header'>
    <img className='main-image' src='https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab_m.jpg'
  srcSet='https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab.jpg 500w, https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab_b.jpg 1000w' />
    <div className='eqcard-title'>{children}</div>
    <div className='eqcard-menu'>
      <img className='eqcard-icon' src='/_ionicons_svg_md-menu.svg' />
      <ul>
        <li className='eqcard-icon'>
          <img className='facebook' src='/_ionicons_svg_logo-facebook.svg' />
        </li>
        <li className='eqcard-icon'>
          <img className='instagram' src='/_ionicons_svg_logo-instagram.svg' />
        </li>
        <li className='eqcard-icon'>
          <img className='twitter' src='/_ionicons_svg_logo-twitter.svg' />
        </li>
      </ul>

    </div>
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
      onClick={onClick}
    >
      <CardHeader img={props.img}>
        <div className='title'>{props.title}</div>
        <div className='subtitle'>{props.subtitle}</div>
      </CardHeader>
      <CardBody description={props.description} moreinfo={props.moreinfo}/>
      <CardFooter fullsize={props.fullsize}/>
  </div>
)

export default Card 

