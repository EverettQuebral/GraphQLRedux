import React from 'react'
import './Card.css'
import Button from '../Atoms/Button'

const CardHeader = ({ img, children }) => (
  <div className='eqcard-header'>
    <img src='https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab_m.jpg'
  srcset='https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab.jpg 500w, https://c2.staticflickr.com/2/1875/30611527148_74cb6bf6ab_b.jpg 1000w' />
    <div className='eqcard-title'>{children}</div>
    <div className='eqcard-menu'>
      <img className='eqcard-icon' src='/_ionicons_svg_md-menu.svg' />
      <ul>
        <li className='eqcard-icon'>
          <img src='/_ionicons_svg_logo-facebook.svg' />
        </li>
        <li className='eqcard-icon'>
          <img src='/_ionicons_svg_logo-instagram.svg' />
        </li>
        <li className='eqcard-icon'>
          <img src='/_ionicons_svg_logo-twitter.svg' />
        </li>
      </ul>

    </div>
  </div>
)

const CardBody = ({ description, moreinfo }) => (
  <div className='eqcard-body'>
    <div className='eqcard-left'>
      {description}
    </div>
    <div className='eqcard-right'>
     {moreinfo}
    </div>
  </div>
)

const CardFooter = ({ fullsize }) => (
  <div className='eqcard-footer'>
    <Button props={{className:'button button-animated'}}><a href={fullsize}>Full Size</a></Button>
  </div>
)

const Card = ({ img, title, subtitle, description, moreinfo, fullsize }) => (
  <div className='eqcard'>
      <CardHeader img={img}>
        <div className='title'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
      </CardHeader>
      <CardBody description={description} moreinfo={moreinfo}/>
      <CardFooter fullsize={fullsize}/>
  </div>
)

export default Card 

