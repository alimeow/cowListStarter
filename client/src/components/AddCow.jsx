import React, { Component } from 'react';
import axios from 'axios';

class AddCow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cowName: '',
      cowDescription: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
  }

  handleNameInput(e) {
    // console.log(e.target.value)
    this.setState({cowName: e.target.value})
  }

  handleDescriptionInput(e){
    // console.log(e.target.value)
    this.setState({cowDescription: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    //post second param is the date we're gonna add. eg: {name: 'pear', quantity: '2'}  //now quantity still a string... ***
    // axios.post('api/cows', {name: this.state.cowName, description: this.state.cowDescription})
    // .then(result => this.setState({allCows: result.data}))
    // .catch(err => console.log('Error: Client cannot get cow info.'))
    // this.props.getAllCows()
    this.props.addCow({name: this.state.cowName, description: this.state.cowDescription})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label> Name
            <input name="item" value={this.state.cowName} onChange={this.handleNameInput}/>
          </label>
          <label> Description
            <input name="quantity" value={this.state.cowDescription} onChange={this.handleDescriptionInput}/>
          </label>
          <button>Add Cow</button>
        </form>
    )
  }
}

export default AddCow;