import React, { Component } from 'react';

import axios from 'axios';

class CardComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            user: props.user
        }
    }

    componentDidMount(){
        axios
          .get(`https://api.github.com/users/erferguson`)
          .then(result => {
            console.log('1st', result);
            this.setState({user: result.data});
            return axios.get(this.state.user.followers_url)
          })
        //   .then(result => {
        //     console.log('2nd', result);
        //     this.setState({user: this.state.user, followers: result.data})
        //     console.log(this.state)
        //   })
          .catch(error => {
            console.log(`Error, oh to error: ${error}`)
          })
      }
    
      render() {
          {console.log(this.state)}
          return (
              <>
              <div>
                  {this.state.avatar_url}
                  <p>Name: {this.state.user.name}</p>
                  <p>About: {this.state.user.bio}</p>
                  <p>Location: {this.state.user.location}</p>
              </div>
              <div>
                  <p>Followers: {this.state.user.followers}</p>
                  <p>Following: {this.state.user.following}</p>
              </div>
              </>
          )
      }
}
export default CardComponent;