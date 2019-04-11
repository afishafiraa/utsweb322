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
  

  render() {
    
    return (
      <div className="App">
        <button className="btn btn-danger">Change Theme</button>  
      
      </div>
    );
  }
}

export default App;
