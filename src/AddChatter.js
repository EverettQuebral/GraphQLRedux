import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Form, FormGroup, Label, Input, Col } from 'reactstrap'


class AddChatter extends Component {
    constructor(props){
      super(props)
      this.state = {
        firstName : "",
        lastName : ""
      }
    }
  
    render(){
      return (
        <Mutation mutation={ADD_CHATTER} 
          variables={{ firstName: this.state.firstName, lastName: this.state.lastName }} 
          onCompleted={()=>{
          console.log('Added Chatter')
        }}>
          {addChatter => (
            <Form onSubmit={addChatter}>
              <Label>Please add your favorite Star here</Label>
              <FormGroup row>
                <Label for='first-name'>First Name</Label>
                <Col sm={10}>
                  <Input type='text' name='first-name' onChange={ e => this.setState({ firstName: e.target.value })}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for='last-name'>Last Name</Label>
                <Col sm={10}>
                  <Input type='text' name='last-name' onChange={ e => this.setState({ lastName: e.target.value })}/>
                </Col>
              </FormGroup>      
              <FormGroup check row> 
                <Col sm={{ size:10 }}>
                  <Input type='submit' name='Submit'/>
                </Col>
              </FormGroup>
            </Form>
          )}
        </Mutation>
      )
    }
  }


const ADD_CHATTER = gql `
mutation ($firstName:String, $lastName:String){
    addChatter(first_name:$firstName, last_name:$lastName){
        message
        status_code
        description
    }
}
`
export default AddChatter
