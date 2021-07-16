import {Component} from 'react';

import './App.css';

class App extends Component{

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'add1'
        },
        {
          name: 'Dracula',
          id: 'add2'
        },
        {
          name: 'Zombie',
          id: 'add3'
        }
      ]
    }
  }
  render(){
    return(
      
        <div className="App">
         {
           this.state.monsters.map(monster =>
            (<h1>{monster.name}</h1>
            ))
         }
        </div>
      
    );
  }
}
export default App;
