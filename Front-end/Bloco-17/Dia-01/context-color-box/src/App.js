import { Component } from 'react';
import ColorBox from './components/ColorBox';
import MyContext from './MyContext';

class App extends Component {
  state = {
    background: ['blue', 'red', 'yellow'],
  };

  changeBackground = () => {
    const { background } = this.state;
    console.log(background.reduce((acc, curr) => acc + curr, []));
  }

  render() {
    return(
      <div>
        <MyContext.Provider value={this.state.background}>
          <ColorBox />
        </MyContext.Provider>
        <button type='button' onClick={this.changeBackground}>Entrar</button>
      </div>
    );
  }
}

export default App;
