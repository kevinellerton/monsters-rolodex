import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchInput: "",
      monsters: [],
      rappers: [
        {name: 'Snoop Dog', id: 1},
        {name: 'Prince EA', id: 2},
        {name: 'Cardi B', id: 3}
      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(monsterArray => this.setState({monsters: monsterArray}));
  }

  render() {

    const { searchInput, monsters, rappers } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()));
    const filteredRappers = rappers.filter(rapper => rapper.name.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <div className="App">

          <h1>Monsters Rolodex</h1>

          <SearchBar handleChange={e => this.setState({searchInput: e.target.value})} placeHolder={'search monsters...'}/>

          <h1>Monsters</h1>
          <CardList items={filteredMonsters}></CardList>

          <h1>Rappers</h1>
          <CardList items={filteredRappers}></CardList>

        </div>
    );
  }
}

export default App;
