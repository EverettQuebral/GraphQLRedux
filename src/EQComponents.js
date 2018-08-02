import React from 'react'
import FloatingLabel from 'floating-label-react'


export const EQForm = () => (
  <div>{this.props.children}</div>
)

export const EQFormGroup = () => (
  <div>{this.props.children}</div>
)

export const EQInput = ({ props }) => (
  <FloatingLabel placeholder={props.placeholder}/>
)