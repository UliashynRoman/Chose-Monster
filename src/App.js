import React , {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    //super is a function that give permision to comunicate with proparties from parent
    super();

    this.state = {
      monsters: [],
      //Field to search
      searchField: ''
    };
    //New Function, .bind where the context of <this> is set wherever we paste to it
    //this.handlerChange = this.handlerChange.bind(this);

  }
  //When it Mount LifeCycle Method
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //new promise - take users and set monsters 
    .then(users => this.setState({monsters: users}))
  } 

  handlerChange = (e) => {
    this.setState({searchField: e.target.value});
  }


  render(){
    //setting the constaties monsters and search field 
    const  {monsters,searchField} = this.state; 
    //Look equally as:
    //const monsters = this.state.monsters;...
    const filteredMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

     

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
      {/* 4 Search and SyntethicEvent */}
      {/* 5 */}
        <SearchBox 
          placeholder='Search Monsters'
          handlerChange = {this.handlerChange}
        />
      {/* //1 */}
        <CardList monsters={filteredMonsters}></CardList>
    </div>
    );
  }
}

export default App;
