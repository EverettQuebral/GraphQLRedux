import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


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
              <Label>You can add a new chatter that will demonstrate a Mutation call to the GraphQL Server</Label>
              <FormGroup>
                <Label for='first-name'>Enter your First Name</Label>
                <Input type='text' name='first-name' onChange={ e => this.setState({ firstName: e.target.value })}/>
              </FormGroup>
              <FormGroup>
                <Label for='last-name'>Enter your Last Name</Label>
                <Input type='text' name='last-name' onChange={ e => this.setState({ lastName: e.target.value })}/>
              </FormGroup>
              <Input type='submit' name='Submit'/>
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