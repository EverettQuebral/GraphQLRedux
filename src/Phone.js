import React, { Component, Fragment } from 'react'
import { Row, Col } from 'reactstrap'
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
      <Row>
        <Col>
          <label for='phone-number' dir={this.props.dir}>{this.props.label}</label>
        </Col>
        <Col>
          <input 
            className={this.state.error ? 'error' : 'none'} 
            text='text' 
            pattern={this.props.pattern} 
            dir={this.props.dir}
            onChange={e => {
              if (e.target.value.length == 0) this.setState({ valid:true, error: false })
            }}
            onBlur={e => {
              const _pattern = new RegExp(this.props.pattern)
              const _valid = _pattern.test(e.target.value)
              if (_valid && e.target.value.length > 0) this.setState({ valid: true, error: false })
              else this.setState({ valid: false, error: true })
            }}
          />
          <span className={this.state.error ? 'error' : 'hide'}>{this.props.errorMessage}
            <span className={this.state.valid ? 'show' : 'hide'}>{this.props.patternValid}</span>
          </span>
        </Col>
      </Row>
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
