import React, { Component } from 'react';
import './App.css';
import { HomePage } from './components/homepage.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  addCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 2,
      };
    });
  };

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
