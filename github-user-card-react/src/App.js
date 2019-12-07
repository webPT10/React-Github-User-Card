import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  componentDidMount(){
    this.fetchUserDetails()
  }

  fetchUserDetails = () => {
    axios
      .get(`https://api.github.com/users/erferguson`)
      .then(result => {
        console.log(result);
        this.setState({
        })

      })
      .catch(error => {
        console.log('Error, oh to error:', error)
      })
  }

  render(){
    return (
      <>
      <h1>Github User Card</h1>
      </>
    )
  }
}

export default App;