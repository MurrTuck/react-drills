import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      superhero: ['iron man', 'capt america', 'black widow', 'hulk', 'thor', 'spider-man', 'ant-man', 'black panther'],
      filterSuperhero: ''
    }
  }

  handleChange(value) {
    this.setState({ filterSuperhero: value })
  }

  render() {
    console.log(this.state)
    let listOfHero = this.state.superhero.filter((element, index) => {
      return element.includes(this.state.filterSuperhero)
    }).map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        {listOfHero}
      </div>
    );
  }
}

export default App;
