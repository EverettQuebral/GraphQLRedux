import React from 'react'
import './Card.css'

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

const CardBody = () => (
  <div className='eqcard-body'>
    <div className='eqcard-left'>
    </div>
    <div className='eqcard-right'>
    </div>
  </div>
)

const Card = ({ img, title, subtitle, description }) => (
  <div className='eqcard'>
      <CardHeader img={img}>
        <div className='title'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
      </CardHeader>
  </div>
)

export default Card 

