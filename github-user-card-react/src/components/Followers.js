import React, { Component } from 'react';

import axios from 'axios';

import CardComponent from './CardComponent';

class Followers extends Component {
    constructor(props){
        super(props);
        this.state = {
            followers: props.followers
        }
    }

    componentDidMount(){
        axios  
            .get(`https://api.github.com/users/${this.state.followers.login}`)
            .then(result => {
                this.setState({user: result.data});
                return axios.get(this.state.user.followers_url)
            })
            // .then(result => {
            //     this.setState({user: this.state.user, followers: result.data})
            // })
            .catch(error => {
                console.log(`Error, oh to error: ${error}`)
            })
    }

    render(){
        {console.log('Render', this.state)}
        return (
            <>
                {this.state.followers.map(follower => {
                    {console.log(follower)}
                    return <CardComponent user={follower}/>
                })}
            </>
        )
    } 
}
export default Followers;
    