import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Image from "./components/Image"

class App extends Component {

  render() {

    return (
      <div className="App">
        <Image url={'https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg'} />
      </div>
    )
  }
}

export default App;
