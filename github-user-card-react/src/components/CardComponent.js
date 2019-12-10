import React, { Component } from 'react';

import axios from 'axios';

class CardComponent extends Component {
    state = {
        user: ''
    }

    componentDidMount(){
        axios
          .get(`https://api.github.com/users/erferguson`)
          .then(result => {
            console.log('1st', result);
            this.setState({user: result.data});
          })
          .catch(error => {
            console.log(`Error, oh to error: ${error}`)
          })
      }
    
      render() {
          console.log(this.state)
          return (
              <>
              <div>
                  <img src = {this.state.user.avatar_url} />
                  <p>Name: {this.state.user.name}</p>
                  <p>About: {this.state.user.bio}</p>
                  <p>Location: {this.state.user.location}</p>
              </div>
              </>
          )
      }
}
export default CardComponent;