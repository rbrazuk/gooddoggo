import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
