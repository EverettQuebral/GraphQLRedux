import React, { Component } from 'react'
import './EntryField.css'

const errorStyle = {
  'borderColor': 'red',
  'color' : 'red'
}

/**
  * An EntryField should have a label and an input with a validation and such
  * <EntryField>
  *   <label for='entry-field>Label Text Here</label>
  *   <input name='entry-field' placeholder='placeholder text' dir='ltr' pattern='patternhere' />
  * </EntryField>
  */
 class EntryField extends Component {
  constructor(props){
    super(props)
    this.state = {
      valid: true,
      error: false,
      empty: true
    }
  }

  checkValidity = (target) => {
    const _pattern = new RegExp(this.props.pattern)
    const _valid = _pattern.test(target)

    // if length is zero, should not display anything
    if (target.length == 0) this.setState({ valid: true, error: false, empty: true })
    else {
      // if the phone is not empty, then check for the pattern for validity
      if (_valid) this.setState({ valid: true, error: false, empty: false })
      else if (!_valid && target.length > 0) this.setState({ valid: false, empty: false, error: true })
    }
  }

  display = () => {
    const inputClass = (this.state.error ? 'error' : 'validated')
    return (
      <div className='entry-field'>
      <label htmlFor={this.props.name}>{this.props.label}</label>
        <input 
          required
          className={inputClass}
          name={this.props.name}
          type={this.props.type}
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          onChange={ e => this.checkValidity(e.target.value) }
          onBlur={ e => this.checkValidity(e.target.value) }
        />
      </div>
    )
  }
  
  render(){
    return(
      this.display()
    )
  }
}

export default EntryField
