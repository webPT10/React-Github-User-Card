import React, { Component } from 'react';

import CardComponent from './components/CardComponent';
import Following from './components/Following';

import "./App.css"

class App extends Component {

  render(){
    return (
      <>
      <h1>Github User Card</h1>
      <CardComponent />
      <Following />
      </>
    )
  }
}

export default App;