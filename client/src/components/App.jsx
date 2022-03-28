import React from 'React';
import CowList from './CowList.jsx';
import axios from 'axios';
import AddCow from './AddCow.jsx';
// import dummyData from './dummyData.js';

var newCow = [
  {name: "Buttercup", description: "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock."},

  {name: "Daisy", description: "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties."}
]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allCows: newCow
    }
    this.getAllCows = this.getAllCows.bind(this);
    this.addCow = this.addCow.bind(this);
  }

  componentDidMount(){
    this.getAllCows();
  }

  getAllCows() {
    axios.get('/api/cows')
    .then(result => this.setState({allCows: result.data}))
    .catch(err => console.log('Error: Client cannot get cow info.'))
  }

  addCow(/*val1, val2*/ val) {
    console.log(val)
    axios.post('/api/cows', val)
    .then(() => this.getAllCows())
    .catch(err => console.log('Error: Client cannot get cow info.'))
  }

  render() {
    return (
      <div>
        <AddCow addCow={this.addCow} />
        <CowList cows={this.state.allCows}/>
      </div>
    )
  }

}

export default App;