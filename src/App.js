import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      text : 'theme light',
      color : 'putih'
    };
  }

  handleClick = (i) => {
    this.setState ({
      text : text[i],
      color : color[i]
    })
  }
  

  render() {
    
    return (
      <div className={"App" + this.state.color}>
        <button>Change Theme</button>  
      
      {this.state.text}
      </div>
    );
  }
}

export default App;
