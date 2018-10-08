import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import Nav from './components/nav/nav';
import Main from './components/main/main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Main />
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
