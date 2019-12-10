import React, { Component } from 'react';

import axios from 'axios';

class Following extends Component {
    constructor(){
        super();
        this.state = {
            following: []
        }
    }

    componentDidMount(){
        axios  
            .get(`https://api.github.com/users/erferguson/following`)
            .then(result => {
                console.log('CDM', result.data)
                this.setState({following: result.data});
            })
            .catch(error => {
                console.log(`Error, oh to error: ${error}`)
            })
    }

    render(){
        const { following } = this.state;
        console.log('Render', this.state)
        return (
            <>
                <h4>Sequor Autem Populus:</h4>
                {following.map(followed => {
                    {console.log(followed)}
                    return (
                    <>
                        <img src={followed.avatar_url} />
                        <p>{followed.login}</p>
                    </>
                    )
                })}
            </>
        )
    } 
}
export default Following;
    