import React, { Component } from 'react'
import EntryField from './EntryField'
import './Address.css'

/**
 * Since the address component will use different re-usable components, then the fields
 * that we need to pass to the props will be an array of the re-usable simple components (ATOMs) and MOLECULES
 * this.props.fields = [
 *  { Label: }
 * ]
 */

 //** ATOMS here */

 

class Address extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <form name={this.props.name} className='address go-bottom'>
        <EntryField name='address1'
                    label='Address Line 1'
                    placeholder='Address1'
                    type='text'
                    errorMessage='Wrong Format'
                    patternValid='Valid'/>
        <EntryField name='address2'
                    label='Address Line 2'
                    placeholder='Address Line 2'
                    type='text'
                    errorMessage='Wrong Format'
                    patternValid='Valid'/>
        <EntryField name='city'
                    label='City'
                    placeholder='City'
                    type='text'
                    errorMessage='Wrong Format'
                    patternValid='Valid'/>
        <EntryField name='state'
                    label='State'
                    placeholder='State'
                    type='text'
                    errorMessage='Wrong Format'
                    patternValid='Valid'/>
        <EntryField name='zip'
                    label='Zip'
                    placeholder='Zip'
                    type='text'
                    pattern='^\d{5}$'
                    errorMessage='Wrong Format'
                    patternValid='Valid'/> 
        <EntryField name='country'
                    label='Country'
                    placeholder='Country'
                    type='text'
                    errorMessage='Wrong Format'
                    patternValid='Valid'/>
        <button type='submit' name='submit'>{this.props.submit}</button>
      </form>
    )
  }
}


export default Address

