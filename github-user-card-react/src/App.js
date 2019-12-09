import React, { Component } from 'react';

import CardComponent from './components/CardComponent';
import Followers from './components/Followers';
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
        followers_url: '',
        following: 7,
        following_url: ''
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
        followers_url: '',
        following: 7,
        following_url: ''
      }]
    }
  }
  

  render(){
    return (
      <>
      <h1>Github User Card</h1>
      <CardComponent user={this.state.user}/>
      <Followers followers={this.state.followers}/>
      </>
    )
  }
}

export default App;