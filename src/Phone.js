import React, { Component, Fragment } from 'react'
import './Phone.css'

class Phone extends Component {
  constructor(props){
    super(props)

    this.state = {
      valid: true,
      error: false
    }
  }

  displayElement = () => {
    return (
      <Fragment>
        <label for='phone-number' dir={this.props.dir}>{this.props.label}</label>
        <input text='text' pattern={this.props.pattern} dir={this.props.dir}
          onBlur={e => {
            const _pattern = new RegExp(this.props.pattern)
            const _valid = _pattern.test(e.target.value)
            if (_valid) this.setState({ valid: true, error: false })
            else this.setState({ valid: false, error: true })
          }}
        />
        <span className={this.state.error ? 'error' : 'hide'}>{this.props.errorMessage}
          <span className={this.state.valid ? 'show' : 'hide'}>{this.props.patternValid}</span>
        </span>
        
      </Fragment>
    )
  }

  render() {
    return (
      <div className='phone'>
        {this.props.render({ ...this.props, displayElement: this.displayElement })}
      </div>
    )
  }
}

export default Phone
