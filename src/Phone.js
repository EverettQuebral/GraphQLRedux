import React, { Component, Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import './Phone.css'

class Phone extends Component {
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

    if (_valid) this.setState({ valid: true, error: false })
    if (target.length == 0) this.setState({ valid: true, error: false })
    if (!_valid && target.length > 0) this.setState({ valid: false, empty: false, error: true })
  }

  displayElement = () => {
    return (
      <Row>
        <Col>
          <label for='phone-number' dir={this.props.dir}>{this.props.label}</label>
        </Col>
        <Col>
          <input 
            name='phone-number'
            className='phone-number {this.state.error ? "error" : "none"}' 
            text='text' 
            pattern={this.props.pattern} 
            dir={this.props.dir}
            placeholder={this.props.placeholder}
            onChange={e => this.checkValidity(e.target.value)}
            onBlur={e => this.checkValidity(e.target.value)}
          />
          <span className={this.state.empty ? 'hide' : 'show'}>
            <span className={this.state.error ? 'error' : 'hide'}>{this.props.errorMessage}</span>
            <span className={this.state.valid ? 'show' : 'hide'}>{this.props.patternValid}</span>
          </span>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <div className='phone'>
        {this.props.render && this.props.render({ ...this.props, displayElement: this.displayElement })}
        {this.props.children}
      </div>
    )
  }
}

export default Phone
