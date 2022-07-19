import React, { Component } from 'react';
import './App.css';

const arr = ['Acordar mais cedo', 'Fazer um café', "Escovar os dentes", 'Ligar o notebook', 'Jogar ou pouco', 'abrir o Ubuntu', 'Fazer as atividades do dia']
const Task = (value) => {
  return (
    value.map((item) => <li>{item}</li>)
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Tasks</h1>
        <ol>
          {Task(arr)}
        </ol>
      </div>
    );
  }
}

export default App;
