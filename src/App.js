import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "joao pedro"
    }
  }

  render() {
    const {name} = this.state;

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={()=> {alert("TESTANDO O EVENTO")}}>
            {name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
