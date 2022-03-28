import React from 'React';


class CowEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // cowName: '',
      // cowDescription: ''
    }
    // this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
  }

  // handleNameInput(e) {
  //   this.setState({this.cowName: e.target.value})
  // }

  // handleDescriptionInput(e) {
  //   this.setState({this.cowDescription: e.target.value})
  // }

  // hanleSubmit(e) {
  //   e.preventDefault();

  // }

  render() {
    return (
      <div>
        {/* <span>{this.props.cow.name}</span> */}
        <div>{this.props.cow.name}: </div>
        <div>{this.props.cow.description}</div>
      </div>
    )
  }

}

export default CowEntry;