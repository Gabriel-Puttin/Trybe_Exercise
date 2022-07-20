import React, {Component} from 'react';
import Pokedex from './Pokedex';
import Data from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>MY POKEDEX</h1>
        <Pokedex pokemons={Data}/>
      </div>
    );
  }
}

export default App;
