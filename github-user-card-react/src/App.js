import React, { Component } from 'react';

import CardComponent from './components/CardComponent';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        id: '',
        name: 'Eric',
        login: 'erferguson',
        avatar_url: '',
        html_url: '',
        bio: '',
        location: '',
        followers: 0,
        following: 7
      },
      followers: [{
        id: '',
        name: 'Eric',
        login: 'erferguson',
        avatar_url: '',
        html_url: '',
        bio: '',
        location: '',
        followers: 0,
        following: 7
      }]
    }
  }
  

  render(){
    return (
      <>
      <h1>Github User Card</h1>
      <CardComponent user={this.state.user}/>
      </>
    )
  }
}

export default App;