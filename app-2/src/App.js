import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      names: ['Murr', 'Kels', 'Bug', 'Benny', 'Noly']
    }
  }



  render() {
    let newArray = this.state.names.map((element, index) => {
      return <h1 key={index}>{element}</h1>
    })
    return (
      <div className="App" >
        {newArray}
      </div>
    );
  }
}


