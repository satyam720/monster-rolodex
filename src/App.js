import {Component} from 'react';
import { CardList } from './components/card-list/card-list';

import './App.css';

class App extends Component{

  constructor() {
    super();

    this.state = {
      monsters: [],
      serachField: '',
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    return(
      
        <div className="App">
        <input 
          type ="search"
          placeholder="Search Monsters"
          onChange={e => this.setState({serachField: e.target.value})}
        />
        <CardList
        monsters={this.state.monsters}>
        
        </CardList>
        
        </div>
      
    );
  }
}
export default App;
