import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      numeroDeClick: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState((estadoAtual, _props) => ({
      numeroDeClick: estadoAtual.numeroDeClick + 1
    }));
  }

  render() {
    return(
      <div>
      <button onClick={this.handleClick}>{this.state.numeroDeClick}</button>
      </div>
    );
  }
}

export default App;
