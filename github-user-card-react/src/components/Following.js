import React, { Component } from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
                    <div className='following-div'>
                        <Card className='following-card'>
                            <CardActionArea>
                                <CardContent className='follower-content'>
                                    <Typography>
                                        <img src={followed.avatar_url} />
                                        <p>{followed.login}</p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    )
                })}
            </>
        )
    } 
}
export default Following;
    